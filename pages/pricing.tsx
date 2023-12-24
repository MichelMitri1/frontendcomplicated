import { MdShield } from "react-icons/md";
import pricingStyles from "../styles/Pricing.module.css";
import { AiOutlineCheck, AiOutlineDown } from "react-icons/ai";
import { useRouter, NextRouter } from "next/router";
import Plans from "../components/Plans";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { auth } from "../public/firebase";
import { onAuthStateChanged } from "firebase/auth";
import Register from "../components/Register";

function Pricing() {
  const [user, setUser] = useState(null);
  const router: NextRouter = useRouter();
  const [planOpened, setPlanOpened]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState(false);

  const [isModal, setIsModal] = useState(false);

  function registerUser() {
    router.push("/");
    setIsModal(true);
  }

  function openPlan() {
    if (!planOpened) {
      setPlanOpened(true);
    } else {
      setPlanOpened(false);
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
    <div className={pricingStyles.pricing__container}>
      <nav
        className={pricingStyles.pricing__navbarLogo}
        onClick={() => router.push("/")}
      >
        {" "}
        <span style={{ fontWeight: "bolder" }}>{"</>"} Frontend</span>{" "}
        Complicated
      </nav>
      <div className={pricingStyles.pricing__wrapper}>
        <h1 className={pricingStyles.pricing__title}>
          Crush your coding goals with our results-driven plans
        </h1>
        <div className={pricingStyles.pricing__plansWrapper}>
          <div className={pricingStyles.pricing__plan1}>
            <div className={pricingStyles.pricing__plan1TopCard}>
              <h2 className={pricingStyles.pricing__plan1Title}>Free</h2>
              <p className={pricingStyles.pricing__plan1Para}>
                Ideal for those who want to learn the basics of programming. You
                will have a solid foundation after all crash courses.
              </p>
              {user ? (
                <button className={pricingStyles.pricing__plan1Button}>
                  You Already Got it!
                </button>
              ) : (
                <button
                  className={pricingStyles.pricing__plan2Button}
                  onClick={() => registerUser()}  
                >
                  Get it now!
                </button>
              )}
            </div>
            <div className={pricingStyles.pricing__inclusionsWrapper}>
              <h2 className={pricingStyles.pricing__inclusionTitle}>
                Inclusions
              </h2>
              <p className={pricingStyles.pricing__inclusionPara}>
                <AiOutlineCheck
                  style={{ color: "4d4dff", fontSize: "large" }}
                />{" "}
                Basic Crash Courses
              </p>
              <p className={pricingStyles.pricing__inclusionPara}>
                <AiOutlineCheck
                  style={{ color: "4d4dff", fontSize: "large" }}
                />{" "}
                Basic Community Access
              </p>
            </div>
          </div>
          <div className={pricingStyles.pricing__plan2Wrapper}>
            <div className={pricingStyles.pricing__moneyBackGuarantee}>
              <p>
                {" "}
                <MdShield /> Money-Back Job Guarantee{" "}
                <span className={pricingStyles.pricing__new}>NEW</span>
              </p>
            </div>
            <div className={pricingStyles.pricing__plan2}>
              <div className={pricingStyles.pricing__plan2TopCard}>
                <h2 className={pricingStyles.pricing__plan2Title}>
                  Bootcamp 🚀
                </h2>
                <p className={pricingStyles.pricing__plan2Para}>
                  Ideal for those who want to fast-track their coding career.
                  Land a developer job in under 12 months or get a full refund.
                </p>
                <button className={pricingStyles.pricing__plan2Button}>
                  Apply Now
                </button>
              </div>
              <div className={pricingStyles.pricing__inclusionsWrapper}>
                <h2 className={pricingStyles.pricing__inclusionTitle}>
                  Inclusions
                </h2>
                <p className={pricingStyles.pricing__inclusionPara}>
                  <AiOutlineCheck
                    style={{ color: "4d4dff", fontSize: "large" }}
                  />{" "}
                  <span style={{ fontWeight: "bold" }}>
                    Unlock all course content
                  </span>
                </p>
                <p className={pricingStyles.pricing__inclusionPara}>
                  <AiOutlineCheck
                    style={{ color: "4d4dff", fontSize: "large" }}
                  />{" "}
                  Weekly QnA Calls
                </p>
                <p className={pricingStyles.pricing__inclusionPara}>
                  <AiOutlineCheck
                    style={{ color: "4d4dff", fontSize: "large" }}
                  />{" "}
                  1-on-1 Coaching
                </p>
                <p className={pricingStyles.pricing__inclusionPara}>
                  <AiOutlineCheck
                    style={{ color: "4d4dff", fontSize: "large" }}
                  />{" "}
                  Unlimited Chat Support
                </p>
                <p className={pricingStyles.pricing__inclusionPara}>
                  <AiOutlineCheck
                    style={{ color: "4d4dff", fontSize: "large" }}
                  />{" "}
                  Code Reviews
                </p>
                <p className={pricingStyles.pricing__inclusionPara}>
                  <AiOutlineCheck
                    style={{ color: "4d4dff", fontSize: "large" }}
                  />{" "}
                  Portfolio/Resume Reviews
                </p>
                <p className={pricingStyles.pricing__inclusionPara}>
                  <AiOutlineCheck
                    style={{ color: "4d4dff", fontSize: "large" }}
                  />{" "}
                  Exclusive E-Portfolio
                </p>
                <p className={pricingStyles.pricing__inclusionPara}>
                  <AiOutlineCheck
                    style={{ color: "4d4dff", fontSize: "large" }}
                  />{" "}
                  Advanced Virtual Internship
                </p>
                <p className={pricingStyles.pricing__inclusionPara}>
                  <AiOutlineCheck
                    style={{ color: "4d4dff", fontSize: "large" }}
                  />{" "}
                  Carreer Coaching
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={pricingStyles.pricing__plansContainer}>
          <div
            className={pricingStyles.pricing__comparePlans}
            onClick={() => openPlan()}
          >
            Compare Plans <AiOutlineDown />
          </div>
          {planOpened ? <Plans /> : null}
        </div>
      </div>
      <svg
        width="581"
        height="372"
        viewBox="0 0 581 372"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={pricingStyles.pricing__blob}
      >
        <path
          d="M313.537-347.123L674.859 17.561c57.868 58.406 57.432 152.666-.975 210.534L572.853 328.196c-58.407 57.868-152.666 57.432-210.535-.975L.996-37.463l312.541-309.66z"
          fill="#4D4DFF"
          fillOpacity=".2"
        >
          {" "}
        </path>
      </svg>
      <div style={{ display: "none" }}>
        <Register setIsLogin={undefined} setIsModal={setIsModal} />
      </div>
    </div>
  );
}

export default Pricing;
