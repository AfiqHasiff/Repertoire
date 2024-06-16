import { ThreeDCardComponent, MacbookScrollComponent, LampComponent } from "./layouts";
import "./App.css";

const App = () => {
  return (
    <div id="appWrapper">
      <LampComponent />
      <MacbookScrollComponent />
      <ThreeDCardComponent />
    </div>
  );
};

export default App;
