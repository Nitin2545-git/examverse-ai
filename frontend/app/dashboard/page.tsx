export default function DashboardPage() {
  return (
    <main
      style={{
        padding: "30px",
        maxWidth: "1000px",
        margin: "0 auto",
      }}
    >
      <h1>Student Dashboard</h1>

      <p style={{ marginTop: "10px" }}>
        Welcome to ExamVerse AI Dashboard.
      </p>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "20px",
            width: "220px",
          }}
        >
          <h3>📚 My Courses</h3>
          <p>0 Courses Enrolled</p>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "20px",
            width: "220px",
          }}
        >
          <h3>📝 My Quizzes</h3>
          <p>0 Quizzes Attempted</p>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "20px",
            width: "220px",
          }}
        >
          <h3>📊 Progress</h3>
          <p>0% Completed</p>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "20px",
            width: "220px",
          }}
        >
          <h3>🤖 AI Assistant</h3>
          <p>Ask your doubts anytime.</p>
        </div>
      </div>
    </main>
  );
}
