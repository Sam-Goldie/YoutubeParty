import React, { useState } from 'react';
import ReactDOM from 'react-dom';

console.log('hello folks!');

const App = () => {
  const [input, changeInput] = useState('');

  const handleOnChange = event => {
    const { text, value } = event.target;
    changeInput({ [text]: value });
  };

  return (
    <>
    <div>GREETINGS FROM ME, SAM!</div>
    <div>
      <input type='text' onChange={handleOnChange}/>
    </div>
    <div>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/IY9YNF5MMQo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    </>
  )
}

export default App;