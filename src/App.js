import useWordGame from './hooks/useWordGame';

function App() {
  const game = useWordGame(5)

  return (
    <>
      <h1>How fast do you type?</h1>
      <textarea ref={game.textareaRef} disabled={!game.hasGameStarted} value={game.text} onChange ={e => game.setText(e.target.value)} />
      <h4>Time remaining: {game.timeRemaining}</h4>
      <button disabled={game.hasGameStarted} onClick={game.startGame}>Start</button>
      {game.wordCount >= 0 ? <h1>Word count: {game.wordCount}</h1> : '' }
    </>
  );
}

export default App;
