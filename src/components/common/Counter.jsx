import { useEffect, useRef, useState } from "react";

const Counter = ({ endValue, label }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const counterRef = useRef();

  useEffect(() => {
    const animateCounter = () => {
      const targetText = endValue.trim();
      let targetNumber = parseFloat(targetText.replace(/,/g, ""));

      if (targetText.includes("M")) {
        targetNumber *= 1000000;
      } else if (targetText.includes("Cr")) {
        targetNumber *= 10000000;
      }

      const duration = 3000;
      const increment = targetNumber / (duration / 100);
      let currentNumber = 0;

      const updateCounter = () => {
        currentNumber += increment;
        if (currentNumber >= targetNumber) {
          currentNumber = targetNumber;
          clearInterval(counterInterval);
        }

        let displayNumber;
        if (targetText.includes("M")) {
          displayNumber = Math.ceil(currentNumber / 1000000) + " M";
        } else if (targetText.includes("Cr")) {
          const crValue = currentNumber / 10000000;
          displayNumber = Number.isInteger(crValue)
            ? `${Math.ceil(crValue)} Cr`
            : `${crValue.toFixed(1)} Cr`;
        } else {
          displayNumber = Math.ceil(currentNumber).toLocaleString();
        }

        setCurrentValue(displayNumber + " +");
      };

      const counterInterval = setInterval(updateCounter, 100);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter();
          observer.disconnect();
        }
      });
    });

    observer.observe(counterRef.current);

    return () => observer.disconnect();
  }, [endValue]);

  return (
    <div ref={counterRef}>
      <h6 className="counter">{currentValue}</h6>
      <p>{label}</p>
    </div>
  );
};

export default Counter;
