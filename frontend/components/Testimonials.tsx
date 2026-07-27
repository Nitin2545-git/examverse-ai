export default function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      review: "ExamVerse AI helped me prepare for SSC exams easily.",
    },
    {
      name: "Priya Verma",
      review: "The AI Doubt Solver saves a lot of study time.",
    },
    {
      name: "Amit Singh",
      review: "Best platform for Government Exam preparation.",
    },
  ];

  return (
    <section
      style={{
        padding: "60px 20px",
        textAlign: "center",
      }}
    >
      <h2>What Students Say</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        {reviews.map((review) => (
          <div
            key={review.name}
            style={{
              width: "280px",
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "12px",
              background: "#fff",
            }}
          >
            <h3>{review.name}</h3>
            <p>"{review.review}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}
