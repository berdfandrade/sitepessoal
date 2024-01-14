
import { useState, useEffect } from "react";

export default function TypingMessage  ({ message, delay }) {
    const [displayedMessage, setDisplayedMessage] = useState('');
  
    useEffect(() => {
      let currentCharIndex = 0;
  
      const interval = setInterval(() => {
        if (currentCharIndex < message.length) {
          setDisplayedMessage(prevMessage => prevMessage + message[currentCharIndex]);
          currentCharIndex++;
        } else {
          clearInterval(interval);
        }
      }, delay);
  
      return () => clearInterval(interval);
    }, [message, delay]);
  
    return (
      <div>
        {displayedMessage}
      </div>
    );
  };
  