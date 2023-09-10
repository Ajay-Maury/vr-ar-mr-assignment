"use client";
import "./Carousel.css";
import Image from "next/image";
import React, { useState } from "react";

const Carousel = () => {
  const [activeProfileIndex, setActiveProfileIndex] = useState(0);

  const profileData = [
    { name: "PROFILES", image: "/images/profiles.png" },
    { name: "WALLPAPERS", image: "/images/wallpapers.png" },
    { name: "STEAME", image: "/images/steamprofile.png" },
    { name: "AUDIOTHERAPY", image: "/images/speakerprofile.png" },
    { name: "CHROMATHEREPY", image: "/images/lightprofile.png" },
    { name: "AROMATHERAPY", image: "/images/aromaprofile.png" },
  ];

  const handleNextClick = () => {
    setActiveProfileIndex((prevIndex) => (prevIndex + 1) % profileData.length);
  };

  const handlePrevClick = () => {
    setActiveProfileIndex(
      (prevIndex) => (prevIndex - 1 + profileData.length) % profileData.length
    );
  };

  return (
    <>
      <div className="carousel-main">
        <button onClick={handlePrevClick}>
          <Image
            src="/images/leftarrow.png"
            width={10}
            height={10}
            alt="left arrow"
          />
        </button>
        <div className="eclipseDiv">
          {profileData.map((profile, index) => (
            <span key={index} className="">
              <div className="">
                <div className="eclipseImgDiv">
                  <Image
                    src="/images/Ellipse.png"
                    height={10}
                    width={10}
                    alt="ellipse"
                    className={index === activeProfileIndex ? "eclipseImg" : ""}
                  />
                  {index !== 5 && (
                    <Image
                      src="/images/Group.png"
                      className={`groupImg1  ${
                        index === activeProfileIndex ? "noDisplay" : ""
                      }`}
                      width={10}
                      height={10}
                      alt="Group"
                    />
                  )}
                </div>
                <div className="profileDiv">
                  <Image
                    src={profile.image}
                    height={30}
                    width={30}
                    alt="profile"
                    className={`profileImg ${
                      index === activeProfileIndex ? "" : " noDisplay"
                    }`}
                  />
                  {index !== 5 && (
                    <Image
                      src="/images/Group.png"
                      className={`groupImg2 ${
                        index === activeProfileIndex ? "" : "noDisplay"
                      }`}
                      width={10}
                      height={10}
                      alt="Group"
                    />
                  )}
                </div>
                <div
                className="profileName"
                style={{display: index === activeProfileIndex ? "flex" : "none",}}
                >
                  {profile.name}
                </div>
              </div>
            </span>
          ))}
        </div>
        <button onClick={handleNextClick}>
          <Image
            src="/images/rightarrow.png"
            width={10}
            height={10}
            alt="right arrow"
          />
        </button>
      </div>
    </>
  );
};

export default Carousel;
