import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import modalRegStyles from "../styles/ModalRegister.module.css";
import { auth, db } from "../public/firebase";
import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useRef,
  useState,
} from "react";
import { addDoc, collection } from "firebase/firestore";
import { AiOutlineClose } from "react-icons/ai";

function Register({ setIsLogin, setIsModal }) {
  const userName = useRef("") as unknown as MutableRefObject<HTMLInputElement>;
  const userEmail = useRef("") as unknown as MutableRefObject<HTMLInputElement>;
  const userPass = useRef("") as unknown as MutableRefObject<HTMLInputElement>;
  const [userLoggingIn, setUserLoggingIn]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState(false);

  async function registerUser(e: any): Promise<void> {
    e.preventDefault();
    if (
      !userEmail.current.value ||
      !userPass.current.value ||
      !userName.current.value
    ) {
      return;
    }

    setUserLoggingIn(true);
    await createUserWithEmailAndPassword(
      auth,
      userEmail.current.value,
      userPass.current.value
    );
    const userInfo: any = auth.currentUser;
    userInfo.displayName = userName.current.value;
    await updateProfile(auth.currentUser, {
      displayName: userName.current.value,
    });

    try {
      await signInWithEmailAndPassword(
        auth,
        userEmail.current.value,
        userPass.current.value
      );
      addDoc(collection(db, "videos"), {
        userId: userInfo.uid,
        isCompleted: false,
      });
      setIsModal(false);
    } catch (error) {
      alert(error);
    }
  }

  function setLogin(e: any): void {
    e.preventDefault();
    setIsLogin(true);
  }

  return (
    <div>
      <form
        onSubmit={(e) => registerUser(e)}
        className={modalRegStyles.modal__wrapper}
      >
        <AiOutlineClose
          className={modalRegStyles.modal__closeButtonReg}
          onClick={() => setIsModal(false)}
        />
        <h2 className={modalRegStyles.modal__header}>Create your account</h2>
        <p style={{ color: "#74777A" }}>
          We&apos;ll have you coding in no time.
        </p>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p
            style={{
              color: "#56595D",
              fontSize: "small",
              fontWeight: "bold",
            }}
          >
            Name
          </p>
          <input
            type="text"
            placeholder="Jane Doe"
            className={modalRegStyles.modal__emailInput}
            ref={userName}
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
            Email
          </p>
          <input
            type="email"
            placeholder="Email"
            className={modalRegStyles.modal__emailInput}
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
            className={modalRegStyles.modal__passInput}
            ref={userPass}
          />
        </div>
        <p style={{ color: "#74777A", fontSize: "small", lineHeight: "1.5" }}>
          Use a unique password with a mix of letters, numbers, & symbols
        </p>
        {userLoggingIn ? (
          <button className={modalRegStyles.modal__loadingButton}>
            <div className={modalRegStyles.modal__spinner}></div>
          </button>
        ) : (
          <button
            className={modalRegStyles.modal__signInButton}
            onClick={(e) => registerUser(e)}
          >
            Get started!
          </button>
        )}

        <p style={{ color: "#717477", fontSize: "small" }}>
          By signing up, you agreed to Frontend Simplified&apos;s{" "}
          <a href="">terms of use</a> and <a href="">Privacy Policy</a>
        </p>
        <p style={{ fontSize: "small" }}>
          Already signed up?{" "}
          <a href="" style={{ color: "#6F6FFF" }} onClick={(e) => setLogin(e)}>
            Log in
          </a>
        </p>
      </form>
    </div>
  );
}

export default Register;
