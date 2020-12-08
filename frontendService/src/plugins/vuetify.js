import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: "#2196f3",
        secondary: "#607d8b",
        accent: "#3f51b5",
        error: "#f44336",
        warning: "#ff9800",
        info: "#8bc34a",
        success: "#4caf50"
      }
    }
  }
});
