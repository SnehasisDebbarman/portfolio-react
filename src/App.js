import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav";
import "animate.css";

function App() {
  return (
    <div className="">
      <Nav
        className="absolute top-0 left-0 right-0 "
      />
      <div className=" bg-teal-800  grid place-items-center ">
        
          <div className="text-rose-100 m-40 text-7xl animate__animated animate__hinge animate__jackInTheBox ">
            Hello ,<br />
            I'm{" "}
            <strong class=" text-amber-300 ">
              Snehasis Debbarman.
            </strong>
            <br />I am a Frontend Web Developer.
          </div>
          <div className="m-10">

          </div>

      </div>
    </div>
  );
}

export default App;
