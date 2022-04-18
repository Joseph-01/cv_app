import Navbar from "./components/navbar/navbar";
import Main from "./components/body/body";
import MoreDetails from "./components/body/more_details";
// import "./App.css";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <div >
        <MoreDetails />
      </div>
    </div>
  );
}

export default App;
