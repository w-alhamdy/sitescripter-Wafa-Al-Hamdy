console.log("cookies.js loaded");

window.addEventListener("load", () => {
  CookieConsent.run({

    guiOptions: {
      consentModal: {
        layout: "box",
        position: "bottom right"
      },
      preferencesModal: {
        layout: "box"
      }
    },

    categories: {
      necessary: { enabled: true, readOnly: true },
      analytics: { autoClear: { cookies: [ { name: /^_ga/ }, { name: "_gid" } ] } }
    },

    language: {
      default: "en",
      translations: {
        en: {
          consentModal: {
            title: "We use cookies 🍪",
            description: "We use cookies to improve your experience and analyse website traffic.",
            acceptAllBtn: "Accept all",
            acceptNecessaryBtn: "Essential only",
            showPreferencesBtn: "Choose preferences"
          },
          preferencesModal: {
            title: "Cookie preferences",
            acceptAllBtn: "Accept all",
            acceptNecessaryBtn: "Essential only",
            savePreferencesBtn: "Save choices",
            sections: [
              { title: "Essential cookies", description: "Required for the website to function properly.", linkedCategory: "necessary" },
              { title: "Analytics cookies", description: "Help us understand visitor behaviour.", linkedCategory: "analytics" }
            ]
          }
        }
      }
    }

  });
});

