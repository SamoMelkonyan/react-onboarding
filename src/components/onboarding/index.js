import Joyride from 'react-joyride';
import { useSelector } from 'react-redux';

export const OnboardingFlow = () => {
  const step = useSelector(state => state.onboarding.step);

  if (!step) return null;

  return <>
    <Joyride
      steps={[{
        target: step.mainTarget,
        content: step.component,
        placement: 'left',
        disableBeacon: true,
        hideCloseButton: true,
        offset: 100,
        hideFooter: true,
      }]}
      disableOverlayClose={true}
      disableCloseOnEsc={true}
      hideBackButton={true}
      styles={{
        options: {
          arrowColor: 'transparent',
          backgroundColor: 'transparent',
          overlayColor: 'rgba(0,0,0,0.7)',
        }
      }}
    />
    <div className='arrow-image' style={{
      position: 'absolute',
      zIndex: 300,
      width: 200,
      top: step.secondaryTarget?.offsetTop,
      left: step.secondaryTarget?.offsetLeft,
    }}>
      <img src="https://www.lifepng.com/wp-content/uploads/2020/07/1594241278_Red-arrow-png-HD-950x369.png" alt='arrow' style={{width: '100%'}} />
    </div>
  </>
}