export default function PopularExams() {
  const exams = [
    "UPSC",
    "SSC",
    "Banking",
    "Railway",
    "Rajasthan CET",
    "RPSC",
  ];

  return (
    <section
      style={{
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <h2>Popular Exams</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        {exams.map((exam) => (
          <div
            key={exam}
            style={{
              width: "180px",
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              background: "#fff",
            }}
          >
            <h3>{exam}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
