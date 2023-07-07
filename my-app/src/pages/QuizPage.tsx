import React, { useState } from 'react';
import { Button, Heading, Radio, RadioGroup, VStack } from '@chakra-ui/react';

interface QuizPageProps {
  data: any;
}

interface Question {
  id: string;
  problem: string;
  answer: string;
}

// const questions: Question[] = [
//   {
//     id: '1',
//     text: 'What is the capital of France?',
//     options: ['Paris', 'London', 'Berlin', 'Madrid'],
//     answer: 'Paris',
//   },
//   {
//     id: '2',
//     text: 'Who wrote the novel "Pride and Prejudice"?',
//     options: ['Jane Austen', 'Charles Dickens', 'Leo Tolstoy', 'Mark Twain'],
//     answer: 'Jane Austen',
//   },
//   // Add more questions here
// ];

export const QuizPage: React.FC<QuizPageProps>= ({data}:{data: any}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);

  const questions: Question[] = data.test.map((problem: string, index: number) => ({
    id: index + 1,
    problem: problem,
    answer: data.answers[index]
  }));
  // console.log(questions);
  

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedOption === currentQuestion.answer) {
      setScore((prevScore) => prevScore + 1);
    }

    setSelectedOption('');
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <VStack spacing={4} align="stretch">
      <Heading as="h2" size="lg" mb={4}>
        Quiz
      </Heading>
      {currentQuestion ? (
        <>
          <Heading as="h3" size="md" mb={2}>
            {currentQuestion.problem}
          </Heading>
          {/* <RadioGroup value={selectedOption} onChange={setSelectedOption}>
            <VStack align="start">
              {currentQuestion.options.map((option) => (
                <Radio key={option} value={option}>
                  {option}
                </Radio>
              ))}
            </VStack>
          </RadioGroup> */}
          <Button colorScheme="blue" disabled={!selectedOption} onClick={handleNextQuestion}>
            Next Question
          </Button>
        </>
      ) : (
        <Heading as="h3" size="md" mb={2}>
          Quiz Completed! Your Score: {score}/{questions.length}
        </Heading>
      )}
    </VStack>
  );
};

export default QuizPage;
