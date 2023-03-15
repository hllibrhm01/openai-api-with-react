import React from "react";
import "../assets/style/App.css";
import CardButton from "../components/CardButton";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="App">
      <div>
        <div>
          <CardButton title="Text Completion" description="Text Completion with OpenAI" onClick={(): void => navigate('text-completion')} />
        </div>
        <div>
          <CardButton title="Create Image" description="Create Image with OpenAI" onClick={(): void => navigate('create-image')} />
        </div>
      </div>
      <div>
        <div>
          <CardButton title="Code Completion" description="Code Completion with OpenAI" onClick={(): void => navigate('code-completion')} />
        </div>
      </div>
    </div>
  );
};

export default Home;
