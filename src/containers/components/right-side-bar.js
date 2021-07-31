import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux";
import { START_CHALLENGE, START_LESSON } from "../../components/onboarding/constants";
import OnBoardingService from '../../components/onboarding/service';

export const RightSideBar = () => {
  const dispatch = useDispatch();
  const getStartedRef = useRef(null);
  const startLessonRef = useRef(null);

  useEffect(() => {
    OnBoardingService.setStep(
      dispatch,
      START_LESSON,
      getStartedRef.current,
      startLessonRef.current
    );
  }, [dispatch]);

  return <div className='right-side-bar'>
        <h5 ref={getStartedRef}>1. Getting Started</h5>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has
          roots in a piece of classical Latin literature from 45 BC, making 
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more 
          obscure Latin words, consectetur, from a Lorem Ipsum passage,
          and going through the cites of the word in classical literature,
          discovered the undoubtable source. Lorem Ipsum comes from sections
          1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil)
          by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very 
          popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor 
          sit amet..", comes from a line in section 1.10.32.
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those 
          interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero
          are also reproduced in their exact original form, accompanied by English 
          versions from the 1914 translation by H. Rackham.
        </p>
        <button className='start-lesson-button' onClick={() => alert(1)} ref={startLessonRef}>Start lesson</button>
  </div>
}