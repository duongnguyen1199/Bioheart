import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  icon,
  google,
  facebook,
  apple,
  move,
  disabled,
  primary,
  outline,
  children,
  ...passProps
}) {
  let Comp = "button";
  const props = {
    icon,
    ...passProps,
  };

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  const classes = cx("wrapper", {
    primary,
    outline,
    google,
    facebook,
    apple,
    move,
    disabled,
  });
  return (
    <Comp className={classes} {...props}>
      {icon &&
        (<FontAwesomeIcon className={cx("icon")} icon={icon} /> || (
          <img src={icon} alt="" />
        ))}
      <span className={cx("btn__content")}>{children}</span>
    </Comp>
  );
}

export default Button;
