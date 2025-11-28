import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Dashboard from "./views/Dashboard";
import MapPage from "./views/MapPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Dashboard />}/>
      <Route path="/map" element={<MapPage />}/>
      </Route>
    </Routes>
  );
}

export default App;
