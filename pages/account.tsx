import React, {
  Dispatch,
  LegacyRef,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import accountStyles from "../styles/Account.module.css";
import Navbar from "../components/Navbar";
import { FaCrown } from "react-icons/fa";
import { NextRouter, useRouter } from "next/router";
import { auth } from "../public/firebase";
import { User, onAuthStateChanged, updateProfile } from "firebase/auth";
import Modal from "../components/Modal";
import Sidebar from "../components/Sidebar";

function Account() {
  const user: User = auth.currentUser;
  const [editorOpen, setEditorOpen] = useState(false);
  const [, setUser] = useState(null);
  const router: NextRouter = useRouter();
  const nameRef: any = useRef("") as unknown as LegacyRef<HTMLInputElement>;
  const [name, setName] = useState("");
  const [passwordModal, setPasswordModal] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [isSidebar, setIsSidebar] = useState(false);
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user: any) => {
      if (user) {
        setUser(user);
        setName(user.displayName);
      } else {
        router.push("/");
      }
    });
  }, []);

  function saveName() {
    setName(nameRef.current.value);
    user.displayName === name;
    updateProfile(user, {
      displayName: name,
    })
      .then(() => {
        window.location.reload();
        alert("Name updated!");
      })
      .catch((error) => {
        alert(error);
      });
    setEditorOpen(false);
  }

  return (
    <>
      <Navbar
        setIsModal={undefined}
        setIsLogin={undefined}
        user={user}
        setIsSidebar={setIsSidebar}
        isSidebar={isSidebar}
      />
      <div className={accountStyles.account__container}>
        {isSidebar ? <Sidebar user={user} setCounter={undefined} /> : null}
        <div className={accountStyles.account__wrapper}>
          {passwordModal ? (
            <Modal
              passwordModal={passwordModal}
              setPasswordModal={setPasswordModal}
              isLogin={undefined}
              setIsLogin={undefined}
              setIsModal={setIsModal}
              auth={undefined}
              isModal={isModal}
              forgotPassword={forgotPassword}
              setForgotPassword={setForgotPassword}
            />
          ) : null}
          <h1 className={accountStyles.account__title}>Account Details</h1>
          <div className={accountStyles.account__email}>
            <h4 style={{ marginBottom: "12px" }}>Email</h4>
            {user ? <p>{user.email}</p> : <p>Loading...</p>}
          </div>
          <div className={accountStyles.account__name}>
            <h4 style={{ marginBottom: "12px" }}>Name</h4>
            <div className={accountStyles.account__editWrapper}>
              {!editorOpen ? (
                <>
                  {user ? <p>{user.displayName}</p> : <p>Loading...</p>}
                  <button
                    className={accountStyles.account__edit}
                    onClick={() => setEditorOpen(true)}
                  >
                    Edit
                  </button>
                </>
              ) : (
                <>
                  {user ? (
                    <>
                      <input
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        className={accountStyles.account__editor}
                        ref={nameRef}
                      />
                    </>
                  ) : (
                    <input
                      type="text"
                      className={accountStyles.account__editor}
                      ref={nameRef}
                    />
                  )}

                  <div className={accountStyles.account__editorButtons}>
                    <button
                      className={accountStyles.account__edit}
                      onClick={() => setEditorOpen(false)}
                    >
                      Cancel
                    </button>
                    <button
                      className={accountStyles.account__save}
                      onClick={() => saveName()}
                    >
                      Save
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className={accountStyles.account__password}>
            <h4 style={{ marginBottom: "12px" }}>Password</h4>
            <div className={accountStyles.account__editWrapper}>
              <p>Update your password here</p>
              <button
                className={accountStyles.account__edit}
                onClick={() => setPasswordModal(true)}
              >
                Edit
              </button>
            </div>
          </div>
          <div className={accountStyles.account__planWrapper}>
            <h4 style={{ marginBottom: "12px" }}>Subscription Plan</h4>
            <div className={accountStyles.account__editWrapper}>
              <p>Frontend Simplified Free</p>
              <button
                style={{ width: "170px" }}
                className={accountStyles.account__edit}
                onClick={() => router.push("/pricing")}
              >
                <FaCrown style={{ color: "#fabf2a" }} /> Become a Pro
              </button>
            </div>
          </div>
          <div className={accountStyles.account__payment}>
            <h4 style={{ marginBottom: "12px" }}>Billing Information</h4>
            <div className={accountStyles.account__paymentUpdate}>
              <p>Update your billing and subscription information here.</p>
              <button className={accountStyles.account__edit}>Update</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
