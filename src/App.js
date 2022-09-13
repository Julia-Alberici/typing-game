import {useEffect, useState} from 'react';

function App() {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(5);
  const [hasGameStarted, setHasGameStarted] = useState(false);

  function wordCounter(text) {
    const words = text.trim().split(' ');
    return words.filter(word => word !== '').length;
  }

  useEffect(() => {
    if(timeRemaining > 0 && hasGameStarted) {
      setTimeout(() => {
        setTimeRemaining( time => time -1);
      }, 1000)
    } else{
      setHasGameStarted(false);
    }
  }, [timeRemaining, hasGameStarted])

  return (
    <>
      <h1>How fast do you type?</h1>
      <textarea value={text} onChange ={e => setText(e.target.value)} />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={() => setHasGameStarted(true)}>Start</button>
      <h1>Word count: ???</h1>
    </>
  );
}

export default App;
