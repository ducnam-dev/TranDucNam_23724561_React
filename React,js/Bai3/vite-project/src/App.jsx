import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div style={{ margin: "40px" }}>
      <h2>Student Form</h2>

      <div>
        <label>Tên: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div style={{ marginTop: "10px" }}>
        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <hr />

      <h3>Thông tin bạn nhập:</h3>
      <p>👤 Tên: {name}</p>
      <p>📧 Email: {email}</p>
    </div>
  );
}

export default App;
