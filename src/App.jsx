import React, { useState } from 'react';
import './App.css';
import says from './says';

const App = () => {
  const [currentImage, setCurrentImage] = useState();

  const handleClick = () => {
    const random = says[Math.floor(Math.random() * says.length)];
    setCurrentImage(random);
    console.log(random);
  };

  // 자식 컴포넌트 1 : 뽑기 버튼
  const SayButton = ({ onClick }) => (
    <button onClick={onClick} className="say-button">
      🎲 랜덤 뽑기 🎲
    </button>
  );

  // 자식 컴포넌트 2 : 뽑한 짤
  const SayCard = ({ imgUrl }) => (
    <div className="say-card">
      <img src={imgUrl} alt="무도 명언 짤"/>
    </div>
  );

  return (
    <div className="app-container">
      <div className="header">
        <h1>🗣 거성 박명수 선생의 하찮은 짤 모음.zip</h1>
        <SayButton onClick={handleClick} />
      </div>

      {currentImage && <SayCard imgUrl={currentImage} />}
    </div>
  );
};

export default App;