import { useState } from "react"
// import {
//   IconButton,
//   IconButtonProps,
// } from "@chakra-ui/react"

export const GenerateTestButton = () =>{
  const [data, setData] = useState(null);

  const fetchData = () => {
    fetch('http://127.0.0.1:8001/generateProblems').then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Request failed');
      }
    }).then((data) => {
      console.log(data);
      setData(data);
    }).catch((error) => {
      console.error(error);
    })
  };

  return (
    <div>
      <button onClick={fetchData}>Get Data</button>
      {data && (
        <div>
          <h2>Retrieved Data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};