import { useState } from "react";
import StatusBadge from "./Components/StatusBadge.jsx";

function App() {
  const [status, setStatus] = useState("online");

  return (
    <div style={{ padding: "40px" }}>
      <h2>User Status</h2>

      <StatusBadge status={status} />

      <button onClick={() => setStatus("online")}>Online</button>
      <button onClick={() => setStatus("offline")} style={{ margin: "0 10px" }}>
        Offline
      </button>
      <button onClick={() => setStatus("busy")}>Busy</button>
    </div>
  );
}

export default App;
