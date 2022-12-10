import Signup from "./Signup";
// import { ChakraProvider } from "@chakra-ui/react";
import Login from "./Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    // <>
    //   <Signup />
    // </>
    <Routes>
      <Route path="/" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
    </Routes>
  );
}

export default App;
