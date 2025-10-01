import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function Stacks() {
  useGSAP(() => {
    const images = document.querySelectorAll('.logoWrapper');

    images.forEach((box) => {
      const img = box.querySelector('.logo');
      const imgName = box.querySelector('.imgName');

      const handleMouseEnter = () => {
        gsap.killTweensOf([img, imgName]);
        gsap.to(img, {
          opacity: 0,
          duration: 0.3,
          ease: "power1.out",
        });
        gsap.to(imgName, {
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
          delay: 0.2,
        });
      };

      const handleMouseLeave = () => {
        gsap.killTweensOf([img, imgName]);
        gsap.set(imgName, { opacity: 0 });
        gsap.set(img, { opacity: 1 });
      };

      box.addEventListener("mouseenter", handleMouseEnter);
      box.addEventListener("mouseleave", handleMouseLeave);
    });
  });

  const filterByClass = (targetClass) => {
    const allLogos = document.querySelectorAll(".logoWrapper");

    allLogos.forEach((logo) => {
      if (logo.classList.contains(targetClass)) {
        gsap.to(logo, {
          opacity: 1,
          duration: 0.3,
          ease: "power1.out",
        });
      } else {
        gsap.to(logo, {
          opacity: 0.2,
          duration: 0.3,
          ease: "power1.out",
        });
      }
    });
  };

  const resetFilter = () => {
    const allLogos = document.querySelectorAll(".logoWrapper");
    allLogos.forEach((logo) => {
      gsap.to(logo, {
        opacity: 1,
        duration: 0.3,
        ease: "power1.out",
      });
    });
  };

  return (
    <div className="Stacks-container">
        <div className="Stacks-wrapper">
            <div className="Stacks-sorter">
                <button onClick={() => filterByClass("frontend")}>Front End</button>
                <button onClick={() => filterByClass("backend")}>Back End</button>
                <button onClick={() => filterByClass("webdev")}>Web Dev</button>
                <button onClick={() => filterByClass("deskdev")}>
                    Desktop Application Dev
               </button>
                <button onClick={() => filterByClass("fwlb")}>
                    Frameworks & Libraries
                </button>
                <button onClick={() => filterByClass("tools")}>Tools</button>
                <button onClick={resetFilter}>Show All</button>
            </div>

            <div className="Stacks-logo">
                <div className="bop logoWrapper webdev frontend"><img className="logo" src="/assets/html.svg" alt="" /><div className="imgName"><p>HTML</p></div></div>
                <div className="bop logoWrapper webdev frontend"><img className="logo" src="/assets/css.svg" alt="" /><div className="imgName"><p>CSS</p></div></div>
                <div className="bop logoWrapper webdev frontend"><img className="logo" src="/assets/js.svg" alt="" /><div className="imgName"><p>JavaScript</p></div></div>
                <div className="bop logoWrapper webdev frontend fwlb"><img className="logo" src="/assets/tailwindcss.svg" alt="" /><div className="imgName"><p>Tailwind CSS</p></div></div>
                <div className="bop logoWrapper webdev backend"><img className="logo" src="/assets/php.svg" alt="" /><div className="imgName"><p>PHP</p></div></div>
                <div className="bop logoWrapper webdev backend"><img className="logo" src="/assets/sql.svg" alt="" /><div className="imgName"><p>SQL</p></div></div>
                <div className="bop logoWrapper webdev fwlb"><img className="logo" src="/assets/react.svg" alt="" /><div className="imgName"><p>React</p></div></div>
                <div className="bop logoWrapper webdev fwlb"><img className="logo" src="/assets/vite.svg" alt="" /><div className="imgName"><p>Vite</p></div></div>
                <div className="bop logoWrapper webdev fwlb"><img className="logo" src="/assets/gsap.svg" alt="" /><div className="imgName"><p>GSAP</p></div></div>
                <div className="bop logoWrapper webdev fwlb"><img className="logo" src="/assets/framer-motion.svg" alt="" /><div className="imgName"><p>Framer Motion</p></div></div>
                <div className="bop logoWrapper webdev fwlb"><img className="logo" src="/assets/nodejs.svg" alt="" /><div className="imgName"><p>Node.js</p></div></div>
                <div className="bop logoWrapper deskdev"><img className="logo" src="/assets/cpp.svg" alt="" /><div className="imgName"><p>C++</p></div></div>
                <div className="bop logoWrapper deskdev"><img className="logo" src="/assets/csharp.svg" alt="" /><div className="imgName"><p>C#</p></div></div>
                <div className="bop logoWrapper deskdev"><img className="logo" src="/assets/java.svg" alt="" /><div className="imgName"><p>Java</p></div></div>
                <div className="bop logoWrapper deskdev"><img className="logo" src="/assets/vb-net.svg" alt="" /><div className="imgName"><p>VB.NET</p></div></div>
                <div className="bop logoWrapper deskdev"><img className="logo" src="/assets/python.svg" alt="" /><div className="imgName"><p>Python</p></div></div>
                <div className="bop logoWrapper tools"><img className="logo" src="/assets/msoffice.svg" alt="" /><div className="imgName"><p>MS Office</p></div></div>
                <div className="bop logoWrapper tools"><img className="logo" src="/assets/unity.svg" alt="" /><div className="imgName"><p>Unity</p></div></div>
                <div className="bop logoWrapper tools"><img className="logo" src="/assets/vscode.svg" alt="" /><div className="imgName"><p>VS Code</p></div></div>
                <div className="bop logoWrapper tools"><img className="logo" src="/assets/vs2022.svg" alt="" /><div className="imgName"><p>Visual Studio 2022</p></div></div>
                <div className="bop logoWrapper tools"><img className="logo" src="/assets/photoshop.svg" alt="" /><div className="imgName"><p>Adobe Photoshop</p></div></div>
            </div>
        </div>
    </div>
  );
}

export default Stacks