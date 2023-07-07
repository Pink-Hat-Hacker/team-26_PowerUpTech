import { Button, Box, Center} from "@chakra-ui/react";
import { QuizPage } from "./pages/QuizPage"
import { useEffect, useState } from "react"
// import {
//   IconButton,
//   IconButtonProps,
// } from "@chakra-ui/react"



export const GenerateTestButton = () =>{
  const [data, setData] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);

  function handleButtonClick() {
    setShowQuiz(!showQuiz);
  }
  
  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = () => {
    fetch('http://127.0.0.1:8001/generateProblems').then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Request failed');
      }
    }).then((data) => {
      setData(data);
    }).catch((error) => {
      console.error(error);
    })
  };

  

  return (
    <Box width="800px" height="500px"> 
      {!showQuiz &&  <Center><Button marginTop="200px" colorScheme="blue" onClick={handleButtonClick}>Start Standard Quiz</Button></Center>}
      {showQuiz && <QuizPage data={data} setShowQuiz={setShowQuiz}/>}
    </Box>
   
  );
};