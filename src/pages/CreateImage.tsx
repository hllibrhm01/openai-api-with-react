import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import "../assets/style/CreateImage.css";
import { API_KEY } from "../assets/constants/uri";

const createImageStyle = {
    background: 'linear-gradient(to right, #12c2e9, #c471ed, #f64f59)'
};

const CreateImage = () => {
    const [text, setText] = useState<string>("");
    const [imageUrl, setImageUrl] = useState<any | null>(null);

    const configuration = new Configuration({
        organization: "org-2iWfHbWjS5XuhofzR8Vpo4gO",
        apiKey: API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    const runCreateImage = async () => {
        const response = await openai.createImage({
            prompt: text,
            n: 1,
            size: "1024x1024",
        });

        let imageUrlText = response.data.data[0].url;
        setImageUrl(imageUrlText);
    };

    return (
        <div className="container devContainer" style={createImageStyle}>
            <h1>Create Image with OpenAI API</h1>
            <input type="text" className="form-control w-25" placeholder="Enter your text for image" aria-label="small" aria-describedby="basic-addon1"
                value={text}
                onChange={e => setText(e.target.value)} />
            <button type="button" onClick={runCreateImage} className="btn btn-secondary btn-lg">Create image</button>
            {
                imageUrl === null ? (<></>) : (<img src={imageUrl} alt="Image" className="image-box" />)
            }
        </div>
    );
};

export default CreateImage;