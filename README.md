# GigShield AI – Income Protection for Gig Workers

> “We don’t just verify location — we verify behavior, context, and intent.”

---

## Problem Statement

Delivery partners (Zomato, Swiggy, Zepto, etc.) lose income when external disruptions such as heavy rain, extreme heat, or pollution prevent them from working.

Currently, there is no system to compensate for this income loss. Workers bear the full financial impact.

We aim to build an AI-powered parametric insurance platform that automatically detects disruptions and compensates workers without requiring manual claims, while ensuring fraud prevention and fairness.

---

## Persona (Target User)

- Delivery partners (Food / Grocery / E-commerce)
- Daily or weekly income dependent workers
- Operate in high-risk outdoor environments

### Persona Deep Dive

- Name: Ravi Kumar  
- Age: 24  
- Platform: Swiggy Delivery Partner  
- Location: Hyderabad (high rainfall and traffic zone)  
- Income: ₹600–₹900 per day  
- Dependency: Daily earnings for survival  

### Pain Points

- Income loss during weather disruptions  
- No backup financial support  
- Platform does not compensate downtime  

### Goal

- Maintain stable weekly income  
- Receive compensation during unavoidable disruptions  

### Example Scenario

Ravi cannot work for 6 hours due to heavy rain and loses ₹500.  
GigShield AI detects the disruption and compensates him automatically.

---

## Solution Overview

GigShield AI is an AI-powered parametric insurance platform that:

- Provides weekly subscription-based insurance  
- Monitors external disruptions such as weather and pollution  
- Automatically triggers claims when thresholds are met  
- Uses intelligent fraud detection to prevent misuse  
- Ensures fair handling of all users  

---

## Key Innovation

We move from location-based verification to behavior-based verification, making GPS spoofing ineffective.

---

## Detailed Workflow

1. User registers and selects a weekly coverage plan  
2. System calculates premium using AI-based risk modeling  
3. User activates policy  

4. System continuously monitors:
   - Weather data (rainfall, temperature, AQI)  
   - Location data  
   - Delivery activity  

5. If disruption exceeds defined thresholds:
   - System verifies whether the user is genuinely affected  
   - Checks correlation between disruption and user activity  

6. Fraud detection layer evaluates:
   - Movement patterns  
   - Device and network consistency  
   - Claim behavior patterns  

7. Based on fraud score:
   - Genuine → Full payout  
   - Suspicious → Partial payout  
   - Fraud → Flag for review  

8. Approved claims are processed instantly (simulated)

---

## Weekly Pricing Model

Premium is calculated dynamically:

$$
Premium = Base + (RiskFactor \times LocationRisk)
$$

- High-risk zones have higher premiums  
- Low-risk zones have lower premiums  

This ensures fairness and affordability.

---

## AI Integration

### Risk Prediction Model

- Uses historical weather and location data  
- Adjusts weekly premiums dynamically  

### Claim Trigger System

- Detects disruptions such as:
  - Heavy rainfall  
  - Extreme heat  
  - High pollution levels  

### Fraud Detection Model

- Uses multi-signal anomaly detection  
- Identifies abnormal patterns in user behavior  

---

## Adversarial Defense & Anti-Spoofing Strategy

### Problem

Fraudsters exploit GPS spoofing to fake their location and trigger false payouts, potentially draining system resources.

---

### Solution

We use multi-layer verification instead of relying solely on GPS.

### Data Used

- GPS vs network location mismatch  
- Device sensor data (movement patterns)  
- Delivery activity logs  
- IP address clustering  
- Weather vs actual activity correlation  

---

### Fraud Detection Logic

$$
FraudScore = f(Location, Behavior, Device, Network, Activity)
$$

---

### Decision System

| Score Range | Action |
|------------|--------|
| < 0.3      | Approve |
| 0.3–0.7    | Partial payout |
| > 0.7      | Flag for review |

---

### Advanced Fraud Insight

Instead of relying on a single signal, the system combines multiple weak signals:

- A single anomaly does not indicate fraud  
- Multiple anomalies together increase confidence  

Example:

- GPS mismatch + no movement + same IP cluster  
→ Strong fraud indicator  

This reduces false positives and protects genuine users.

---

### Fraud Ring Detection

The system identifies coordinated fraud attempts by detecting:

- Multiple users sharing the same IP  
- Identical claim timing patterns  
- Similar location clusters  

Such patterns indicate organized fraud rings and are flagged accordingly.

---

## UX Balance (Fairness)

- Genuine users receive instant payouts  
- Suspicious users receive partial payouts with quick verification  
- High-risk cases are temporarily held for review  

This ensures honest workers are not unfairly penalized.

---

## Tech Stack

- Frontend: React (Vite)  
- Backend: Spring Boot  
- Database: MySQL  
- ORM: JPA + Hibernate  
- Security: Spring Security with JWT  
- APIs: Weather API (mock or real)  

---

## System Architecture
React Frontend
    ↓
Spring Boot Backend
    ↓
Service Layer (Business Logic + AI Models)
    ↓
MySQL Database

---

## Challenges Faced

- Designing fraud detection without blocking genuine users  
- Reducing dependency on GPS-based validation  
- Balancing automation with fairness  
- Simulating real-world disruption scenarios  

---

## Achievements

- Designed a complete parametric insurance solution  
- Implemented a multi-layer fraud detection approach  
- Addressed a real-world gig economy problem  
- Built a scalable and extensible architecture  

---

## What We Learned

- AI is about decision-making under uncertainty  
- Fraud detection requires multi-dimensional analysis  
- System design clarity is more important than complexity  

---

## Future Scope

- Integration with real delivery platforms (Swiggy, Zomato)  
- Advanced machine learning models for fraud detection  
- Real-time payment integration (UPI, Razorpay)  
- Mobile application development  

---