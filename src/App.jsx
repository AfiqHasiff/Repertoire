import { ThreeDCardComponent, MacbookScrollComponent, LampComponent } from "./layouts";
import "./App.css";

// TODO: Fonts
// TODO: Relative pathing config

const App = () => {
  return (
    <div id="appWrapper">
      <LampComponent />
      <MacbookScrollComponent />
      <ThreeDCardComponent />
      <ThreeDCardComponent />
    </div>
  );
};

export default App;
