import { useState, useEffect} from "react";

// Hook
function useOnScreen(ref, rootMargin = "0px") {
    // State and setter for storing whether element is visible
    const [isIntersecting, setIntersecting] = useState(false);
    
    useEffect(() => {
      let loquesea= ref.current;
      const observer = new IntersectionObserver(
        ([entry]) => {
          // Update our state when observer callback fires
          setIntersecting(entry.isIntersecting);
        },
        {
          rootMargin
        }
      );
      if (loquesea) {
        observer.observe(loquesea);
      }
      return () => {
        observer.unobserve(loquesea);
      };
    }, [ref,rootMargin]); // Empty array ensures that effect is only run on mount and unmount
  
    return isIntersecting;
  }
  
  export default useOnScreen;