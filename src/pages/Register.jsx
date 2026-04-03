import { useState } from "react"
import "../styles/form.css"

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    job: "",
    location: ""
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Registered Successfully!")
  }

  return (
    <div className="form-container">
      <h2>Worker Registration</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="job" placeholder="Job Type" onChange={handleChange} />
        <input name="location" placeholder="Location" onChange={handleChange} />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}