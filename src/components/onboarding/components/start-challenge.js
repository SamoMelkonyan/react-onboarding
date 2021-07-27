import { useDispatch } from "react-redux"

export const StartChallenge = ({
  currentStep,
  stepsLength
}) => {
  const dispatch = useDispatch();

  return <div className='first-component'>
    <h1>Start challenge - {currentStep}/{stepsLength}</h1>
    <p>CHALLENGE</p>
    <button onClick={() => dispatch({type: 'CLOSE'})}>Skip</button>
  </div>
} 