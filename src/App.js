import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav";
import "animate.css";
import Name from "./name";
import { Grid, Box } from "@mui/material";

function App() {
  return (
    <div>
      {/* <Nav className="" /> */}
      <section>
        <div className="slate-300 full">
          <button className="dcv hover:bg-red-500">Download CV</button>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8} className="circle-text-container">
              <div className="main">
                <div className="circle"></div>
              </div>
              <Name />
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="blob-container">
                <svg
                  className="blob1 loading"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#FF0066"
                    d="M60,-20.4C68.4,6.4,59.5,38,40.4,50.7C21.4,63.4,-7.8,57.2,-30.8,40.8C-53.7,24.5,-70.5,-1.9,-64.3,-25.6C-58.1,-49.3,-29.1,-70.3,-1.6,-69.7C25.8,-69.2,51.6,-47.2,60,-20.4Z"
                    transform="translate(100 100)"
                  />
                </svg>
                <svg
                  className="blob2 loading"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#5EEAD4"
                    d="M66.2,-26.6C72.1,-3.5,53.6,22.5,32,36.4C10.3,50.4,-14.6,52.3,-32.5,40.3C-50.4,28.4,-61.3,2.5,-54.7,-21.6C-48.1,-45.8,-24.1,-68.1,3.1,-69C30.2,-70,60.4,-49.7,66.2,-26.6Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </div>
            </Grid>
          </Grid>
        </div>
      </section>
      <section className="section-two">
        <Grid container className="">
          <Grid item xs={6}>
            <h2 className=" about text-slate-400 text-3xl p-10 font-semibold">
              {" "}
              <span className="text-red-400 sf-mono">1.</span> About me
            </h2>
            <div></div>
          </Grid>
          <Grid item xs={6} className="bg-yellow-400"></Grid>
        </Grid>
      </section>
    </div>
  );
}

export default App;
