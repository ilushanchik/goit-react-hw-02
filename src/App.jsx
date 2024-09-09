import { useState } from 'react'
import "./components/Option"
import Option from "./components/Option" 
import Feedback from "./components/Feedback"
import Notification from './components/Notification'

function App() {

   const [grades, setGrade] = useState(() => {
      // Ініціалізація стану з localStorage, якщо там є дані
      const savedGrades = localStorage.getItem('grades');
      return savedGrades ? JSON.parse(savedGrades) : { good: 0, neutral: 0, bad: 0 };
    });
  
    const updateFeedback = (feedbackType) => {
      setGrade(prevGrades => {
        const newGrades = {
          ...prevGrades,
          [feedbackType]: prevGrades[feedbackType] + 1
        };
        // Збереження нового стану в localStorage
        localStorage.setItem('grades', JSON.stringify(newGrades));
        return newGrades;
      });
    };

const resetFeedback = () => {
   setGrade({
     good: 0,
     neutral: 0,
     bad: 0
   });
 };

const totalFeedback = grades.good + grades.neutral + grades.bad;


  return (
    <>
    <Option
      updateFeedback={updateFeedback}
      totalFeedback={totalFeedback}
      resetFeedback={resetFeedback}
    />
{
    totalFeedback > 0 ? ( <Feedback
      good={grades.good}
      neutral={grades.neutral}
      bad={grades.bad}
      totalFeedback={totalFeedback}
    />) : ( <Notification/>)
}
   </>
  )
}

export default App
