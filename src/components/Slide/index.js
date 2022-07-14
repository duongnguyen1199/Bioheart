import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import { useState } from "react";
import logo from "../../assets/img/logo.png";
import slide0 from "../../assets/img/SignIn/slide/slide0.png";
import slide1 from "../../assets/img/SignIn/slide/slide1.png";
import slide2 from "../../assets/img/SignIn/slide/slide2.png";
import slide3 from "../../assets/img/SignIn/slide/slide3.png";
import slide4 from "../../assets/img/SignIn/slide/slide4.png";

import Button from "../Button";
import styles from "./Slide.module.scss";

const cx = classNames.bind(styles);

const images = [
  {
    id: 0,
    img: slide0,
    title:
      "Improve lives by making the most accurate heart data available to everyone.",
  },
  {
    id: 1,
    img: slide1,
    title:
      "Bioheart is the first of its kind - a continuous heart rhythm monitor for everyday use.",
  },
  {
    id: 2,
    img: slide2,
    title:
      "Bioheart records your electrical heart activity continuously while you wear it, delivering the most accurate health insights on your heart.",
  },
  {
    id: 3,
    img: slide3,
    title:
      "Your data is viewable live and saved in the app for you to review later.",
  },
  {
    id: 4,
    img: slide4,
    title:
      "Easily export and share your data with a physician for a deeper understanding of your heart trends.",
  },
];

function Slide() {
  const [img, setImg] = useState(images[0]);
  const lengthImg = images.length;

  const handleClickNextBtn = () => {
    img.id === lengthImg - 1 ? setImg(images[0]) : setImg(images[img.id + 1]);
  };

  const handleClickPrevBtn = () => {
    img.id === 0 ? setImg(images[lengthImg - 1]) : setImg(images[img.id - 1]);
  };

  return (
    <div className={cx("slide")}>
      <div className={cx("container")}>
        <div className={cx("slide__btn")}>
          <Button
            onClick={handleClickPrevBtn}
            outline
            move
            disabled={img.id === 0 ? true : false}
            icon={faAngleLeft}
          />
          <Button
            onClick={handleClickNextBtn}
            outline
            move
            disabled={img.id === lengthImg - 1 ? true : false}
            icon={faAngleRight}
          />
        </div>

        <img className={cx("slide__img")} src={img.img} alt="" />

        <div className={cx("list__icon")}>
          {images.map((image, index) => (
            <p
              key={index}
              className={cx(
                "circle",
                index === img.id ? "active" : "nonactive"
              )}
            ></p>
          ))}
        </div>

        <div>
          <img className={cx("slide__logo")} src={logo} alt="" />
        </div>

        <p className={cx("slide__title", "mt24")}>{img.title}</p>
      </div>
    </div>
  );
}

export default Slide;
