import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Flex,
  Center,
  Img,
  theme,
} from "@chakra-ui/react"
import { QuizPage } from "./pages/QuizPage"
import backgroundImage from "./images/quizBgCrop.png";


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
          <QuizPage></QuizPage>
      </Box>
    </Flex>
  </ChakraProvider>
)
}