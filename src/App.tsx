import { defineComponent } from "vue";
import "./style/main.scss";

export default defineComponent({
  name: "App",
  render() {
    return (
      <>
        <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div>
        <router-view />
      </>
    );
  },
});
