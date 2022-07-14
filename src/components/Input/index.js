import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useState } from "react";
import Error from "../Error";
import styles from "./Input.module.scss";

const cx = classNames.bind(styles);

function Input({ label, type, show, message, ...passProps }) {
  const [data, setData] = useState({
    icon: faEyeSlash,
    type,
  });

  const handleClick = () => {
    data.icon === faEyeSlash
      ? setData({
          icon: faEye,
          type: "text",
        })
      : setData({
          icon: faEyeSlash,
          type: "password",
        });
  };

  return (
    <div className={cx("wrapper")}>
      {label && <label className={cx("label")}>{label}</label>}
      <input
        type={data.type}
        className={cx("input", message ? "error" : "")}
        {...passProps}
      />
      {show && (
        <FontAwesomeIcon
          onClick={handleClick}
          className={cx("icon")}
          icon={data.icon}
        />
      )}
      <Error message={message} />
    </div>
  );
}

export default Input;
