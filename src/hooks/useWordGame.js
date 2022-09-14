import {useEffect, useState, useRef} from 'react';

function useWordGame(startingTime = 20) {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(startingTime);
  const [hasGameStarted, setHasGameStarted] = useState(false);
  const [wordCount, setWordCount] = useState(-1);
  const textareaRef = useRef();

  function wordCounter(text) {
    const words = text.trim().split(' ');
    return words.filter(word => word !== '').length;
  }

  function startGame() {
    setText("");
    setTimeRemaining(startingTime);
    setWordCount(-1);
    setHasGameStarted(true)
    setTimeout(() => {
      textareaRef.current.focus();
    }, );
  }

  function endGame() {
    setHasGameStarted(false);
    setWordCount(wordCounter(text));
  }

  useEffect(() => {
    if(timeRemaining > 0 && hasGameStarted) {
      setTimeout(() => {
        setTimeRemaining( time => time -1);
      }, 1000)
    } else if(timeRemaining === 0){
      endGame();
    }
  }, [timeRemaining, hasGameStarted])

  return {textareaRef, hasGameStarted, text, setText, timeRemaining, startGame, wordCount}
}

export default useWordGame;
