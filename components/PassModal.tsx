import passwordStyles from "../styles/Password.module.css";
import React, { useRef, useState } from "react";
import { auth } from "../public/firebase";
import { User } from "firebase/auth";
import { AiOutlineClose } from "react-icons/ai";

function PassModal({ setForgotPassword, setPasswordModal }) {
  const [updatingPassword, setUpdatingPassword] = useState(false);
  const user: User = auth.currentUser;
  const passRef: any = useRef("");

  function openForgotPass(e: any) {
    e.preventDefault();
    setForgotPassword(true);
  }

  function loginUser(e: any): void {
    e.preventDefault();
    if (!passRef.current.value) {
      alert("Please enter something. Thank you.");
      return;
    }
    setUpdatingPassword(true);
  }

  return (
    <div className={passwordStyles.password__container}>
      <form
        onSubmit={(e) => loginUser(e)}
        className={passwordStyles.password__wrapper}
      >
        <AiOutlineClose
          className={passwordStyles.password__closeButton}
          onClick={() => setPasswordModal(false)}
        />
        <h2 className={passwordStyles.password__header}>
          Verify it&apos;s you
        </h2>
        <p className={passwordStyles.password__subHeader}>
          To ensure your security, we want to make sure that it&apos;s really
          you.
        </p>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p
            style={{
              color: "#56595D",
              fontSize: "small",
              fontWeight: "bold",
            }}
          >
            Email
          </p>
          {user ? (
            <p className={passwordStyles.password__email}>{user.email}</p>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p
            style={{
              color: "#56595D",
              fontSize: "small",
              fontWeight: "bold",
            }}
          >
            Password
          </p>
          <input
            type="password"
            placeholder="●●●●●●●●●●●●"
            className={passwordStyles.password__editor}
            ref={passRef}
          />
        </div>
        {updatingPassword ? (
          <button className={passwordStyles.password__loadingButton}>
            <div className={passwordStyles.password__spinner}></div>
          </button>
        ) : (
          <button
            className={passwordStyles.password__verifyButton}
            onClick={(e) => loginUser(e)}
          >
            Verify
          </button>
        )}

        <a
          href=""
          style={{ color: "#717477", fontSize: "small" }}
          onClick={(e) => openForgotPass(e)}
        >
          Change password?
        </a>
      </form>
    </div>
  );
}

export default PassModal;
