export default function Features() {
  const features = [
    "📚 Smart Notes",
    "📝 Daily Quiz",
    "📄 Previous Year Papers",
    "🤖 AI Doubt Solver",
    "📊 Progress Tracking",
    "🎯 Personalized Learning",
  ];

  return (
    <section
      style={{
        padding: "60px 20px",
        textAlign: "center",
      }}
    >
      <h2>Why Choose ExamVerse AI?</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        {features.map((feature) => (
          <div
            key={feature}
            style={{
              width: "220px",
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "12px",
              background: "#ffffff",
            }}
          >
            <h3>{feature}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
