import React, { useState } from 'react';
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input, VStack, Heading, Center, Spinner, Text, CSSReset } from '@chakra-ui/react';
import { motion, AnimatePresence} from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import Confetti from 'react-confetti';
import { Global } from '@emotion/react';
import {ChatBox} from "../components/Chatbox"

const MotionBox = motion(Box);

interface Question {
  id: string;
  text: string;
  answer: number;
}

const questions: Question[] = [
  {
    id: '1',
    text: 'What is the result of 2 + 2?',
    answer: 4,
  },
  {
    id: '2',
    text: 'What is the square root of 16?',
    answer: 4,
  },
  {
    id: '3',
    text: 'What is the result of 2 + 2?',
    answer: 4,
  },
  {
    id: '4',
    text: 'What is the result of 2 + 2?',
    answer: 4,
  },
  {
    id: '5',
    text: 'What is the result of 2 + 2?',
    answer: 4,
  },
  // Add more questions here
];

export const QuizPage: React.FC = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState<string[]>([]);
    const [formError, setFormError] = useState('');
    const [score, setScore] = useState(0);
    const [showFeedback, setShowFeedback] = useState(false);
    const [wrongAnswers, setWrongAnswers] = useState<number[]>([]);




    const currentQuestion = questions[currentQuestionIndex];

    const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setUserAnswers((prevAnswers) => {
        const updatedAnswers = [...prevAnswers];
        updatedAnswers[currentQuestionIndex] = value;
        return updatedAnswers;
      });
    };
  
    const handleNextQuestion = () => {
      const userAnswer = userAnswers[currentQuestionIndex];
      if (!userAnswer || isNaN(Number(userAnswer))) {
        setFormError('Please enter a valid number');
        return;
      }
  
      else if (Number(userAnswer) === currentQuestion.answer) {
          setScore((prevScore) => prevScore + 1);
      }

      else if (Number(userAnswer) !== currentQuestion.answer) {
        const updatedWrongAnswers = [...wrongAnswers];
        updatedWrongAnswers.push(currentQuestionIndex);
        setWrongAnswers(updatedWrongAnswers);
    }
  
      setFormError('');
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    };

    const showFeedBack = () => {
        setShowFeedback(!showFeedback);
    }

    const handleRegenrateQuiz = () => {

    }

    const CustomScrollbarStyle = `
        /* Track */
        ::-webkit-scrollbar {
            width: 8px;
            background-color: #f5f5f5;
        }

        /* Thumb */
        ::-webkit-scrollbar-thumb {
            background-color: #888;
            border-radius: 4px;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
            background-color: #555;
        }
        `;
  
    return (
      <VStack spacing={0} align="stretch" width="100%" >
        <Heading 
          as="h2" 
          height="70px" 
          size="lg" 
          mb={1} 
          color="black" 
          borderBottom="2px solid lightgray" 
          padding="0 30px" 
          boxShadow="0 3px 5px 1px rgba(0, 0, 0, 0.1)" 
          width="100%"
          textAlign="center"
          marginTop="20px"
          >
          Subject Quiz
        </Heading>
        <VStack height="100%">
        {currentQuestion ? (
          <VStack justifyContent="space-between" height="100%" marginTop="10px">
            <Box>
                <Heading as="h3" size="md" mb={2} color="black">
                {currentQuestion.text}
                </Heading>
                <FormControl isInvalid={!!formError} color="black">
                <FormLabel color="black">Enter your answer:</FormLabel>
                <Input
                    color="black"
                    outlineColor="blue.500"
                    type="number"
                    value={userAnswers[currentQuestionIndex] || ''}
                    onChange={handleAnswerChange}
                />
                <FormErrorMessage>{formError}</FormErrorMessage>
                </FormControl>
                <Center mt={2}>
                    <Button colorScheme="blue" onClick={handleNextQuestion} color="black">
                    Next Question
                    </Button>
                </Center>
            </Box>
            <Box fontSize="20px" mb={2} color="black">Question {currentQuestionIndex+1} of {questions.length}</Box>
          </VStack>
        ) : ( 
            <>
             {showFeedback ? (
             
                    <>
                        <CSSReset />
                        <Global styles={CustomScrollbarStyle} />
                        <Box overflowY="auto" height="100%" maxHeight="400px" padding="4" width="100%">
                            <Center>
                                <VStack>
                                {wrongAnswers.map((index) => (
                                    <Box key={index} mt={6} boxShadow='0 10px 10px rgba(0, 0, 0, 0.2)' borderRadius="10px" backgroundColor="gray.100" padding="4" minWidth="700px" maxWidth="700px">
                                        <Heading as="h4" size="md" mb={2} color="black">
                                        Question {index + 1}:
                                        </Heading>
                                        <Box color="black">{questions[index].text}</Box>
                                        {/* Add feedback for the wrong answer */}
                                        <Box color="red">Answer: {questions[index].answer}</Box>
                                        <ChatBox></ChatBox>
                                    </Box>
                                ))}
                                <Box >
                                    <Button color="black" marginTop="20px" colorScheme="green">
                                        Finish Review
                                    </Button>
                                    <Button onClick={handleRegenrateQuiz} color="black" marginTop="20px" marginLeft="20px" colorScheme="green">
                                        Regenerate Quiz
                                    </Button>
                                </Box>
                                </VStack>
                            </Center>
                        </Box>
                    </>
                
                
                ) : (
                <>
                <Heading as="h3" size="md" mb={2} color="black">
                Quiz Completed! Thank you for your answers. 
                </Heading>
                <MotionBox
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexDirection="column"
                    mt={8}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.75 }}
                >
                    <Heading color="black">
                        Score: {score}/{questions.length}
                    </Heading>
                </MotionBox>

                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: .9 }}
                    >
                        <FaCheckCircle size={48} color="green" />
                    </motion.div>
                    <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: .1 }}
                    >
                        <Confetti
                            width={800}
                            height={500}
                            recycle={false}
                            numberOfPieces={300}
                            confettiSource={{x:0 , y: 0, w: 800, h:0}}
                        />
                    </motion.div>
                </AnimatePresence>
                    <Heading as="h3" size="md" mt={12} ml={2} color="black">
                    <Button colorScheme="green" size="lg" onClick={showFeedBack}>Finish and Review Quiz</Button>
                </Heading>
                </>
             )}
              
            </>
            ) 
        }

        </VStack>
      </VStack>
    );
  };

export default QuizPage;
