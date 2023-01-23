import { useEffect } from "react";

//function for throttling pause between screen resizing
//handler calls
//used for reducing rerender func calls during
//to mach screen resizing 
function throttle(func, ms) {
  let isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper(){
    if(isThrottled){
      savedArgs = arguments;
        savedThis = this;

        return;
    };

    func.apply(this, arguments);

    isThrottled = true;

    setTimeout(function() {
      isThrottled = false;
      
      if(savedArgs){
        wrapper.apply(savedThis, savedArgs);

        savedArgs = savedThis = null;
      }
    }, ms);
  };

  return wrapper;
};

function useWindowResize(executor, delay = 500) {
  //To ask why useEffect have so strange behavior
  //and works only disabled input is include(look on top of the file) 
  useEffect(() => {
    window.addEventListener('resize', throttle(executor, delay));

    return function cleanup(){
      window.removeEventListener('resize', throttle(executor, delay));
    }
  }, []);
};

export default useWindowResize;