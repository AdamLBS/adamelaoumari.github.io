import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Student",
          "Teaching assistant",
          "Freelancer",
          "Flutter Developper",
          "C/C++ Developper",
          "Fullstack Developper",
          "Cybersecurity enthusiast"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
