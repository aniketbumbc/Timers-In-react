import React, { useState, useEffect } from 'react';
const styleObj = {
  visibility: 'hidden',
};

const HideText = () => {
  const [applyClass, setApplyClass] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setApplyClass(!applyClass);
    }, 1000);
    return () => clearInterval(interval);
  }, [applyClass]);

  return (
    <>
      {applyClass ? <h3 style={styleObj}> Text Here</h3> : <h3> Text Here</h3>}
    </>
  );
};

export default HideText;
