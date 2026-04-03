import { useState } from "react"

export default function Premium() {
  const [risk, setRisk] = useState(0)
  const [premium, setPremium] = useState(50)

  const calculate = () => {
    let base = 50
    let result = base + risk * 10
    setPremium(result)
  }

  return (
    <div className="container">
      <h2>Dynamic Premium Calculator</h2>
      <input
        type="number"
        placeholder="Enter Risk Level"
        onChange={(e) => setRisk(e.target.value)}
      />
      <button onClick={calculate}>Calculate</button>
      <h3>Weekly Premium: ₹{premium}</h3>
    </div>
  )
}