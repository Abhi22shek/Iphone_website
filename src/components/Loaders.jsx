import React, { useState, useEffect } from 'react';

const Loader = ({ message = 'Loading...', type = 'bars' }) => {
  const [progress, setProgress] = useState(0);

  // Customize loader types (add more as needed)
  const loaders = {
    bars: () => (
      <div className="loader-bars">
        <div className="bar" style={{ width: `${progress}%` }} />
      </div>
    ),
    spinner: () => (
      <div className="loader-spinner">
        <div className="spinner-inner" />
      </div>
    ),
  };

  useEffect(() => {
    // Simulate loading progress (replace with actual loading logic)
    const intervalId = setInterval(() => {
      setProgress(prevProgress => Math.min(prevProgress + 5, 100));
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  const LoaderContent = loaders[type] || loaders.bars; // Fallback to bars

  return (
    <div className="loader-container">
      {LoaderContent()}
      <p>{message}</p>
    </div>
  );
};

export default Loader;
