import {useEffect, useState} from 'react';

function App() {
  const STARTING_TIME = 5;
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
  const [hasGameStarted, setHasGameStarted] = useState(false);
  const [wordCount, setWordCount] = useState(-1);

  function wordCounter(text) {
    const words = text.trim().split(' ');
    return words.filter(word => word !== '').length;
  }

  function startGame() {
    setText("");
    setTimeRemaining(STARTING_TIME);
    setWordCount(-1);
    setHasGameStarted(true)
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

  return (
    <>
      <h1>How fast do you type?</h1>
      <textarea value={text} onChange ={e => setText(e.target.value)} />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={startGame}>Start</button>
      {wordCount >= 0 ? <h1>Word count: {wordCount}</h1> : '' }
    </>
  );
}

export default App;
