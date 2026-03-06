import workflow from "./workflow.json";

function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <n8n-demo workflow={JSON.stringify(workflow)}></n8n-demo>
    </div>
  );
}

export default App;
