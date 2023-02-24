import { BrowserRouter, Route, Routes as Router } from "react-router-dom";
import Characters from "./pages/Characters";
import Main from "./pages/Main";

function Routes(){
  return (
    <BrowserRouter>
      <Router>
        <Route element={<Main />} path="/" />
        <Route element={<Characters />} path="/characters" />
        <Route element={<div> LOCATION </div>} path="/location" />
        <Route element={<div> EPISODES </div>} path="/episodes" />
      </Router>
    </BrowserRouter>
  );
}

export default Routes