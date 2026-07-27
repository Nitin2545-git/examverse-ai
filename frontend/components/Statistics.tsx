export default function Statistics() {
  const stats = [
    { number: "10,000+", label: "Students" },
    { number: "5,000+", label: "Notes" },
    { number: "2,000+", label: "Quizzes" },
    { number: "100+", label: "Exam Categories" },
  ];

  return (
    <section
      style={{
        padding: "60px 20px",
        background: "#f8f9fa",
        textAlign: "center",
      }}
    >
      <h2>Our Achievements</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        {stats.map((item) => (
          <div
            key={item.label}
            style={{
              width: "200px",
              padding: "20px",
              borderRadius: "12px",
              background: "white",
              border: "1px solid #ddd",
            }}
          >
            <h2>{item.number}</h2>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
