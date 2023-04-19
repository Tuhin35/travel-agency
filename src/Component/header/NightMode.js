import React, { useState } from 'react';

const NightMode = () => {
  // Set the state for the background color
  const [bgColor, setBgColor] = useState('#000');

  // Set the state for the moon color
  const [moonColor, setMoonColor] = useState('#ddd');

  // Set the state for the star color
  const [starColor, setStarColor] = useState('#fff');

  // Set the state for the text color
  const [textColor, setTextColor] = useState('#fff');

  // Toggle between day and night mode
  const toggleMode = () => {
    if (bgColor === '#000') {
      setBgColor('#fff');
      setMoonColor('#000');
      setStarColor('#333');
      setTextColor('#000');
    } else {
      setBgColor('#000');
      setMoonColor('#ddd');
      setStarColor('#fff');
      setTextColor('#fff');
    }
  };

  return (
    <div style={{ backgroundColor: bgColor, height: '100vh' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50vh' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ backgroundColor: moonColor, borderRadius: '50%', width: 160, height: 160 }}></div>
          <div style={{ marginTop: 32 }}>
            {[...Array(50)].map((_, index) => (
              <span key={index} style={{ color: starColor, fontSize: 8, marginRight: 4 }}>★</span>
            ))}
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50vh' }}>
        <button style={{ backgroundColor: '#fff', padding: '12px 24px', borderRadius: 4, cursor: 'pointer' }} onClick={toggleMode}>Toggle mode</button>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, padding: 16 }}>
        <p style={{ color: textColor }}>Good night!</p>
      </div>
    </div>
  );
};

export default NightMode;
