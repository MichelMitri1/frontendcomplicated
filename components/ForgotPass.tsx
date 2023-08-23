import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import forgotPassStyles from "../styles/ForgotPass.module.css";

function ForgotPass({ forgotPassword, setForgotPassword }) {
  return (
    <div className={forgotPassStyles.forgotPass__container}>
      <h2 className={forgotPassStyles.forgotPass__title}>
        <AiOutlineArrowLeft
          onClick={() => setForgotPassword(false)}
          style={{ cursor: "pointer" }}
        />{" "}
        Forgot your password?
      </h2>
      <p className={forgotPassStyles.forgotPass__para}>
        Dont worry, we&apos;ll send you a message to help you reset your
        password.
      </p>
      <span>
        <p
          style={{
            color: "rgb(86, 89, 93)",
            fontSize: "small",
            fontWeight: "bold",
          }}
        >
          Email
        </p>
        <input
          type="email"
          required
          className={forgotPassStyles.forgotPass__inputPass}
          placeholder="jane@example.com"
        />
      </span>
      <button className={forgotPassStyles.forgotPass__continue}>
        Continue
      </button>
    </div>
  );
}

export default ForgotPass;
