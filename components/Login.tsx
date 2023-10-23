import React, {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useRef,
  useState,
} from "react";
import modalStyles from "../styles/Modal.module.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AiOutlineClose } from "react-icons/ai";

function Login({ setIsLogin, auth, setIsModal }): any {
  const userEmail = useRef("") as unknown as MutableRefObject<HTMLInputElement>;
  const userPass = useRef("") as unknown as MutableRefObject<HTMLInputElement>;
  const [userLoggingIn, setUserLoggingIn]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState(false);
  const [loginError, setLoginError] = useState("");

  async function loginUser(e: any): Promise<void> {
    e.preventDefault();
    if (!userEmail.current.value || !userPass.current.value) {
      return;
    }
    setUserLoggingIn(true);

    try {
      await signInWithEmailAndPassword(
        auth,
        userEmail.current.value,
        userPass.current.value
      );

      setIsModal(false);
    } catch (error) {
      setLoginError(error.message);
      setUserLoggingIn(false);
    }
  }

  function setLogin(e: any) {
    e.preventDefault();
    setIsLogin(false);
  }

  // async function signInWithGoogle(): Promise<void> {
  //   const result = await signInWithPopup(auth, googleAuth);
  //   setIsModal(false);
  // }

  return (
    <div>
      <AiOutlineClose
        className={modalStyles.modal__closeButtonLogin}
        onClick={() => setIsModal(false)}
      />
      <form
        onSubmit={(e) => loginUser(e)}
        className={modalStyles.modal__wrapper}
      >
        <h2 className={modalStyles.modal__header}>Sign ito your account</h2>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p style={{ color: "#e58e73", fontSize: "14px" }}>{loginError}</p>
          <p
            style={{
              color: "#56595D",
              fontSize: "small",
              fontWeight: "bold",
              marginTop: "12px",
            }}
          >
            Email
          </p>
          <input
            type="email"
            placeholder="Email"
            className={modalStyles.modal__emailInput}
            ref={userEmail}
          />
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
            placeholder="●●●●●●●●"
            className={modalStyles.modal__passInput}
            ref={userPass}
          />
        </div>
        {userLoggingIn ? (
          <button className={modalStyles.modal__loadingButton}>
            <div className={modalStyles.modal__spinner}></div>
          </button>
        ) : (
          <button
            className={modalStyles.modal__signInButton}
            onClick={(e) => loginUser(e)}
          >
            Sign in
          </button>
        )}

        <a href="" style={{ color: "#717477", fontSize: "small" }}>
          Forgot password?
        </a>
        {/* <button
          className={modalStyles.modal__googleButton}
          onClick={() => signInWithGoogle()}
        >
          Sign in with Google?
        </button> */}
        <p style={{ fontSize: "small" }}>
          New here?{" "}
          <a href="" style={{ color: "#6F6FFF" }} onClick={(e) => setLogin(e)}>
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
}

export default Login;
