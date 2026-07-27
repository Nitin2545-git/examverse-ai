export default function SearchBar() {
  return (
    <section
      style={{
        textAlign: "center",
        padding: "30px",
      }}
    >
      <input
        type="text"
        placeholder="Search Exams, Notes, Quiz..."
        style={{
          width: "70%",
          maxWidth: "600px",
          padding: "15px",
          fontSize: "18px",
          borderRadius: "10px",
          border: "1px solid #ccc",
        }}
      />
    </section>
  );
}
