export default function AIChatPreview() {
  return (
    <section
      style={{
        padding: "60px 20px",
        textAlign: "center",
        background: "#eef4ff",
      }}
    >
      <h2>AI Study Assistant</h2>

      <p style={{ marginTop: "20px", fontSize: "18px" }}>
        Ask any Government Exam question and get instant AI-powered answers.
      </p>

      <div
        style={{
          maxWidth: "700px",
          margin: "30px auto",
          padding: "20px",
          background: "white",
          borderRadius: "12px",
          border: "1px solid #ddd",
        }}
      >
        <p><strong>You:</strong> What is Article 370?</p>

        <hr style={{ margin: "15px 0" }} />

        <p>
          <strong>ExamVerse AI:</strong> Article 370 granted special status to
          Jammu & Kashmir. It was effectively revoked in August 2019.
        </p>
      </div>

      <button>Open AI Chat</button>
    </section>
  );
}
