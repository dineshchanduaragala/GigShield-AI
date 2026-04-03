export function predictPremium({ risk, weather, workHours }) {
  let base = 50

  // AI-like weighted scoring
  let riskFactor = risk * 8
  let weatherFactor = weather === "bad" ? 25 : 5
  let workFactor = workHours > 8 ? 20 : 10

  let premium = base + riskFactor + weatherFactor + workFactor

  return Math.round(premium)
}