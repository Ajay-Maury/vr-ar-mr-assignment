import React from 'react'
import "./BackgroundVideo.css"

const BackgroundVideo = () => {
  return (
    <>
      <div className="videoContainer">
      <video autoPlay loop muted playsInline>
        <source src='/images/loadingsteam.mp4' type="video/mp4" />
      </video>
    </div>
    </>
  )
}

export default BackgroundVideo
