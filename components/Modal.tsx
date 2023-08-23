import modalStyles from "../styles/Modal.module.css";
import loginPic from "../assets/frontendLogin.jpg";
import { AiOutlineClose } from "react-icons/ai";
import Register from "./Register";
import Image from "next/image";
import Login from "./Login";
import PassModal from "./PassModal";
import ForgotPass from "./ForgotPass";

function Modal({
  isLogin,
  setIsLogin,
  setIsModal,
  user,
  setUser,
  forgotPassword,
  setForgotPassword,
  auth,
  passwordModal,
  setPasswordModal,
  isModal,
}) {
  function setModalFalse() {
    if (passwordModal) {
      setPasswordModal(false);
    } else if (isModal) {
      setIsModal(false);
    }
  }

  return (
    <>
      <div className={modalStyles.modal__container}>
        <div className={modalStyles.modal__subcontainer}>
          {passwordModal ? (
            forgotPassword ? (
              <ForgotPass
                forgotPassword={forgotPassword}
                setForgotPassword={setForgotPassword}
              />
            ) : (
              <PassModal
                forgotPassword={forgotPassword}
                setForgotPassword={setForgotPassword}
              />
            )
          ) : isLogin ? (
            <Login
              setIsLogin={setIsLogin}
              auth={auth}
              setIsModal={setIsModal}
            />
          ) : (
            <Register setIsLogin={setIsLogin} setIsModal={setIsModal} />
          )}
          <figure className={modalStyles.modal__imgWrapper}>
            <Image src={loginPic} alt="" className={modalStyles.modal__img} />
            <AiOutlineClose
              className={modalStyles.modal__closeButton}
              onClick={() => setModalFalse()}
            />
          </figure>
        </div>
      </div>
      <div className={modalStyles.backdrop}></div>
    </>
  );
}

export default Modal;

// }: {
//   isLogin: any;
//   setIsLogin: any;
//   setIsModal: any;
//   user: any;
//   setUser: any;
//   forgotPassword: any;
//   setForgotPassword: any;
//   auth: any;
//   passwordModal: any;
//   setPasswordModal: any;
//   isModal: any;
// }
