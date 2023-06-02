// import Border from "./component/Border";
import LandingPage from "./LandingPage";
import "./index.css";
// import Loader from "./component/Loader";
// import { useState } from "react";
// import { useEffect } from "react";

function App() {
  // const [loading, setLoading] = useState(true);
  // const handleLoad = () => {
  //   setLoading(false);
  //   console.log("The page is fully loaded");
  // };

  // useEffect(() => {
  //   window.onload = () => {
  //     handleLoad();
  //   };
  //   window.onload(() => {});
  // }, []);
  return (
    <>
      <div>
        {/* <Loader loadingStatus={loading} /> */}
        {/* <Border /> */}
        <LandingPage />
      </div>
    </>
  );
}

export default App;
