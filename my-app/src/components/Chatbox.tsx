import { Box, Heading, Text, FormControl, Input, Button, CSSObject  } from '@chakra-ui/react';
import React, { useState } from 'react';
//import axios from 'axios';
import { Configuration, OpenAIApi,  } from 'openai';


export const ChatBox: React.FC = () => {

    const { Configuration, OpenAIApi } = require("openai");

    const configuration = new Configuration({
        apiKey: "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",
    });
    const openai = new OpenAIApi(configuration);

    async function generateChatResponse(prompt: string): Promise<string> {
        // Set up the chat completion parameters
        // const response = await openai.Completion.create({
        //     engine: 'davinci',
        //     prompt: prompt,
        //     maxTokens: 100,
        //     temperature: 0.7,
        //     n: 1,
        //     stop: ['\n'],
        //   });
        try {
            const response = await openai.createChatCompletion({
                model: "davinci",
                messages: [{"role": "system", "content": "You are a helpful assistant."}, {role: "user", content: prompt}],
              });
          
            // Extract and return the reply from the API response
            const reply = response.choices?.[0]?.message?.content || '';
            return reply.trim();

        } catch (error: any) {
            return "No connection test string test stringtest stringtest stringtest stringtest stringtest stringtest stringvvtest stringvtest stringvvtest string";

        }

        
      }

      async function chatWithBot() {
        const userMessage = 'Hello, how can I help you?';
        const botReply = await generateChatResponse(userMessage);
        console.log('Bot:', botReply);
      }

    

    

  // State to store the user input and response from ChatGPT
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState<string[]>([]);

  // Function to handle user input
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  // Function to send user input to ChatGPT and get response
  async function handleSendMessage() {
   
    const chatGptResponse = await generateChatResponse(userInput)
    
    // Add user input and ChatGPT response to chat history
    setChatHistory(prevChatHistory => [...prevChatHistory, "Me: " + userInput, ">> " + chatGptResponse]);

    // Clear the user input
    setUserInput('');
  };

  const blackPlaceholderStyles: CSSObject = {
    '::placeholder': {
      color: 'black',
    },
  };

  return (
    <Box mt={4}>
      <Text fontWeight="bold" mb={2} color="black" >Chat History:</Text>
      {chatHistory.map((message, index) => (
        <Text color="black" key={index}>{message}</Text>
      ))}
      <FormControl mt={4} color="black">
        <Input
            color="black"
          value={userInput}
          onChange={handleInputChange}
          outlineColor="blue.500"
          placeholder="Type your question..."
          sx={blackPlaceholderStyles}
        />
        <Button mt={2} colorScheme="blue" onClick={handleSendMessage}>
          Send
        </Button>
      </FormControl>
    </Box>
  );
};

export default ChatBox;