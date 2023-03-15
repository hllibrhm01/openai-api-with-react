import React, { FC } from 'react';
import '../assets/style/Card.css';


interface CardButtonProps {
  title: string;
  description: string;
  onClick: () => void;
}

const cardButtonStyle = {
  background: 'linear-gradient(to right, #12c2e9, #c471ed, #f64f59)'
}

const CardButton: FC<CardButtonProps> = ({ title, description, onClick}) => {
  return (
    <button className="cardStyle"
      style={cardButtonStyle}
      onClick={onClick}>
      <div>
        <p>{title}</p>
      </div>
      <div>
        <p>{description}</p>
      </div>
    </button>
  );
}

export default CardButton;
