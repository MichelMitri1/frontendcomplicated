import { Dispatch, SetStateAction, useState } from "react";
import Modal from "../components/Modal";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import { auth } from "../public/firebase";
import { GoogleAuthProvider } from "firebase/auth";
import { AuthStateHook, useAuthState } from "react-firebase-hooks/auth";
import VideoSection from "../components/VideoSection";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const [isModal, setIsModal]: [boolean, Dispatch<SetStateAction<boolean>>] =
    useState(false);
  const [isSidebar, setIsSidebar]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState(false);
  const [isLogin, setIsLogin]: any = useState(true);
  const [user, setUser]: AuthStateHook = useAuthState(auth);
  const [passwordModal, setPasswordModal] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const googleAuth: GoogleAuthProvider = new GoogleAuthProvider();
  const [counter, setCounter] = useState(1);

  if (isModal) {
    if (typeof document !== "undefined") {
      document.body.classList.add("stop-scrolling");
    }
  } else {
    if (typeof document !== "undefined") {
      document.body.classList.remove("stop-scrolling");
    }
  }

  return (
    <div className={styles.container}>
      <Navbar
        setIsModal={setIsModal}
        setIsLogin={setIsLogin}
        user={user}
        setIsSidebar={setIsSidebar}
        isSidebar={isSidebar}
      />
      <div className={!isSidebar ? styles.wrapper1 : styles.wrapper2}>
        {isModal ? (
          <Modal
            isLogin={isLogin}
            passwordModal={passwordModal}
            setPasswordModal={setPasswordModal}
            forgotPassword={forgotPassword}
            setForgotPassword={setForgotPassword}
            setIsLogin={setIsLogin}
            setIsModal={setIsModal}
            isModal={isModal}
            auth={auth}
          />
        ) : null}
        {isSidebar ? <Sidebar user={user} setCounter={setCounter} /> : null}
        <VideoSection
          user={user}
          setIsModal={setIsModal}
          setIsLogin={setIsLogin}
          counter={counter}
          setCounter={setCounter}
        />
      </div>
      {/* </div> */}
    </div>
  );
}
