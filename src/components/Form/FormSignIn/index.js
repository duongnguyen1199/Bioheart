import {
  faApple,
  faFacebook,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import classNames from "classnames/bind";
import { useState } from "react";
import Button from "../../Button";
import Error from "../../Error";
import Input from "../../Input";
import styles from "./FormSignIn.module.scss";

const cx = classNames.bind(styles);
const accounts = [
  {
    email: "duongnguyen@gmail.com",
    password: "duongnguyen1",
  },
];

function FormSignIn() {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const account = accounts.find(
      (account) =>
        account.email === formValues.email &&
        account.password === formValues.password
    );

    if (account) {
      setIsSubmit(true);
    } else {
      setFormErrors({ ...formErrors, account: "Account not found" });

      //setFormErrors(validate(formValues));
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This in not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 5) {
      errors.password = "< 5";
    }
    return errors;
  };

  return (
    <div className={cx("formsignin")}>
      <div className={cx("container")}>
        {/* Form Sign In */}
        <form className={cx("form")} onSubmit={handleSubmit}>
          <h2 className={cx("form__title")}>Sign In</h2>
          <p className={cx("form__desc")}>
            Please fill out all the fields below to sign in to your account.
          </p>
          <Input
            label="Email"
            type="text"
            name="email"
            placeholder="Enter your email"
            value={formValues.email}
            message={formErrors.email}
            onChange={handleChange}
          />
          <Input
            show
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formValues.password}
            message={formErrors.password}
            onChange={handleChange}
          />
          <Error message={formErrors.account} />

          <Button
            className={cx("btn__forgot_password")}
            to="/forgotpassword"
            children="Forgot Password?"
          />
          <Button primary children="Sign In" />
        </form>

        <div className={cx("form__line")}>
          <span> Or </span>
        </div>

        {/* Sign in button */}
        <div className="mt16">
          <Button
            outline
            google
            icon={faGoogle}
            href="https://www.google.com"
            children="Sign In with Google"
          />
        </div>
        <div className="mt16">
          <Button
            outline
            facebook
            icon={faFacebook}
            href="https://www.facebook.com/"
            children="Sign In with Facebook"
          />
        </div>
        <div className="mt16">
          <Button
            outline
            apple
            icon={faApple}
            href="https://www.apple.com/vn/"
            children="Sign In with Apple"
          />
        </div>
        <p className="mt24">
          <span>By signing in, you agree to our </span>
          <Button
            className={cx("link--conect")}
            to="/"
            children="Privacy policy"
          />
          <span> and </span>
          <Button
            className={cx("link--conect")}
            to="/"
            children="Terms of use"
          />
        </p>
      </div>
    </div>
  );
}

export default FormSignIn;
