import { useState } from "react"; {/* This module is to store information to be sent to the backend */}

export default function About() {
  const [resolution, setResolution] = useState("");
  const [result, setResult] = useState("");

  async function handleEnhance() {
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: resolution }),
    });

    const text = await response.text();
    setResult(text);
  }

  return (
    <div
      className="about"
      style={{
        padding: "2rem",
        maxWidth: "600px",
        margin: "0 auto",
        textAlign: "center"
      }}
    >
      <h2>AI Resolution Enhancer</h2>

      <textarea
        rows={4}
        placeholder="Write your resolution here..."
        value={resolution}
        onChange={(e) => setResolution(e.target.value)}
        style={{
          width: "100%",
          marginTop: "1rem",
          padding: "0.5rem",
          fontSize: "1rem"
        }}
      />

      <button
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          cursor: "pointer"
        }}
        onClick={handleEnhance}
      >
        Enhance
      </button>

      <p style={{ marginTop: "1rem" }}>
        <strong>Result:</strong> {result}
      </p>
    </div>
  );
}