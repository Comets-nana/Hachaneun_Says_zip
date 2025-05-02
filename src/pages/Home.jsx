import React, { useState } from 'react';
import says from '../says';
import SayButton from '../components/SayButton';
import SayCard from '../components/SayCard';

const Home = () => {
    const [currentImage, setCurrentImage] = useState(null);

    const handleClick = () => {
        const random = says[Math.floor(Math.random() * says.length)];
        setCurrentImage(random);
    };
  
    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <h1>🗣 거성 박명수 선생의 하찮은 짤 모음.zip</h1>
            <SayButton onClick={handleClick} />
        </div>
        
        <br /><br />
        {currentImage && <SayCard imgUrl={currentImage} />}
      </div>
    );
  };

export default Home;