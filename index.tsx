import App from "./src/App";
import { registerRootComponent } from "expo";

const Main = () => {
  return <App />;
};

registerRootComponent(Main);
