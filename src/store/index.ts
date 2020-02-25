import Vue from "vue";
import Vuex from "vuex";
import { Store } from "./store";
import { createVuexStore } from "vuex-simple";
import {
  buildDevDependencyContainer,
  buildProductionDependencyContainer
} from "../app.container";

Vue.use(Vuex);
if (process.env.NODE_ENV === "production") {
  buildProductionDependencyContainer();
} else {
  buildDevDependencyContainer();
}

const instance = new Store();
// create and export our store
export default createVuexStore(instance, {
  strict: process.env.NODE_ENV !== "production",
  modules: {},
  plugins: []
});
