import MarqueeEffect from "react-fast-marquee";

import img_1 from "./assets/images/1.png";
import img_2 from "./assets/images/2.png";
import img_3 from "./assets/images/3.png";
import img_4 from "./assets/images/4.png";
import img_5 from "./assets/images/5.png";

const Text = ({ text }: { text: string }) => {
  return (
    <>
      <span className="text-2xl text-teal-400">{text}</span>
    </>
  );
};

const ImgContainer = () => {
  const imgs = [img_1, img_2, img_3, img_4, img_5];
  return (
    <>
      <div className="flex items-center gap-10">
        {imgs.map((i, index) => (
          <img alt={"img" + index} src={i} />
        ))}
      </div>
    </>
  );
};

function App() {
  return (
    <>
      <MarqueeEffect pauseOnHover speed={100}>
        <Text text={"Hi Welcome to JayLinXR Academy"} />
      </MarqueeEffect>
      <MarqueeEffect
        className="mt-36"
        speed={80}
        pauseOnHover
        direction="right"
      >
        <ImgContainer />
      </MarqueeEffect>
    </>
  );
}

export default App;
