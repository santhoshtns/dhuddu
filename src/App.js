function App() {
  const name = "Dhuddu";

  function handleNameChange() {
    const names = ["Earn", "Grow", "Give"];
    const int = Math.floor(Math.random()*3);
    return names[int];
  }

  return <div>
    Subscribe to {name}
    <p>Let's {handleNameChange()} Money</p>
  </div>;
}

export default App;
