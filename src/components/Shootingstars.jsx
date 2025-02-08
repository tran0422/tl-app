import React, {useState, useEffect} from 'react'
import '../css/shootingstars.css'

const Shootingstars = () => {
const [stars, setStars] = useState([]);

useEffect(() => {
    const interval =setInterval(() => {
        const newStar = {
            id: `${Date.now()} - ${Math.random()}`,
            style: {
                top: `${Math.random() * 100}vh`,
                left: `0`,
                animationDuration: `${Math.random() * 2 + 1}s`,
                ainmationDelay: `${Math.random() * 3}s`,
            },
        };

        setStars((prevStars) => [...prevStars, newStar]);
    }, 4000);

    return () => setInterval(interval);
}, []);

  return (
    <div className='sky'>
        {stars.map((star) => (
            <div key={star.id} className='shooting-star' style={star.style}></div>
        ))}
        
    </div>
  );
};

export default Shootingstars