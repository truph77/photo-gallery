import "./App.css";
import ImagesGrid from "./components/ImagesGrid";
import Title from "./components/Title";
import UploadFile from "./components/UploadFile";

function App() {
  return (
    <div className="App">
      <Title />
      <UploadFile />
      <ImagesGrid />
    </div>
  );
}

export default App;
