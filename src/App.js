import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const dummyData = {
  date: "2023-07-07",
  explanation:
    "This pretty starfield spans about three full moons (1.5 degrees) across the heroic northern constellation of Perseus. It holds the famous pair of open star clusters, h and Chi Persei. Also cataloged as NGC 869 (top) and NGC 884, both clusters are about 7,000 light-years away and contain stars much younger and hotter than the Sun.  Separated by only a few hundred light-years, the clusters are both 13 million years young based on the ages of their individual stars, evidence that they were likely a product of the same star-forming region. Always a rewarding sight in binoculars, the Double Cluster is even visible to the unaided eye from dark locations.",
  hdurl:
    "https://apod.nasa.gov/apod/image/2307/Caldwell_14_2023_HaLRGB_LRGB_stars_wm.jpg",
  title: "The Double Cluster in Perseus",
};

function App() {
  const [data, setData] = useState(dummyData);

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun{" "}
        <span role="img" aria-label="go!">
          🚀
        </span>
        !
      </p>
    </div>
  );
}

export default App;
