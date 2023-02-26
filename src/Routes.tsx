import {
  BrowserRouter,
  Navigate,
  Route,
  Routes as Router,
} from "react-router-dom";
import Characters from "./pages/Characters";
import Episodes from "./pages/Episodes";
import Locations from "./pages/Locations";

function Routes() {
  return (
    <BrowserRouter>
      <Router>
        <Route element={<Navigate to="/characters" />} path="/" />
        <Route element={<Characters />} path="/characters" />
        <Route element={<Locations />} path="/locations" />
        <Route element={<Episodes />} path="/episodes" />
      </Router>
    </BrowserRouter>
  );
}

export default Routes;
