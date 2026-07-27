export default function ProfileCard() {
  return (
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
  );
}
