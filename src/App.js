import "./App.css";
import Navbar from "./component/Navbar";
import Textform from "./component/Textform";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About" />
      <div className="container">
        <Textform heading="Enter index to analyze" />
      </div>
    </>
  );
}
export default App;
