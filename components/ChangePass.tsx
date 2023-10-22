import React, { MutableRefObject, useRef, useState } from "react";
import changePassStyles from "../styles/ChangePass.module.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { auth } from "../public/firebase";
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
} from "firebase/auth";

function ChangePass({ setEmailMatching, setPasswordModal }) {
  const newPassRef = useRef(
    ""
  ) as unknown as MutableRefObject<HTMLInputElement>;
  const oldPassRef = useRef(
    ""
  ) as unknown as MutableRefObject<HTMLInputElement>;
  const [changingPass, setChangingPass] = useState(false);
  const user = auth.currentUser;

  async function changePassword(e: any) {
    e.preventDefault();
    setChangingPass(true);
    const credential = EmailAuthProvider.credential(
      auth.currentUser.email,
      oldPassRef.current.value
    );
    try {
      const result = await reauthenticateWithCredential(
        auth.currentUser,
        credential
      );
      await updatePassword(
        auth.currentUser as any,
        newPassRef.current.value.trim()
      );
      setChangingPass(false);
      setPasswordModal(false);
      alert("Password has been updated!");
    } catch (error) {
      console.log(error);
      setChangingPass(false);
    }
  }

  return (
    <form
      className={changePassStyles.changePass__container}
      onSubmit={(e) => changePassword(e)}
    >
      <h2 className={changePassStyles.changePass__title}>
        <AiOutlineArrowLeft
          onClick={() => setEmailMatching(false)}
          style={{ cursor: "pointer" }}
        />{" "}
        New Password
      </h2>
      <p className={changePassStyles.changePass__para}>
        All is well, enter your new password to change the old one.
      </p>
      <span>
        <p
          style={{
            color: "rgb(86, 89, 93)",
            fontSize: "small",
            fontWeight: "bold",
          }}
        >
          Old Password
        </p>
        <input
          type="password"
          required
          className={changePassStyles.changePass__inputPass}
          placeholder="●●●●●●●●"
          ref={oldPassRef}
        />
      </span>
      <span>
        <p
          style={{
            color: "rgb(86, 89, 93)",
            fontSize: "small",
            fontWeight: "bold",
          }}
        >
          New Password
        </p>
        <input
          type="password"
          required
          className={changePassStyles.changePass__inputPass}
          placeholder="●●●●●●●●"
          ref={newPassRef}
        />
      </span>
      {changingPass ? (
        <button className={changePassStyles.changePass__loadingButton}>
          <div className={changePassStyles.changePass__spinner}></div>
        </button>
      ) : (
        <button className={changePassStyles.changePass__continue}>
          Change Password
        </button>
      )}
    </form>
  );
}

export default ChangePass;
