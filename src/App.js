import EyesOnMe from "./components/Events";
import "./styles.css";
import ClickityClick from "./components/State";
import { Mounting } from "./components/Mounting";
import { Counter } from "./components/Updating";
import { ErrorPhase } from "./components/ErrorPhase";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <EyesOnMe />
      <ClickityClick />
      <Mounting />
      <Counter />
      <ErrorPhase />
    </div>
  );
}
