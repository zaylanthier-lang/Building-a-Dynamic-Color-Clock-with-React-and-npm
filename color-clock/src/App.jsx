import { useEffect, useState } from "react";
import { format } from "date-fns";
import "./App.css";

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="clock-container">
      <p className="clock-text">
        {format(currentTime, "MMMM do yyyy, h:mm:ss a")}
      </p>
    </div>
  );
}

export default App;