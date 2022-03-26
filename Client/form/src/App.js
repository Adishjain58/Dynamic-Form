import Config from "./components/Config/Config";
import Form from "./components/Form/Form";
import { Routes, Route } from "react-router";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Config />} />
      <Route path="/form" element={<Form />} />
    </Routes>
  );
}

export default App;
