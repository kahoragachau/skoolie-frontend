import Signup from "./Signup";
import Login from "./Login";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/dashboard" exact element={<Dashboard />} />
    </Routes>
  );
}

export default App;
