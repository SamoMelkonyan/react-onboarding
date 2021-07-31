import {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './style.css'

const Overlay = ({steps}) => {
  const [isSpotlight, setIsSpotlight] = useState(false);

  useEffect(() => {
    const subscribe = (e) => {
      console.log('e.target', e.target);
      if (e.target.className.includes('spotlight')) {
        if (!isSpotlight) {
          setIsSpotlight(true)
        }
      } else {
        if (isSpotlight) {
          setIsSpotlight(false)
        }
      }
    };

    window.addEventListener('mousemove', subscribe);

    return () => {
      window.removeEventListener('mousemove', subscribe);
    }
  }, [isSpotlight])

  return <>

    <div className='overlay' style={{
      pointerEvents: isSpotlight ? 'none' : 'auto'
    }}>
      {
        steps.map((step, idx) => {
          let topPos = step.target.getBoundingClientRect().top + window.scrollY;
          let leftPos = step.target.getBoundingClientRect().left + window.scrollX;
    
          return  <div 
            className={`spotlight spotlight-${idx+1}`}
            style={{
              top: topPos - 8,
              left: leftPos - 8,
              width: step.target.offsetWidth,
              height: step.target.offsetHeight,
              padding: 8,
            }}
          >

          </div>
        })
      }
    </div>
    <div className='steps'>
      {
        steps.map((step, idx) => <div className={`modal-${idx+1}`}>
          {step.content}
        </div>)
      }
    </div>
  </>
}

const CustomPopper = ({
  steps = []
}) => {
  const el = document.createElement('div');

  useEffect(() => {
    document.body.appendChild(el);
    return () => {
      document.body.removeChild(el);
    }
  }, [el])


  if (steps.length === 0) return null;

  return ReactDOM.createPortal(
    <Overlay steps={steps}/>,
    el,
  );
}

export default CustomPopper;