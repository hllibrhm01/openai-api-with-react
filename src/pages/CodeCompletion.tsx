import React, { useState } from 'react';
import '../assets/style/Common.css';
import { API_KEY } from '../assets/constants/uri';

const codeCompletionStyle = {
    background: 'linear-gradient(to right, #12c2e9, #c471ed, #f64f59)'
}

const CodeCompetion = () => {
  const [input, setInput] = useState('');
  const [completion, setCompletion] = useState('');

  const handleCompletion = async () => {
    const response = await fetch('https://api.openai.com/v1/engines/text-davinci-002/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        prompt: input,
        max_tokens: 100,
        n: 1,
        stop: '',
        temperature: 0.5,
      }),
    });
    const json = await response.json();
    setCompletion(json.choices[0].text);
  };

  return (
    <div className='devContainer' style={codeCompletionStyle}>
       <h1>Code Completion with OpenAI API</h1>
      <textarea
      className='form-control w-50'
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button type="button" className="btn btn-secondary btn-lg" onClick={handleCompletion}>Generate Completion</button>
      <div>Completed Code :</div>
      <textarea
        className='form-control w-50'
        value={completion} readOnly
        style={{
            width: 1000,
            height: 500,
        }}
      />
    </div>
  );
};

export default CodeCompetion;
