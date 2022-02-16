import React, { useState, useEffect } from "react";
import Typist from "react-typist";

function Name() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    console.log("Count: " + count);
    setCount(1);
  }, [count]);
  return (
    <div>
      <div className="text-green-400 m-16    animate__animated animate__hinge animate__jackInTheBox ">
        <div className="center">
          <strong className="text-2xl">
            Hello , I'm <br />
            <strong className=" text-red-400 sf-mono text-4xl">
              <Typist>Snehasis Debbarman.</Typist>
            </strong>
            <div className="text-2xl h-20">
              {count ? (
                <Typist avgTypingDelay={50} onTypingDone={() => setCount(0)}>
                  <span> I am A Software Developer</span>
                  <Typist.Backspace count={23} delay={2000} />
                  <span> build things for web</span>
                  <Typist.Delay ms={1000} />
                </Typist>
              ) : (
                ""
              )}
            </div>
          </strong>
        </div>
      </div>
    </div>
  );
}

export default Name;
