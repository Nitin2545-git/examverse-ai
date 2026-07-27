export default function LoginPage() {
  return (
    <main
      style={{
        maxWidth: "400px",
        margin: "80px auto",
        padding: "20px",
      }}
    >
      <h1>Login</h1>

      <input
        type="email"
        placeholder="Email"
        style={{
          width: "100%",
          padding: "12px",
          marginTop: "20px",
        }}
      />

      <input
        type="password"
        placeholder="Password"
        style={{
          width: "100%",
          padding: "12px",
          marginTop: "15px",
        }}
      />

      <button
        style={{
          width: "100%",
          padding: "12px",
          marginTop: "20px",
        }}
      >
        Login
      </button>
    </main>
  );
}
