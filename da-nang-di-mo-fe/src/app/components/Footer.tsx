export function Footer({}) {
  return (
    <footer
      style={{textAlign: "center", padding: "20px 0", background: "#f0f2f5"}}
    >
      <p style={{margin: 0, color: "#888"}}>
        © {new Date().getFullYear()} Your Company Name
      </p>
      <p style={{margin: 0, color: "#888"}}>All rights reserved.</p>
    </footer>
  );
}
