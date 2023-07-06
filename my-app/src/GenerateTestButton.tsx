import { useState } from "react"
// import {
//   IconButton,
//   IconButtonProps,
// } from "@chakra-ui/react"

export const GenerateTestButton = () =>{
  const [data, setData] = useState(null);

  const fetchData = () => {
    fetch('/generateProblems').then((response) => {
      if (response.ok) {
        console.log(response.json());
        return response.json();
      } else {
        throw new Error('Request failed');
      }
    }).then((data) => {
      setData(data);
    }).catch((error) => {
      console.log(data)
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