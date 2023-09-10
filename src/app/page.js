'use client'
import { useState, useEffect } from "react";
import Page1 from "./task1/Page1";
import Page2 from "./task2/Page2";


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
        <Page1/>
        </> :
        <Page2 />
      }
    </div>
  )
}
