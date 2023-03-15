import React, { useEffect, useState } from "react";
import "../assets/style/TextCompletion.css";
import { API_KEY } from "../assets/constants/uri";

const textCompletionStyle = {
    background: 'linear-gradient(to right, #12c2e9, #c471ed, #f64f59)'
}

const TextCompletion = () => {
    const [inputText, setInputText] = useState<string>('');
    const [completedText, setCompletedText] = useState<string>('');

    const API_ENDPOINT = "https://api.openai.com/v1/engines/text-davinci-002/completions";

    const fetchData = async (): Promise<any> => {
        const response = await fetch(API_ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                prompt: inputText,
                max_tokens: 100,
                n: 1,
                stop: "",
                temperature: 0.5
            })
        });
        const data = await response.json();
        setCompletedText(data.choices[0].text);
    };

    useEffect(() => {
        fetchData();
        if (inputText) {
            fetchData();
        }
    }, [inputText]);


    return (
        <div className="devContainer" style={textCompletionStyle}>
            <h1>Text Completion with OpenAI API</h1>
            <textarea value={inputText} onChange={e => setInputText(e.target.value)} className="form-control w-50" rows={5}
                placeholder="Enter your text for completion"
            />
            <div>Completed Text :</div>
            <textarea
                className="form-control w-50"
                style={{
                    width: 1000,
                    height: 500,
                }}
                readOnly
                value={completedText} />
        </div>
    );
};

export default TextCompletion;