import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";


import { useRef } from "react";

import PortfolioSubtitle from "./PortfolioSubtitle";
import Aboutme from "./Aboutme";
import Projects from "./Projects";
import Stacks from "./Stacks";
import Contact from "./Contact";

gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin);

function Portfolio() {
  const container = useRef();
  const mm = gsap.matchMedia();

  useGSAP(() => {
    const mm = gsap.matchMedia(); //RESPONSIVE TIME

    mm.add(
      {
        is1550: "(max-width: 1550px)",
        is1024: "(max-width: 1024px)",
        is820: "(max-width: 820px)",
        is768: "(max-width: 768px)",
        is619: "(max-width: 619px)",
        is459: "(max-width: 459px)",
        is320: "(max-width: 320px)",
        isAll: "(min-width: 1551px)", // fallback for large screens
      },
      (context) => {
        const { conditions } = context;

          // VAR DEFAULTS. MUST BE SAME AS THE isAll
          let xAboutmeTitleValue;
          let yAboutmeTitleValue;
          let yProjectTitleValue;
          let xStacksTitleValue;
          let yStacksTitleValue;
          let yTitleScaleValue;
          let yAboutComponent;
          let yProjectcomponent ;

        if(conditions.is320){
          xAboutmeTitleValue = 0;
          yAboutmeTitleValue = -300;
          yProjectTitleValue = -300;
          yTitleScaleValue = 0.65;
          xStacksTitleValue = 0;
          yStacksTitleValue = -300;
          yAboutComponent = 5;
          yProjectcomponent = 5;
        }else if(conditions.is459){
            xAboutmeTitleValue = 0;
            yAboutmeTitleValue = -275;
            yProjectTitleValue = -275;
            yTitleScaleValue = 0.65;
            xStacksTitleValue = 0;
            yStacksTitleValue = -275;
            yAboutComponent = 5;
            yProjectcomponent = 5;
        }else if(conditions.is619){
            xAboutmeTitleValue = 0;
            yAboutmeTitleValue = -300;
            yProjectTitleValue = -300;
            yTitleScaleValue = 0.65;
            xStacksTitleValue = 0;
            yStacksTitleValue = -300;
            yAboutComponent = 5;
            yProjectcomponent = 5;
        }else if (conditions.is768) {
            xAboutmeTitleValue = 0;
            yAboutmeTitleValue = -370;
            yProjectTitleValue = -370;
            yTitleScaleValue = 0.65;
            xStacksTitleValue = 0;
            yStacksTitleValue = -250;
            yAboutComponent = 5;
            yProjectcomponent = 5;
        }else if (conditions.is820) {
            xAboutmeTitleValue = 0;
            yAboutmeTitleValue = -370;
            yProjectTitleValue = -300;
            yTitleScaleValue = 0.65;
            xStacksTitleValue = 0;
            yStacksTitleValue = -275;
            yAboutComponent = 5;
            yProjectcomponent = 5;
        } else if (conditions.is1024) {
            xAboutmeTitleValue = 0;
            yAboutmeTitleValue = -280;
            yProjectTitleValue = -275;
            yTitleScaleValue = 0.7;
            xStacksTitleValue = 0;
            yStacksTitleValue = -250;
            yAboutComponent = 5;
            yProjectcomponent = 5;
        } else if (conditions.is1550) {
            xAboutmeTitleValue = 0;
            yAboutmeTitleValue = -280;
            xStacksTitleValue = 0;
            yStacksTitleValue = -250;
            yAboutComponent = 5;
            yProjectcomponent = 5;
        } else if (conditions.isAll){
            // VAR DEFAULTS. MUST BE SAME AS THE TOP
          xAboutmeTitleValue = -350;
          yAboutmeTitleValue = -300;
          yProjectTitleValue = -250;
          xStacksTitleValue = -380;
          yStacksTitleValue = -300;
          yTitleScaleValue = 0.8;
          yAboutComponent = 0;
          yProjectcomponent = 10;
        }




        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".Portfolio-parent",
            start: "top top",
            end: () => `${document.documentElement.clientHeight * 5}`,
            scrub: 1.5,
            pin: true,
            anticipatePin: 1,
          },
        });

        tl.set(".Aboutme-component-parent", { yPercent: 20, opacity: 0 });
        tl.set(".Project1", { yPercent: 20, opacity: 0 });
        tl.set(".Project2", { yPercent: 20, opacity: 0 });
        tl.set(".Project3", { yPercent: 20, opacity: 0 });
        tl.set(".Stacks-component-parent", { yPercent: 20, opacity: 0 });
        tl.set(".Contact-component-parent", { yPercent: 10, opacity: 0 });

        tl.to(".Portfolio-subtitle", {
          opacity: 0,
          duration: 0.5,
          ease: "power1.in",
        });

        tl.to(".Portfolio-titlename", {
          x: xAboutmeTitleValue, //-80 default
          y: yAboutmeTitleValue, //-250 default
          duration: 1,
          ease: "circ.out",
          text: {
            value: "About me",
            type: "diff",
            speed: 2,
            newClass: "end-Portfolio-titlename",
          },
        });

        tl.to(
          ".Aboutme-component-parent",
          {
            x: 0,
            yPercent: yAboutComponent, // default 0
            opacity: 1,
            duration: 1,
            zIndex: 99,
          },
          ".Portfolio-titlename-=0.25"
        );

        tl.to(".Aboutme-component-parent", {
          scale: 0.7,
          duration: 0.5,
          ease: "power2.in",
          opacity: 0,
          zIndex: 0,
        });

        tl.to(
          ".Portfolio-titlename",
          {
            x: 0,
            y: 0,
            duration: 2,
            ease: "circ.out",
            text: {
              value: "PROJECTS",
              type: "diff",
              speed: 0.4,
            },
          },
          "-=0.1"
        );

        tl.to(".Portfolio-titlename", {
          y: yProjectTitleValue,
          scale: 0.6,
          duration: 0.5,
          ease: "circ.out",
          text: {
            value: "PROJECTS",
          },
        });

        tl.to(
          ".Project3",
          {
            x: 0,
            yPercent: yProjectcomponent, 
            opacity: 1,
            zIndex: 99,
          },
          "-=0.25"
        );
        tl.to(".Project3", { opacity: 0, zIndex: 0 }, "+=0.5");

        tl.to(
          ".Project1",
          {
            x: 0,
            yPercent: yProjectcomponent,
            opacity: 1,
            zIndex: 99,
          },
          "-=0.25"
        );
        tl.to(".Project1", { opacity: 0 }, "+=0.5");

        tl.to(
          ".Project2",
          {
            x: 0,
            yPercent: yProjectcomponent,
            opacity: 1,
            zIndex: 99,
          },
          "-=0.25"
        );
        tl.to(".Project2", { opacity: 0, zIndex: 0 }, "+=0.5");

        tl.to(
          ".Portfolio-titlename",
          {
            x: 0,
            y: 0,
            duration: 1,
            scale: yTitleScaleValue,
            rotation: 360,
            ease: "circ.out",
            text: {
              value: "AND MORE TO COME",
              speed: 1,
            },
          },
          "-=0.1"
        );

        tl.to(".Portfolio-titlename", {
          x: xStacksTitleValue,
          y: yStacksTitleValue, //-250
          scale: 1,
          ease: "circ.out",
          text: {
            value: "Stacks",
            type: "diff",
            speed: 2,
            rtl: true,
            newClass: "end-Portfolio-titlename",
          },
        });

        tl.to(
          ".Stacks-component-parent",
          {
            x: 0,
            yPercent: 0,
            opacity: 1,
            duration: 0.5,
            zIndex: 99,
          },
          "-=0.25"
        );

        tl.to(".bop", {
          scale: 1,
          duration: 0.4,
          opacity: 1,
          stagger: {
            grid: "auto",
            each: 0.3,
            from: "random",
          },
        });

        tl.to(
          ".Stacks-component-parent",
          {
            scale: 0.7,
            duration: 0.5,
            ease: "power2.in",
            opacity: 0,
            zIndex: 0,
          },
          "+=0.5"
        );

        tl.to(".Portfolio-titlename", {
          x: 0,
          y: -250,
          scale: 1,
          duration: 2,
          rotate: 360,
          ease: "circ.out",
          text: {
            value: "Let's talk",
            speed: 0.5,
            newClass: "end-Portfolio-titlename",
          },
        });

        tl.to(
          ".Contact-component-parent",
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.5,
            zIndex: 99,
          },
          "-=0.25"
        );
      }
    );
  return () => {
    mm.kill(); // remove all matchMedia conditions
  };
}, { scope: container });


 return (
    <div className="Portfolio-container" ref={container}>
        <div className="Portfolio-parent">
            <div className="Portfolio-title">
                <h1 className="Portfolio-titlename">GAB GEROLIA</h1>
            </div>
            <div className="Portfolio-subtitle">
                <p>
                An Aspiring Self Taught <PortfolioSubtitle /> Developer
                </p>
            </div>
            <div className="Aboutme-component-parent">
                <Aboutme/>
            </div>
            <div className="Project3">
                <Projects 
                    gif="/assets/capstone.png"
                    alt="capstone"
                    title1 = "IoT-Enabled Smart Water Quality Monitoring System"
                    title2 = "CAPSTONE"
                    p1 = 'In our Capstone we made a Hardware with 4 sensors to monitor water quality'
                    p2 = "and with that hardware. We made a Mobile Application of it using MIT Application and Google Firebase to see the datas sent by the hardware"
                    p3={
                        <>
                            I am the Full Stack Developer of our mobile application during that time. You can see more details about our Capstone&nbsp;
                            <a 
                                href="https://youtu.be/FpUaKoGismA" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                style={{ color: 'var(--secondary)'}}
                                className="underline"
                            >
                                here
                            </a>.
                        </>
                    }
                />
            </div>
            <div className="Project1">
                <Projects 
                    gif="/assets/leagueauto.gif"
                    alt="leagueautogif"
                    title1 = "PYTHON SCRIPT AUTO ACCEPT & AUTO BAN FOR LEAGUE OF LEGENDS"
                    p1 = 'A simple script I made to automate pressing the "Accept" button and automatically ban Champion during ban phase.'
                    p2 = "This script I made is good if you want to go AFK while waiting for a game."
                    p3 = {
                        <>
                            You can try this script on my&nbsp;
                            <a 
                                href="https://github.com/GabGerolia/PERSONAL-AutoAccept-LeagueofLegends" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                style={{ color: 'var(--secondary)'}}
                                className="underline"
                            >
                                GitHub
                            </a>
                            . All you need is install Python and VS code with Python extension.
                        </>
                    }
                />
            </div>
            <div className="Project2">
                <Projects 
                    gif="/assets/efmdgif.gif"
                    alt="efmdgif"
                    title2 = "ESCAPE FROM THE MOLTEN DEPTH"
                    p1 = 'I made an arcade style 2D Game in Unity 2D.'
                    p2 = "the goal of the game is to score as high as possible without letting the flame get you."
                    p3 = {
                        <>
                            You can try this simple game available only on Android devices. You can download&nbsp;
                             <a 
                                href="https://drive.google.com/file/d/11vxJBz8CFuCjCy3UCXxDaWdOMsN1C_pi/view?usp=sharing" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                style={{ color: 'var(--secondary)'}}
                                
                                className="underline"
                            >
                                here
                            </a>.
                        </>
                    }
                />
            </div>
            <div className="Stacks-component-parent">
                <Stacks/>
            </div>
            <div className="Contact-component-parent">
                <Contact/>
            </div>
        </div>
    </div>
  );
}

export default Portfolio;
