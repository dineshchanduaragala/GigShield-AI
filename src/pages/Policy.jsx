export default function Policy() {
  return (
    <div className="container" style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Insurance Policies</h2>
      
      <table style={{ 
        width: "100%", 
        borderCollapse: "collapse", 
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        borderRadius: "8px",
        overflow: "hidden"
      }}>
        <thead>
          <tr style={{ backgroundColor: "#f4f4f4", textAlign: "center" }}>
            <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>Plan</th>
            <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: "1px solid #eee" }}>
            <td style={{ padding: "12px" }}>Basic Coverage</td>
            <td style={{ padding: "12px" }}>₹50/week</td>
          </tr>
          <tr style={{ borderBottom: "1px solid #eee" }}>
            <td style={{ padding: "12px" }}>Standard Coverage</td>
            <td style={{ padding: "12px" }}>₹100/week</td>
          </tr>
          <tr style={{ borderBottom: "1px solid #eee" }}>
            <td style={{ padding: "12px" }}>Premium Coverage</td>
            <td style={{ padding: "12px" }}>₹200/week</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}