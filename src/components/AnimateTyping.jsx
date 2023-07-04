import React, { useState, useEffect } from 'react';

const AnimateTyping = ({ arr }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!arr || arr.length === 0) {
      // Handle the case when 'arr' is not present or empty
      return;
    }

    const interval = setInterval(() => {
      if (!isDeleting && !isPaused) {
        if (currentText === arr[currentIndex]) {
          // Pause after typing sentence
          setIsPaused(true);
          clearInterval(interval);
          setTimeout(() => {
            setIsDeleting(true);
            setIsPaused(false);
          }, 3000); // Pause duration after sentence is finished typing (adjust as needed)
        } else {
          // Typing animation
          setCurrentText(arr[currentIndex].slice(0, currentText.length + 1));
        }
      } else if (isDeleting && !isPaused) {
        // Removing animation
        setCurrentText(currentText.slice(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % arr.length);
        }
      }
    }, 50);

    return () => clearInterval(interval);
  }, [arr, currentIndex, currentText, isDeleting, isPaused]);

  if (!arr || arr.length === 0) {
    // Handle the case when 'arr' is not present or empty
    return null;
  }

  return (
    <div className="text-xl mb-3 font-['Russo_One'] flex">
      I'm a {currentText}
      <span className="opacity-0 animate-pulse inline-block h-auto my-1 w-1 bg-accent mx-1" />
    </div>
  );
};

export default AnimateTyping;
