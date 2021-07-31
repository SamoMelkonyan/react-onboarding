import { useRef, useState, useEffect } from "react"
import { RightSideBar } from "./components/right-side-bar"
import ArrowImage from './arrow.svg';
import { Fragment } from "react";

// const ArrowDirection = {
//   LEFT_BOTTOM: 'left-bottom',
//   TOP_LEFT: 'top-left',
//   RIGHT_TOP: 'right-top',
//   BOTTOM_RIGHT: 'bottom-right',
//   LEFT_TOP: 'left-top',
//   TOP_RIGHT: 'top-right',
//   RIGHT_BOTTOM: 'right-bottom',
//   BOTTOM_LEFT: 'bottom-left'
// };

// const Placement = {
//   TOP_LEFT: 'top-left',
//   TOP_CENTER: 'top-center',
//   TOP_RIGHT: 'top-right',
//   RIGHT_CENTER: 'right-center',
//   BOTTOM_RIGHT: 'bottom-right',
//   BOTTOM_CENTER: 'bottom-center',
//   BOTTOM_LEFT: 'bottom-left',
//   LEFT_CENTER: 'left-center'
// }

const Placement = {
  TOP_START: 'TOP_START',
  TOP_END: 'TOP_END' ,
  TOP_CENTER: 'TOP_CENTER' ,
  RIGHT_START: 'RIGHT_START' ,
  RIGHT_CENTER: 'RIGHT_CENTER',
  RIGHT_END: 'RIGHT_END',
  BOTTOM_END: 'BOTTOM_END',
  BOTTOM_CENTER: 'BOTTOM_CENTER' ,
  BOTTOM_START: 'BOTTOM_START' ,
  LEFT_END: 'LEFT_END' ,
  LEFT_CENTER: 'LEFT_CENTER' ,
  LEFT_START: 'LEFT_START',
}
const ArrowDirection = {
  LEFT_END: 'LEFT_END',
  LEFT_CENTER: 'LEFT_CENTER',
  TOP_START: 'TOP_START',
  TOP_CENTER: 'TOP_CENTER',
  RIGHT_START: 'RIGHT_START',
  RIGHT_CENTER: 'RIGHT_CENTER',
  BOTTOM_END: 'BOTTOM_END',
  BOTTOM_CENTER: 'BOTTOM_CENTER'
}





