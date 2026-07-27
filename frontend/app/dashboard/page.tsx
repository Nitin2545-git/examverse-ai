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

      {/* Profile Card */}
      <div
        style={{
          marginTop: "30px",
          border: "1px solid #ddd",
          borderRadius: "12px",
          padding: "20px",
          background: "#f8f9fa",
        }}
      >
        <h2>👤 Student Profile</h2>

        <p>
          <strong>Name:</strong> Demo Student
        </p>

        <p>
          <strong>Email:</strong> student@example.com
        </p>

        <p>
          <strong>Membership:</strong> Free Plan
        </p>
      </div>

      {/* Dashboard Cards */}
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

      {/* Recent Activity */}
      <section
        style={{
          marginTop: "40px",
        }}
      >
        <h2>📅 Recent Activity</h2>

        <ul>
          <li>Completed Rajasthan GK Quiz</li>
          <li>Downloaded Polity Notes</li>
          <li>Asked 5 AI Questions</li>
        </ul>
      </section>
    </main>
  );
}
