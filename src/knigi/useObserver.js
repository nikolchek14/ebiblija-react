import {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import ResizeObserver from "resize-observer-polyfill";

const useObserver = ({ callback, element }) => {
 const current = element && element.current;
  const observer = useRef(null);
  useEffect(() => {
  if (observer && observer.current && current) {
          observer.current.unobserve(current);
        }
    const resizeObserverOrPolyfill =  ResizeObserver;
      observer.current = new resizeObserverOrPolyfill(callback);
      observe();
      return () => {
              if (observer && observer.current && element &&
                 element.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.current.unobserve(element.current);
              }
            };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  const observe = () => {
    if (element && element.current && observer.current) {
      observer.current.observe(element.current);
    }
  };

};

useObserver.propTypes = {
  element: PropTypes.object,
  callback: PropTypes.func,
};

export default useObserver;