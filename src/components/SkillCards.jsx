import { useEffect, useState } from "react";

const SkillCard = () => {
  const [animationDelay, setAnimationDelay] = useState("-9s");

  useEffect(() => {
    const delay = `-${Math.floor(Math.random() * 10)}s`;
    setAnimationDelay(delay);
  }, []);

  return (
    <div className="relative z-10">
      {/* Carte principale */}
      <div className="rounded-lg p-5 bg-gray-800 text-white shadow-lg">
        {/* Logo */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white p-2">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
            alt="Node.js"
            className="w-16 h-16"
          />
        </div>

        {/* Titre */}
        <h3 className="mt-8 text-lg font-semibold text-center">
          Node.JS & Express.js
        </h3>

        {/* Description */}
        <p className="mt-4 text-sm text-center">
          Node.JS & Express.js for Backend Development.
        </p>
      </div>

      {/* Effet lumineux animé */}
      <div
        className="absolute inset-0 pointer-events-none rounded-xl border border-gray-500 
          animate-border-glow"
        style={{
          animationDelay: animationDelay,
        }}
      ></div>
    </div>
  );
};

export default SkillCard;
