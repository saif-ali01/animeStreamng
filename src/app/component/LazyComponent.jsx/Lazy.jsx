import React, { Children, useEffect, useRef, useState } from 'react'

const Lazy = ({children}) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(()=>{
        const observer = new IntersectionObserver(
            ([entry])=>{
                if(entry.isIntersecting){
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            }
        ,{threshold:0.1}
    );
    if(elementRef.current){
        observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
    },[])

  return (
        <div ref={elementRef} className="h-96 flex items-center justify-center">
      {isVisible ? (
        <div className="p-6 bg-blue-500 text-white">Loaded Component</div>
      ) : (
        <div className="p-6 bg-gray-300">{children}</div>
      )}
    </div>
  )
}

export default Lazy