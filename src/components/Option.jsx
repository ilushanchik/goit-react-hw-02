import React from 'react'

const Option = ({updateFeedback,totalFeedback,resetFeedback}) => {
  return (
    <div>
    <h1>Sip Happens Café</h1>
    <p>Please leave your feedback about our service by selecting one of the options below.</p>
      <button type="button" onClick={() => updateFeedback("good")}>Good</button>
      <button type="button" onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button type="button" onClick={() => updateFeedback("bad")}>Bad</button>
     {totalFeedback > 0 &&(<button onClick={resetFeedback}>Reset</button>)}
    </div>
  )
}

export default Option