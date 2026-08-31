import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: color,
        position: "relative",
      }}
    >
      <div
        style={{
          position: "fixed",
          bottom: "30px",
          left: "0",
          right: "0",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "10px",
            backgroundColor: "white",
            padding: "10px",
            borderRadius: "30px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
          }}
        >
          <button
            onClick={() => setColor("red")}
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "20px",
              cursor: "pointer",
            }}
          >
            Red
          </button>

          <button
            onClick={() => setColor("green")}
            style={{
              backgroundColor: "green",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "20px",
              cursor: "pointer",
            }}
          >
            Green
          </button>

          <button
            onClick={() => setColor("blue")}
            style={{
              backgroundColor: "blue",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "20px",
              cursor: "pointer",
            }}
          >
            Blue
          </button>

          <button
            onClick={() => setColor("orange")}
            style={{
              backgroundColor: "orange",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "20px",
              cursor: "pointer",
            }}
          >
            Orange
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
