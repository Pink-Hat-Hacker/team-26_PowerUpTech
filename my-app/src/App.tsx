import * as React from "react"
import {
  ChakraProvider,
  Box,
  Flex,
  Center,
  theme,
} from "@chakra-ui/react"
import { GenerateTestButton } from "./GenerateTestButton"
// import { QuizPage } from "./pages/QuizPage"

export const App = () => { 
  return (

  <ChakraProvider theme={theme}>
    <Flex
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Box width="800px"
        position="relative" 
        height="500px" 
        borderRadius="10px" 
        display="flex"
        alignItems="center"
        justifyContent="center" 
        backgroundColor="green"
        boxShadow='dark-lg'
      >
        <Center>
          <GenerateTestButton></GenerateTestButton>
          {/* <QuizPage></QuizPage> */}
        </Center>
        
      </Box>
    </Flex>
  </ChakraProvider>
)
}