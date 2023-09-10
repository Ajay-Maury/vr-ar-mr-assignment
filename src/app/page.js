'use client'
import BackgroundVideo from "@/components/BackgroundVideo";
import Task2 from "@/components/Task2";
import Timer from "@/components/Timer";
import { useState, useEffect } from "react";


export default function Home() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {

    if (seconds < 8) {
      const timer = setTimeout(() => {
        setSeconds(seconds + 1);
      }, 1000);

      return () => clearTimeout(timer);
    }

  }, [seconds]);
  return (
    <div>
      {seconds < 8 ?
        <>
          <BackgroundVideo />
          <Timer />
        </> :
        <Task2 />
      }
    </div>
  )
}
