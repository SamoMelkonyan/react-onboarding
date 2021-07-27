import { StartLesson } from "./components/start-lesson";
import { StartChallenge } from "./components/start-challenge";
import { START_CHALLENGE, START_LESSON } from "./constants";


class OnBoardingService {
  stepsLength = 2;
  currentStep = 1;

  getCurrentStep(stepName) {
    switch(stepName) {
      case START_LESSON: return <StartLesson stepsLength={this.stepsLength} currentStep={this.currentStep} />
      case START_CHALLENGE: return <StartChallenge stepsLength={this.stepsLength} currentStep={this.currentStep} />
      default: return null;
    }
  }

  setStep(dispatch, stepName, mainTarget, secondaryTarget) {
    dispatch({
      type: 'SET_STEP',
      payload: {
        mainTarget: mainTarget,
        secondaryTarget: secondaryTarget,
        component: this.getCurrentStep(stepName)
      }
    });
    this.currentStep++;
  }
}

export default new OnBoardingService();