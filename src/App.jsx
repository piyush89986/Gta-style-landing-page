import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Expo, Power4 } from "gsap";
import "remixicon/fonts/remixicon.css";

function App() {
  const [showcontent, setShowContent] = useState(false);
  const svgRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });
   useGSAP(() => {
    if (!showcontent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".character", {
      scale: 1.3,
      bottom: "-25%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [showcontent]);

  

  return (
    <div>
      {/* SVG Splash Animation */}
      <div
        ref={svgRef}
        className="svg flex items-center justify-center fixed top-0 left-0 z-100 w-full h-screen overflow-hidden bg-black"
      >
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

      {showcontent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            <div className="navbar w-full py-10 px-10 absolute top-0 left-0 z-10">
              <div className="logo flex gap">
                <div className="lines flex flex-col gap-[5px]">
                  <div className="lines w-15 h-2 bg-white"></div>
                  <div className="lines w-8 h-2 bg-white"></div>
                  <div className="lines w-5 h-2 bg-white"></div>
                </div>
                <h3 className="text-4xl text-white -mt-[9px] leading-none">
                  Deadpool
                </h3>
              </div>
            </div>

            <div className="imagesdiv overflow-hidden relative w-full h-screen">
              <img
                src="./sky.png"
                className="absolute scale-[1.4] sky rotate-[-20deg] top-0 left-0 w-full h-full object-cover"
              />
              <img
                src="./bg.png"
                className="absolute bg top-0 scale-[1.8] -rotate-3 left-0 w-full h-full object-cover"
              />

              <div className="text absolute top-20 left-1/2 -translate-x-1/2 text-white flex flex-col gap-4 scale-[1.4] rotate-[-10deg]">
                <h1 className="text-9xl -ml-35 leading-none">grand</h1>
                <h1 className="text-9xl ml-20 leading-none">theft</h1>
                <h1 className="text-9xl -ml-25 leading-none">auto</h1>
              </div>

              <img
                src="/girlbg.png"
                alt="Character"
                className="character scale-[3] rotate-[-20deg] absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[90%] object-contain"
              />
            </div>

            <div className="bottombar text-white w-full py-10 px-10 absolute top-0 left-0 bg-linear-to-t from black to-transparent">
              <div className="flex gap-4 items-center mt-[480px]">
                <i className="text-4xl ri-arrow-down-long-line"></i>
                <h3 className="text-2xl">scroll down</h3>
              </div>
              <img
                src="./ps5.png"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[65px] mt-[230px]"
              />
            </div>
          </div>

          <div className="w-full h-screen flex items-center justify-center bg-black">
            <div className="cntnr flex w-full h-[80%]">
              <div className="limg w-1/2 mt-[20%] relative h-full">
                <img
                  className="absolute scale-[1] top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src="/logo.png"
                  alt="img"
                />
              </div>

              <div className="rg text-white w-[30%]">
                <h1 className="text-4xl">still running</h1>
                <h1 className="text-4xl">Not hunting</h1>
                <p className="mt-10 text-xl font-[Bricolage_Grotesque,poppins]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aspernatur placeat facilis eum accusantium et soluta quidem
                  aperiam unde at ipsam! Inventore, alias deleniti!
                </p>
                <p className="mt-3 text-xl font-[Bricolage_Grotesque,poppins]">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci magnam officia pariatur ab enim accusamus doloribus
                  quam earum alias cupiditate sed quo, ex aperiam quidem.
                  Consequatur nemo sapiente quibusdam aut odit qui, a quasi
                  deleniti.
                </p>
                <br />
                <button className="bg-yellow-300 px-10 py-5 rounded text-black">
                  Download Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
