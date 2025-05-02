import React from 'react';

function SayButton({ onClick }) {
  return (
    <button onClick={onClick} style={{
      padding: '20px',
      fontSize: '20px',
      backgroundColor: '#ffcc00',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      color: '#000000',
      fontWeight: 'bold',
    }}>
      🎲 랜덤 뽑기 🎲
    </button>
  );
}

export default SayButton;