import Signup from "./Signup";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
    {/* <h1> Hello, World!!</h1>
    <h2> Signup Form</h2> */}
    <Signup />
   </ChakraProvider>
  );
}

export default App;
