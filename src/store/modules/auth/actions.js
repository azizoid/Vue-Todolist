let timer;

export default {
  async signin(context, payload) {
    return context.dispatch("auth", { ...payload, mode: "signin" });
  },
  async signup(context, payload) {
    return context.dispatch("auth", { ...payload, mode: "signup" });
  },
  async logout(context) {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("tokenExpiration");

    clearTimeout(timer);

    context.commit("setUser", {
      token: null,
      userId: null,
      refresh: null,
    });
  },
  async auth(context, payload) {
    const mode = payload.mode;
    let url = "https://teklif.az/v1/auth/signin";

    if (mode === "signup") {
      url = "https://teklif.az/v1/auth/signup";
    }
    await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: payload.username,
        password: payload.password,
      }),
    })
      .then((result) => result.json())
      .then((responseData) => {
        const expiresIn = +responseData.expiresIn * 1000;
        const expirationDate = new Date().getTime() + expiresIn;

        localStorage.setItem("token", responseData.accessToken);
        localStorage.setItem("userId", responseData.username);
        localStorage.setItem("refreshToken", responseData.refreshToken);
        localStorage.setItem("tokenExpiration", expirationDate);

        timer = setTimeout(function() {
          context.dispatch("autoLogout");
        }, expiresIn);

        context.commit("setUser", {
          token: responseData.accessToken,
          userId: responseData.username,
          refreshToken: responseData.refreshToken,
        });
      })
      .catch((message) => {
        const error = new Error(
          message || "Failed to Authenticate.Check your login data."
        );
        throw error;
      });
  },

  async tryLogin(context) {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const refreshToken = localStorage.getItem("refreshToken");
    const tokenExpiration = localStorage.getItem("tokenExpiration");

    const expiresIn = +tokenExpiration - new Date().getTime();

    if (expiresIn < 1000) {
      return;
    }

    timer = setTimeout(() => {
      context.dispatch("autoLogout");
    }, expiresIn);

    if (token && userId && refreshToken) {
      context.commit("setUser", { token, userId });
    }
  },

  // async validateToken(context, payload) {
  //   await fetch("https://teklif.az/v1/auth/refreshtoken", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       accessToken: payload.token,
  //       refreshToken: payload.refreshToken,
  //     }),
  //   })
  //     .then((data) => data.json())
  //     .then(({ accessToken, username, refreshToken }) => {
  //       localStorage.setItem("token", accessToken);
  //       localStorage.setItem("userId", username);
  //       localStorage.setItem("refreshToken", refreshToken);

  //       context.commit("setUser", {
  //         token: accessToken,
  //         userId: username,
  //         refresh: refreshToken,
  //       });
  //     })
  //     .catch((message) => {
  //       const error = new Error(
  //         message || "Failed to Authenticate.Check your login data."
  //       );
  //       throw error;
  //     });
  // },
  autoLogout(context) {
    context.dispatch("logout");
    context.commit("setAutoLogout");
  },
};
