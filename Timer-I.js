import React, { useEffect } from "react";

const App = () => {
  const [time, setTime] = React.useState({ minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(incrementTime, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  function incrementTime() {
    setTime((prev) => {
      let { minutes, seconds } = prev;
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      return { minutes, seconds };
    });
  }

  return (
    <div>
      {(time.minutes <= 9 ? "0" : "") + time.minutes}:
      {(time.seconds <= 9 ? "0" : "") + time.seconds}
    </div>
  );
};

export default App;
