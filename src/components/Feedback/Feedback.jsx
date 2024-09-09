import React from 'react'

const Feedback = ({good, neutral, bad, totalFeedback,goodPercent}) => {
  return (
    <div>
      <ul>
         <li>Good: {good}</li>
         <li>Neutral: {neutral}</li>
         <li>Bad: {bad}</li>
         <li>Total:{totalFeedback}</li>
         <li>Positive:{goodPercent}%</li>
      </ul>
    </div>
  )
}

export default Feedback