export const EditorContainer = () => {
  const infoRef = useRef(null);
  const questionRef = useRef(null);
  const sidebarRef = useRef(null);
  const startChallengeRef = useRef(null);
  const textRef = useRef(null);

  const [steps, setSteps] = useState([]);

  const InfoModal = () => <div>
    Info Modal asfdjksa kf hsaj kf hasjfhasjf as
    safas kif hasifhsajk fhasjfhas fhasj fhsa f
    asdjaksfjhskafhaskj hfjas hfj ash fjas hfj
  </div>

  const StartChallengeModal = () => <div>
    Start Challenge asfdjksa kf hsaj kf hasjfhasjf as
    safas kif hasifhsajk fhasjfhas fhasj fhsa f
    asdjaksfjhskafhaskj hfjas hfj ash fjas hfj
  </div>


  const TextFirstHint = () => <div>
    Text First Hint lorem ipsum
  </div>

  const TextSecondHint = () => <div>
    Text Second Hint lorem ipsum asfsa fsa fsa fsa fsa fvsvswafwsqafsa
    asfasfsafasfsaf
    asfsafsaf
  </div>




// TOP_START: 'TOP_START',
// TOP_CENTER: 'TOP_CENTER' ,
// TOP_END: 'TOP_END' ,
// RIGHT_START: 'RIGHT_START' ,
// RIGHT_CENTER: 'RIGHT_CENTER',
// RIGHT_END: 'RIGHT_END',
// BOTTOM_END: 'BOTTOM_END',
// BOTTOM_CENTER: 'BOTTOM_CENTER' ,
// BOTTOM_START: 'BOTTOM_START' ,
// LEFT_END: 'LEFT_END' ,
// LEFT_CENTER: 'LEFT_CENTER' ,
// LEFT_START: 'LEFT_START',

// LEFT_END: 'LEFT_END',
// LEFT_CENTER: 'LEFT_CENTER',
// TOP_START: 'TOP_START',
// TOP_CENTER: 'TOP_CENTER',
// RIGHT_START: 'RIGHT_START',
// RIGHT_CENTER: 'RIGHT_CENTER',
// BOTTOM_END: 'BOTTOM_END',
// BOTTOM_CENTER: 'BOTTOM_CENTER'

  useEffect(() => {
    setSteps(
      [
        {
          target: sidebarRef.current,
          secondaryTarget: startChallengeRef.current,
          contentPlacement: Placement.LEFT_END,
          arrowDirection: ArrowDirection.BOTTOM_END,
          reverseArrow: true,
          offset: {
            x: 70,
            y: 50
          },
          arrowOffset: {
            x: 30,
            y: 0
          },
          content: <StartChallengeModal />
        },
        {
          target: infoRef.current,
          content: <InfoModal />,
          contentPlacement: Placement.BOTTOM_CENTER,
          arrowDirection: ArrowDirection.TOP_CENTER,
          offset: {
            x: -40,
            y: -20
          },
          arrowOffset: {
            x: 24,
            y: -30
          },
        },
        {
          target: questionRef.current,
          contentPlacement: Placement.RIGHT_START,
          arrowDirection: ArrowDirection.TOP_START,
          reverseArrow: true,
          // offset: {
          //   x: 70,
          //   y: 50
          // },
          arrowOffset: {
            x: -10,
            y: 0
          },
        },
        {
          target: textRef.current,
          content: <TextFirstHint />,
          contentPlacement: Placement.LEFT_END,
          arrowDirection: ArrowDirection.RIGHT_START,
          // offset: {
          //   x: -40,
          //   y: -60
          // },
          // arrowOffset: {
          //   x: 24,
          //   y: -30
          // },
        },
        {
          target: textRef.current,
          content: <TextSecondHint />,
          contentPlacement: Placement.RIGHT_CENTER,
          arrowDirection: ArrowDirection.LEFT_CENTER,
          reverseArrow: true,
          offset: {
            x: -40,
            y: -20
          },
          arrowOffset: {
            x: 24,
            y: -30
          },
        },
      ]
    );
  }, [])


  const getModalOffsetTop = (
    target, 
    placement, 
    offset = {},
    arrowY
  ) => {
    const offsetY = offset.y || 0;
    const elRect = target.getBoundingClientRect();
    let top = elRect.top - offsetY;

    let newArrowY = 0;

    if (
      placement === Placement.TOP_START || 
      placement === Placement.TOP_CENTER || 
      placement === Placement.TOP_END
    ) {
      newArrowY = -arrowY
    } else if (
      placement === Placement.BOTTOM_START || 
      placement === Placement.BOTTOM_CENTER || 
      placement === Placement.BOTTOM_END
    ) {
      newArrowY = arrowY
    }

    if (
      placement === Placement.LEFT_CENTER || 
      placement === Placement.RIGHT_CENTER
    ) {
      top =  elRect.top + (elRect.height / 2) - offsetY;
    } else if (
      placement === Placement.BOTTOM_START || 
      placement === Placement.BOTTOM_CENTER || 
      placement === Placement.BOTTOM_END ||
      placement === Placement.RIGHT_END ||
      placement === Placement.LEFT_END
    ) {
      top = elRect.top + elRect.height - offsetY;
    } 
    return top + newArrowY;
  }

  const getModalOffsetLeft = (
    target, 
    placement, 
    offset = {},
    arrowX
  ) => {
    const elRect = target.getBoundingClientRect();
    const offsetX = offset.x || 0;
    let left = elRect.left - offsetX;

    let newArrowX = 0;
    if (
      placement === Placement.RIGHT_START || 
      placement === Placement.RIGHT_CENTER || 
      placement === Placement.RIGHT_END
    ) {
      newArrowX = arrowX
    } else if (
      placement === Placement.LEFT_START || 
      placement === Placement.LEFT_CENTER || 
      placement === Placement.LEFT_END
    ) {
      newArrowX = -arrowX
    }

    if (
      placement === Placement.TOP_CENTER || 
      placement === Placement.BOTTOM_CENTER
    ) {
      left = elRect.left + (elRect.width / 2) - offsetX;
    } else if (
      placement === Placement.RIGHT_START || 
      placement === Placement.RIGHT_CENTER || 
      placement === Placement.RIGHT_END ||
      placement === Placement.TOP_END ||
      placement === Placement.BOTTOM_END
    ) {
      left = elRect.left + elRect.width - offsetX;
    }

    return left + newArrowX;
  }


  const getArrowOffsetTop = (
    target, 
    placement, 
    offset = {},
    arrowY
  ) => {
    const elRect = target.getBoundingClientRect();

    const offsetY = offset.y || 0;
    let top = elRect.top - offsetY;

    if (
      placement === Placement.LEFT_CENTER || 
      placement === Placement.RIGHT_CENTER
    ) {
      top = elRect.top + (elRect.height / 2) - offsetY - (arrowY / 2);
    } else if (
      placement === Placement.BOTTOM_START ||
      placement === Placement.BOTTOM_CENTER ||
      placement === Placement.BOTTOM_END
    ) {
      top = elRect.top + elRect.height - offsetY;
    } else if (
      placement === Placement.TOP_START || 
      placement === Placement.TOP_CENTER || 
      placement === Placement.TOP_END
    ) {
      top = elRect.top - offsetY - arrowY;
    } else if (
      placement === Placement.LEFT_END || 
      placement === Placement.RIGHT_END
    ) {
      top = elRect.top + elRect.height - arrowY - offsetY;
    }

    return top;
  }

  const getArrowOffsetLeft = (
    target, 
    placement, 
    offset = {},
    arrowX
  ) => {
    const elRect = target.getBoundingClientRect();

    const offsetX = offset.x || 0;
    let left = elRect.left - offsetX;

    if (
      placement === Placement.TOP_CENTER || 
      placement === Placement.BOTTOM_CENTER
    ) {
      left = elRect.left + (elRect.width / 2) - offsetX - (arrowX / 2);
    } else if (
      placement === Placement.TOP_END ||
      placement === Placement.BOTTOM_END
    ) {
      left = elRect.left + elRect.width - offsetX - arrowX;
    } else if (
      placement === Placement.LEFT_START || 
      placement === Placement.LEFT_CENTER || 
      placement === Placement.LEFT_END
    ) {
      left = elRect.left - offsetX - arrowX;
    } else  if (
      placement === Placement.RIGHT_START || 
      placement === Placement.RIGHT_CENTER || 
      placement === Placement.RIGHT_END
    ) {
      left = elRect.left + elRect.width - offsetX;
    }

    return left;
  }

  const getModalTranslate = (placement) => {
    let x = 0;
    let y = 0;

    if (
      placement === Placement.TOP_END ||
      placement === Placement.BOTTOM_END ||
      placement === Placement.LEFT_END ||
      placement === Placement.LEFT_CENTER ||
      placement === Placement.LEFT_START
    ) {
      x = -100
    }

    if (
      placement === Placement.TOP_START ||
      placement === Placement.TOP_CENTER ||
      placement === Placement.TOP_END ||
      placement === Placement.RIGHT_END ||
      placement === Placement.LEFT_END ||
      placement === Placement.LEFT_CENTER
    ) {
      y = -100
    }


    if (
      placement === Placement.TOP_CENTER ||
      placement === Placement.BOTTOM_CENTER
    ) {
      x = -50
    }

    if (
      placement === Placement.LEFT_CENTER ||
      placement === Placement.RIGHT_CENTER
    ) {
      y = -50
    }

    return `translate(${x}% , ${y}%)`
  }


  const getArrowInfo = (
    placement, 
    reverse,
    arrowWidth,
    arrowHeight
  ) => {


    let scaleX = reverse ? -1 : 1;
    let rotate = 0;
    let arrowX = arrowWidth;
    let arrowY = arrowHeight;

    if (placement === ArrowDirection.LEFT_END) {
      rotate = 0;
      if (reverse) {
        arrowX = arrowHeight;
        arrowY = arrowWidth;
      }
    } else if (placement === ArrowDirection.LEFT_CENTER) {
      rotate = 45;
      arrowX = Math.sqrt(arrowWidth*arrowWidth + arrowHeight*arrowHeight);
      arrowY = Math.sqrt(arrowWidth*arrowWidth + arrowHeight*arrowHeight);
    } else if (placement === ArrowDirection.TOP_START) {
      rotate = 90;
      if (!reverse) {
        arrowX = arrowHeight;
        arrowY = arrowWidth;
      }
    } else if (placement === ArrowDirection.TOP_CENTER) {
      rotate = 90 + 45;
      arrowX = Math.sqrt(arrowWidth*arrowWidth + arrowHeight*arrowHeight);
      arrowY = Math.sqrt(arrowWidth*arrowWidth + arrowHeight*arrowHeight);
    } else if (placement === ArrowDirection.RIGHT_START) {
      rotate = 180;
      if (reverse) {
        arrowX = arrowHeight;
        arrowY = arrowWidth;
      }
    } else if (placement === ArrowDirection.RIGHT_CENTER) {
      rotate = 180 + 45;
      arrowX = Math.sqrt(arrowWidth*arrowWidth + arrowHeight*arrowHeight);
      arrowY = Math.sqrt(arrowWidth*arrowWidth + arrowHeight*arrowHeight);
    } else if (placement === ArrowDirection.BOTTOM_END) {
      rotate = 180 + 90;
      if (!reverse) {
        arrowX = arrowHeight;
        arrowY = arrowWidth;
      }
    } else if (placement === ArrowDirection.BOTTOM_CENTER) {
      rotate = 180 + 90 + 45;
      arrowX = Math.sqrt(arrowWidth*arrowWidth + arrowHeight*arrowHeight);
      arrowY = Math.sqrt(arrowWidth*arrowWidth + arrowHeight*arrowHeight);
    }

    return {
      transform: `rotate(${rotate + (reverse ? 90 : 0)}deg) scaleX(${scaleX})`,
      arrowX,
      arrowY,
      rotate: rotate + (reverse ? 90 : 0)
    };
  }

  return (
    <div className='editor-container'>
      <div className='text' ref={textRef}>
        <h1>Text</h1>
        <p>
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        </p>
        <p>
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        </p>
        <p>
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        </p>
        <p>
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        </p>
      </div>
      <div className='info-text' ref={infoRef}>Info Text</div>
      <div className='question' ref={questionRef}>%</div>
      <div className='sidebar' ref={sidebarRef}>
        <div className='start-challenge' ref={startChallengeRef}>
          Start Challenge
        </div>
      </div>
      {/* <RightSideBar /> */}

      {
        steps.map((step, index) => { 
          const arrowWidth = 115;
          const arrowHeight = 80;
          const target = step.secondaryTarget || step.target;
          let modalStyle = {
            position: 'absolute',
          };

          const arrowInfo = getArrowInfo(step.arrowDirection, step.reverseArrow, arrowWidth, arrowHeight);

          modalStyle.top = getModalOffsetTop(
            target, 
            step.contentPlacement, 
            step.offset,
            arrowInfo.arrowY
          );
          modalStyle.left = getModalOffsetLeft(
            target, 
            step.contentPlacement, 
            step.offset,
            arrowInfo.arrowX
          );
          modalStyle.transform = `${getModalTranslate(step.contentPlacement)}`;

          let arrowStyle = {
            position: 'absolute',
            transform: `${arrowInfo.transform}`
          };

          arrowStyle.top = getArrowOffsetTop(
            target,
            step.contentPlacement,
            step.arrowOffset,
            arrowInfo.arrowY
          );
          arrowStyle.left = getArrowOffsetLeft(
            target,
            step.contentPlacement,
            step.arrowOffset,
            arrowInfo.arrowX
          );


          return <Fragment key={index}>
            <div className='modal' style={modalStyle}>
              {step.content}
            </div>

            <img src={ArrowImage} alt='arrow' style={arrowStyle} />
          </Fragment>
        })
      }
    </div>
  )
}