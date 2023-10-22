import React, { MutableRefObject, useRef, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import forgotPassStyles from "../styles/ForgotPass.module.css";
import { auth } from "../public/firebase";

function PassChanging({ setForgotPassword, setEmailMatching }) {
  const user = auth.currentUser;
  const emailRef = useRef("") as unknown as MutableRefObject<HTMLInputElement>;
  const [forgotPassButton, setForgotPassButton] = useState(false);

  function checkEmailIfSame(e) {
    e.preventDefault();
    if (!emailRef.current.value) {
      alert("Enter an email address please.");
      return;
    } else if (emailRef.current.value === user.email) {
      setEmailMatching(true);
    } else {
      alert(
        "The email inputted is different than the account email. Please try again."
      );
    }
  }

  return (
    <form
      className={forgotPassStyles.forgotPass__container}
      onSubmit={(e) => checkEmailIfSame(e)}
    >
      <h2 className={forgotPassStyles.forgotPass__title}>
        <AiOutlineArrowLeft
          onClick={() => setForgotPassword(false)}
          style={{ cursor: "pointer" }}
        />{" "}
        Change your password
      </h2>
      <p className={forgotPassStyles.forgotPass__para}>
        Dont worry, verify your email first to then change your
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
          ref={emailRef}
        />
      </span>
      {forgotPassButton ? (
        <button className={forgotPassStyles.changePass__loadingButton}>
          <div className={forgotPassStyles.changePass__spinner}></div>
        </button>
      ) : (
        <button
          className={forgotPassStyles.forgotPass__continue}
          onClick={(e) => checkEmailIfSame(e)}
        >
          Continue
        </button>
      )}
    </form>
  );
}

export default PassChanging;
