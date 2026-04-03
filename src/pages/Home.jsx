import Card from "../components/Card"

export default function Home() {
  return (
    <div className="container">
      <h1>Protect Your Gig Workers 🚀</h1>
      <div className="card-grid">
        <Card title="Register Worker" desc="Quick onboarding system" />
        <Card title="Insurance Policies" desc="Manage coverage plans" />
        <Card title="Dynamic Premium" desc="AI-based pricing" />
        <Card title="Claims Management" desc="Fast & easy claims" />
      </div>
    </div>
  )
}