import * as React from "react"
import {
  ChakraProvider,
  Box,
  Flex,
  Center,
  Img,
  theme,
} from "@chakra-ui/react"
import { QuizPage } from "./pages/QuizPage"
import backgroundImage from "./images/quizBgCrop.png";

import { GenerateTestButton } from "./GenerateTestButton"
// import { QuizPage } from "./pages/QuizPage"

export const App = () => { 
  return (

  <ChakraProvider theme={theme}>
    <Flex
    backgroundImage={`url(${backgroundImage})`}
    bgSize="100%"

      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Box width="800px"
        position="relative" 
        height="500px" 
        borderRadius="10px" 
        display="flex"
        alignItems="top"
        justifyContent="top" 
        backgroundColor="white"
        boxShadow='dark-lg'
      >
        <Center>
          {<GenerateTestButton></GenerateTestButton>}
          {/* <QuizPage></QuizPage> */}
        </Center>
        
      </Box>
    </Flex>
  </ChakraProvider>
)
}