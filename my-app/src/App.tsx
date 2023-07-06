import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import { QuizPage } from "./pages/QuizPage"

export const App = () => { 
  return (

  <ChakraProvider theme={theme}>
      <QuizPage></QuizPage>
  </ChakraProvider>
)
}