import { TfiAlignJustify } from "react-icons/tfi";
import NavbarStyles from "../styles/Navbar.module.css";
import { FaCrown } from "react-icons/fa";
import { auth } from "../public/firebase.js";
import { Dispatch, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { NextRouter, useRouter } from "next/router";
import Link from "next/link";

function Navbar({ setIsModal, setIsLogin, user, setIsSidebar, isSidebar }) {
  const router: NextRouter = useRouter();
  const [, setUser]: [any, Dispatch<any>] = useState(null);

  function loginUser(): void {
    setIsModal(true);
    setIsLogin(true);
  }

  function registerUser(): void {
    setIsModal(true);
    setIsLogin(false);
  }

  function openSidebar(): void {
    if (!isSidebar) {
      setIsSidebar(true);
    } else {
      setIsSidebar(false);
    }
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user: any) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  return (
    <nav className={NavbarStyles.navbar__container}>
      <div className={NavbarStyles.navbar__subcontainer}>
        <div className={NavbarStyles.navbar__wrapper}>
          <TfiAlignJustify
            className={NavbarStyles.navbar__sidebarButton}
            onClick={() => openSidebar()}
          />
          <p className={NavbarStyles.navbar__title}>
            <span style={{ fontWeight: "900" }}> {"</>"} Frontend </span>
            Complicated
          </p>
        </div>
        <div className={NavbarStyles.navbar__links}>
          {user ? (
            <>
              <button
                className={NavbarStyles.navbar__link}
                onClick={() => router.push("/pricing")}
              >
                Job Guarantee <FaCrown style={{ color: "#fabf2a" }} />
              </button>
              {user.displayName !== null ? (
                <button
                  className={NavbarStyles.navbar__linkUser}
                  onClick={() => auth.signOut()}
                >
                  {user.displayName.charAt(0)}
                </button>
              ) : null}
            </>
          ) : (
            <div className={NavbarStyles.navbar__setup}>
              <Link href="/pricing" className={NavbarStyles.navbar__setupLink}>
                Bootcamp
              </Link>
              <span
                onClick={() => loginUser()}
                className={NavbarStyles.navbar__setupLink}
              >
                Login
              </span>
              <button
                className={NavbarStyles.navbar__registerButton}
                onClick={() => registerUser()}
              >
                Register
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
