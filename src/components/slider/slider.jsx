import React from "react";

import firstslidelabel from "../../Assets/sliderImage/firstslidelabel.jpg";
// import secondslidelabe from "../../Assets/sliderImage/secondslidelabel.jpg";
// import thirdslidelabel from "../../Assets/sliderImage/thirdslidelabel.jpg";
// import {
//   IoIosArrowDropleftCircle,
//   IoIosArrowDroprightCircle,
// } from "react-icons/io";
export default function Slider() {
  // const carouselImages = [firstslidelabel, secondslidelabe, thirdslidelabel];
  // const carouselImages = [
  //   {
  //     src: firstslidelabel,
  //     label: "First slide label",
  //     text: "The community thrives when learners share, not just stare",
  //   },
  //   {
  //     src: secondslidelabe,
  //     label: "Second slide label",
  //     text: "In the virtual classroom, every learner has a front-row seat",
  //   },
  //   {
  //     src: thirdslidelabel,
  //     label: "Third slide label",
  //     text: "Click, learn, grow: the mantra of the online training era",
  //   },
  // ];

  // const [carouselItem, setCarouselItem] = useState(0);
  // const numCarouselItems = carouselImages.length;
  // const changeToPrevious = () => {
  //   setCarouselItem(Math.max(carouselItem - 1, 0));
  // };
  // const changeToNext = () => {
  //   setCarouselItem(Math.min(carouselItem + 1, numCarouselItems - 1));
  // };
  // const changeToPrevious = () => {
  //   setCarouselItem((carouselItem - 1 + numCarouselItems) % numCarouselItems);
  // };

  // const changeToNext = () => {
  //   setCarouselItem((carouselItem + 1) % numCarouselItems);
  // };
  // const changeToGivenItem = (i) => {
  //   setCarouselItem(i);
  // };

  // const indicatorClasses = (i) =>
  //   `w-8 h-1.5 transition duration-500 ${
  //     carouselItem === i ? "bg-white" : "bg-gray-500  scale-75"
  //   }`;
  // const imagesContainerStyle = { width: `${numCarouselItems}00%` };
  // const imgContainerstyle = (index) =>
  //   index === 0
  //     ? {
  //         width: `${100 / numCarouselItems}%`,
  //         marginLeft: `-${(carouselItem * 100) / numCarouselItems}%`,
  //       }
  //     : {
  //         width: `${100 / numCarouselItems}%`,
  //       };

  // useEffect(() => {
  //   const id = window.setInterval(() => {
  //     setCarouselItem((carouselItem) => (carouselItem + 1) % numCarouselItems);
  //   }, 4000);
  //   return () => window.clearInterval(id);
  // }, [numCarouselItems]);
  return (
    <>
      <div className="w-full flex justify-center">
        <img
          src={firstslidelabel}
          alt="Banner"
          className="w-11/12 h-85 object-cover"
        />
      </div>
    </>
  );
}
