import classNames from "classnames/bind";
import React from "react";
import styles from "./Error.module.scss";

const cx = classNames.bind(styles);

function Error({ message }) {
  return <p className={cx("error")}>{message}</p>;
}

export default Error;
