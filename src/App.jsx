import { useState } from "react";
import { RWebShare } from "react-web-share";
import "./App.css";
import { shareOnMobile } from "react-mobile-share";

function App() {
  const imgBase64 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2...";
  const handleClick = () => {
    navigator
      .share({
        title: document.title,
        text: "Hello World",
        url: window.location.href,
      })
      .then(() => console.log("Successful share! 🎉"))
      .catch((err) => console.error(err));
  };
  return (
    <>
      <div className="">
        <RWebShare
          data={{
            text: "Like humans, flamingos make friends for life",
            url: "https://on.natgeo.com/2zHaNup",
            title: "Flamingos",
          }}
          onClick={() => console.log("shared successfully!")}>
          <button>Share 🔗</button>
        </RWebShare>
        <button
          onClick={() =>
            shareOnMobile({
              text: "Hey checkout our package react-mobile-share",
              url: "https://www.npmjs.com/package/react-mobile-share",
              title: "React-Mobile-Share",
              images: [imgBase64],
            })
          }>
          Share
        </button>
        <br />
        <button onClick={handleClick}>Manual share</button>
      </div>
    </>
  );
}

export default App;
