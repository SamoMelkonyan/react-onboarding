import { useDispatch } from "react-redux"

export const StartLesson = ({
  currentStep,
  stepsLength
}) => {
  const dispatch = useDispatch();

  return <div className='first-component'>
    <h1>Start the lesson - {currentStep}/{stepsLength}</h1>
    <p>Read the lesson description and press here to get started.</p>
    <button onClick={() => dispatch({type: 'CLOSE'})}>Skip</button>
  </div>
} 