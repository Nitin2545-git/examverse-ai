export default function DashboardPage() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
      }}
    >
      {/* Sidebar */}
      <aside
        style={{
          width: "250px",
          background: "#1f2937",
          color: "white",
          padding: "20px",
        }}
      >
        <h2>ExamVerse AI</h2>

        <hr />

        <p>🏠 Dashboard</p>
        <p>📚 Notes</p>
        <p>📝 Quiz</p>
        <p>📄 Previous Papers</p>
        <p>🤖 AI Chat</p>
        <p>👤 Profile</p>
        <p>⚙️ Settings</p>
        <p>🚪 Logout</p>
      </aside>

      {/* Main Content */}
      <main
        style={{
          flex: 1,
          padding: "30px",
        }}
      >
        <h1>Student Dashboard</h1>

        <p>Welcome to ExamVerse AI Dashboard.</p>

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

          <p><strong>Name:</strong> Demo Student</p>
          <p><strong>Email:</strong> student@example.com</p>
          <p><strong>Membership:</strong> Free Plan</p>
        </div>

        {/* Dashboard Cards */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <div style={{ border: "1px solid #ddd", borderRadius: "10px", padding: "20px", width: "220px" }}>
            <h3>📚 My Courses</h3>
            <p>0 Courses Enrolled</p>
          </div>

          <div style={{ border: "1px solid #ddd", borderRadius: "10px", padding: "20px", width: "220px" }}>
            <h3>📝 My Quizzes</h3>
            <p>0 Quizzes Attempted</p>
          </div>

          <div style={{ border: "1px solid #ddd", borderRadius: "10px", padding: "20px", width: "220px" }}>
            <h3>📊 Progress</h3>
            <p>0% Completed</p>
          </div>

          <div style={{ border: "1px solid #ddd", borderRadius: "10px", padding: "20px", width: "220px" }}>
            <h3>🤖 AI Assistant</h3>
            <p>Ask your doubts anytime.</p>
          </div>
        </div>

        {/* Recent Activity */}
        <section style={{ marginTop: "40px" }}>
          <h2>📅 Recent Activity</h2>

          <ul>
            <li>Completed Rajasthan GK Quiz</li>
            <li>Downloaded Polity Notes</li>
            <li>Asked 5 AI Questions</li>
          </ul>
        </section>

        {/* Notifications */}
        <section
          style={{
            marginTop: "40px",
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "20px",
            background: "#fff8e1",
          }}
        >
          <h2>🔔 Notifications</h2>

          <ul>
            <li>📢 New Rajasthan CET Notes Available</li>
            <li>📝 Weekly Quiz starts tomorrow</li>
            <li>🤖 AI Study Assistant has new features</li>
          </ul>
        </section>

        {/* Today's Goal */}
        <section
          style={{
            marginTop: "40px",
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "20px",
            background: "#e8f5e9",
          }}
        >
          <h2>🎯 Today's Goal</h2>

          <p>✅ Complete 2 Quizzes</p>
          <p>✅ Read 1 Chapter</p>
          <p>✅ Ask 3 AI Questions</p>
        </section>
      </main>
    </div>
  );
}
