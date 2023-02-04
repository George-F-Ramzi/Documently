import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import { useEffect } from "react";

function App() {
  const { editor, onReady } = useFabricJSEditor();

  useEffect(() => {}, []);

  const onAddCircle = () => {
    editor?.addCircle();
  };

  return (
    <div className="App">
      <button onClick={onAddCircle}>Add circle</button>
      <FabricJSCanvas className="sample-canvas" onReady={onReady} />
    </div>
  );
}

export default App;
