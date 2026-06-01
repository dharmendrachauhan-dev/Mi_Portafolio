import { useState, useRef } from "react";

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef(null);
  const rotationRef = useRef(0);

  const handleButton = () => {
    const next = !isOpen;
    setIsOpen(next);

    const btn = btnRef.current;
    rotationRef.current += 360;  //360, 720, 1080....
    btn.style.transition = "transform 0.5s cubic-bezier(0.4,0,0.2,1)";
    btn.style.transform = `rotate(${rotationRef.current}deg)`;
  };

  const barBase = "block h-1 w-full bg-zinc-800 origin-center";

  return (
    <div className="h-screen flex justify-center mt-10">
      <button
        ref={btnRef}
        onClick={handleButton}
        className="flex flex-col justify-center items-center px-4 gap-2 cursor-pointer border bg-white/90 rounded-xl size-20"
        style={{ transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1)" }}
      >
        <span
          className={barBase}
          style={{
            transition: isOpen
              ? "transform 0.3s ease 0.35s"
              : "transform 0.3s ease",
            transform: isOpen ? "translateY(12px) rotate(45deg)" : "",
          }}
        />
        <span
          className={barBase}
          style={{
            transition: isOpen
              ? "opacity 0.2s ease 0.35s, transform 0.3s ease 0.35s"
              : "opacity 0.2s ease, transform 0.3s ease",
            opacity: isOpen ? 0 : 1,
            transform: isOpen ? "scaleX(0)" : "",
          }}
        />
        <span
          className={barBase}
          style={{
            transition: isOpen
              ? "transform 0.3s ease 0.35s"
              : "transform 0.3s ease",
            transform: isOpen ? "translateY(-12px) rotate(-45deg)" : "",
          }}
        />
      </button>
    </div>
  );
}

export default Hamburger;
