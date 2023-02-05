import { useEffect } from "react";
import { Text } from "./Components/elemnts";

function App() {
  useEffect(() => {}, []);

  return (
    <div className="App">
      <button
        onClick={() => {
          document.getElementById("root")?.appendChild(Text());
        }}
      >
        Text
      </button>
    </div>
  );
}

export default App;
