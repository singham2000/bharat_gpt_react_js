import { useState } from "react";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";

const Count = ({ number, text, duration }) => {
  const [focus, setFocus] = useState(false);
  const visibleChangeHandler = (isVisible) => {
    if (isVisible) {
      if (!focus) {
        setFocus(true);
      }
    }
  };
  return (
    <>
      <CountUp start={focus ? 0 : null} end={number} duration={duration}>
        {({ countUpRef }) => (
          <div className={`d-flex `}>
            <span ref={countUpRef} />
            <InView
              as="span"
              onChange={(inView) =>
                visibleChangeHandler(inView)
              }
            >
              {text && <span>{text}</span>}

            </InView>
          </div>
        )}
      </CountUp>
    </>
  );
};

export default Count;