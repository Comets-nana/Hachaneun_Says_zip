import React from 'react';

function SayCard({ imgUrl }) {
  return (
    <div style={{ marginTop: '20px' }}>
      <img
        src={imgUrl}
        alt="무도 명언 짤"
        style={{ maxWidth: '100%', borderRadius: '8px' }}
      />
    </div>
  );
}

export default SayCard;