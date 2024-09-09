import { useState,useEffect } from 'react'
import Description from './components/Description/Description'
import Option from "./components/Optionn/Option" 
import Feedback from "./components/Feedback/Feedback"
import Notification from './components/Notification/Notification'


function App() {



   const [grades, setGrade] = useState({
      good: 0,
      neutral: 0,
      bad: 0
    });
  
    useEffect(() => {
      const savedGrades = localStorage.getItem('grades');
      if (savedGrades) {
        setGrade(JSON.parse(savedGrades));
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem('grades', JSON.stringify(grades));
    }, [grades]); 

    const updateFeedback = (feedbackType) => {
      setGrade({ ...grades, [feedbackType]: grades[feedbackType] + 1 });
    };

const resetFeedback = () => {
   setGrade({
     good: 0,
     neutral: 0,
     bad: 0
   });
 };

const totalFeedback = grades.good + grades.neutral + grades.bad;

const goodPercent = Math.round((grades.good / totalFeedback) * 100);
  return (
    <>
    <Description/>
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
      goodPercent={goodPercent}
    />) : ( <Notification/>)
}
   </>
  )
}

export default App
