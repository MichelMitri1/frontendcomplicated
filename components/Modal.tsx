import modalStyles from "../styles/Modal.module.css";
import loginPic from "../assets/frontendLogin.jpg";
import { AiOutlineClose } from "react-icons/ai";
import Register from "./Register";
import Image from "next/image";
import Login from "./Login";

function Modal({
  isLogin,
  setIsLogin,
  setIsModal,
  user,
  setUser,
  auth,
  googleAuth,
}) {
  return (
    <>
      <div className={modalStyles.modal__container}>
        <div className={modalStyles.modal__subcontainer}>
          {isLogin ? (
            <Login
              isLogin={isLogin}
              setIsLogin={setIsLogin}
              user={user}
              setUser={setUser}
              auth={auth}
              googleAuth={googleAuth}
              setIsModal={setIsModal}
            />
          ) : (
            <Register
              isLogin={isLogin}
              setIsLogin={setIsLogin}
              setIsModal={setIsModal}
            />
          )}

          <figure className={modalStyles.modal__imgWrapper}>
            <Image src={loginPic} alt="" className={modalStyles.modal__img} />
            <AiOutlineClose
              className={modalStyles.modal__closeButton}
              onClick={() => setIsModal(false)}
            />
          </figure>
        </div>
      </div>
      <div className={modalStyles.backdrop}></div>
    </>
  );
}

export default Modal;
