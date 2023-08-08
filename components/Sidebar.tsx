import sidebarStyles from "../styles/Sidebar.module.css";
import { BsFillPlayFill } from "react-icons/bs";
import {
  AiOutlineUnorderedList,
  AiFillHtml5,
  AiOutlineDown,
} from "react-icons/ai";
import { DiCss3Full } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { useRouter, NextRouter } from "next/router";
import { Dispatch, SetStateAction, useState } from "react";
import { FaLock } from "react-icons/fa";
import { SiPowerpages } from "react-icons/si";

function Sidebar() {
  const router: NextRouter = useRouter();
  const [isWeek1, setIsWeek1]: [boolean, Dispatch<SetStateAction<boolean>>] =
    useState(false);
  const [isWeek2, setIsWeek2]: [boolean, Dispatch<SetStateAction<boolean>>] =
    useState(false);
  const [isWeek3, setIsWeek3]: [boolean, Dispatch<SetStateAction<boolean>>] =
    useState(false);
  const [isWeek4, setIsWeek4]: [boolean, Dispatch<SetStateAction<boolean>>] =
    useState(false);

  function openWeek1(): void {
    if (!isWeek1) {
      setIsWeek1(true);
      setIsWeek2(false);
      setIsWeek3(false);
      setIsWeek4(false);
    } else {
      setIsWeek1(false);
    }
  }
  function openWeek2(): void {
    if (!isWeek2) {
      setIsWeek1(false);
      setIsWeek2(true);
      setIsWeek3(false);
      setIsWeek4(false);
    } else {
      setIsWeek2(false);
    }
  }
  function openWeek3(): void {
    if (!isWeek3) {
      setIsWeek1(false);
      setIsWeek2(false);
      setIsWeek3(true);
      setIsWeek4(false);
    } else {
      setIsWeek3(false);
    }
  }
  function openWeek4(): void {
    if (!isWeek4) {
      setIsWeek1(false);
      setIsWeek2(false);
      setIsWeek3(false);
      setIsWeek4(true);
    } else {
      setIsWeek4(false);
    }
  }

  return (
    <div className={sidebarStyles.sidebar__container}>
      <div className={sidebarStyles.sidebar__wrapper}>
        <div className={sidebarStyles.sidebar__startLearning}>
          <BsFillPlayFill style={{ fontSize: "40px" }} /> <p>Start Learning</p>
        </div>
        <p style={{ paddingLeft: "8px" }}>Learning Shortcuts</p>
        <div className={sidebarStyles.sidebar__dashboard}>
          {" "}
          <AiOutlineUnorderedList style={{ fontSize: "22px" }} />
          Dashboard
        </div>
        <p style={{ paddingLeft: "8px" }}>Coding roadmap</p>
        <div className={sidebarStyles.sidebar__weeks}>
          <div className={sidebarStyles.sidebar__week1Wrapper}>
            <div
              className={sidebarStyles.sidebar__week1}
              onClick={() => openWeek1()}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <AiFillHtml5 style={{ fontSize: "24px", color: "grey" }} /> Week
                1
              </div>
              <p>
                {" "}
                <AiOutlineDown style={{ color: "grey" }} />
              </p>
            </div>
            {isWeek1 ? (
              <div className={sidebarStyles.sidebar__week1Info}>
                <p className={sidebarStyles.sidebar__weekTitle}>HTML</p>
                <ul className={sidebarStyles.sidebar__listWrapper}>
                  <li className={sidebarStyles.sidebar__list}>Crash Course</li>
                  <li className={sidebarStyles.sidebar__list}>
                    Best Practices
                  </li>
                </ul>
                <p className={sidebarStyles.sidebar__weekTitle}>CSS</p>
                <ul className={sidebarStyles.sidebar__listWrapper}>
                  <li className={sidebarStyles.sidebar__list}>Crash Course</li>
                  <li className={sidebarStyles.sidebar__listLocked}>
                    <div className={sidebarStyles.sidebar__locked}>
                      <FaLock
                        style={{ fontSize: "10px", color: "lightgrey" }}
                      />
                      Flexbox Layout
                    </div>
                    <a href="" style={{ fontSize: "12px" }}>
                      Unlock
                    </a>
                  </li>
                  <li className={sidebarStyles.sidebar__listLocked}>
                    <div className={sidebarStyles.sidebar__locked}>
                      <FaLock
                        style={{ fontSize: "10px", color: "lightgrey" }}
                      />
                      Best Practices
                    </div>
                    <a href="" style={{ fontSize: "12px" }}>
                      Unlock
                    </a>
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
          <div className={sidebarStyles.sidebar__week2Wrapper}>
            <div
              className={sidebarStyles.sidebar__week2}
              onClick={() => openWeek2()}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <DiCss3Full style={{ fontSize: "24px", color: "grey" }} /> Week
                2
              </div>
              <p>
                {" "}
                <AiOutlineDown style={{ color: "grey" }} />
              </p>
            </div>
            {isWeek2 ? (
              <div className={sidebarStyles.sidebar__week2Info}>
                <p className={sidebarStyles.sidebar__weekTitle}>Mini Project</p>
                <ul className={sidebarStyles.sidebar__listWrapper}>
                  <li className={sidebarStyles.sidebar__list}>Github Setup</li>
                  <li className={sidebarStyles.sidebar__list}>
                    Build your website
                  </li>
                  <li className={sidebarStyles.sidebar__list}>
                    Style your website
                  </li>
                  <li className={sidebarStyles.sidebar__list}>
                    Responsiveness
                  </li>
                </ul>
                <p className={sidebarStyles.sidebar__weekTitle}>Projects</p>
                <ul className={sidebarStyles.sidebar__listWrapper}>
                  <li className={sidebarStyles.sidebar__listLocked}>
                    <div className={sidebarStyles.sidebar__locked}>
                      <FaLock
                        style={{ fontSize: "10px", color: "lightgrey" }}
                      />
                      E-portfolio
                    </div>
                    <a href="" style={{ fontSize: "12px" }}>
                      Unlock
                    </a>
                  </li>
                  <li className={sidebarStyles.sidebar__listLocked}>
                    <div className={sidebarStyles.sidebar__locked}>
                      <FaLock
                        style={{ fontSize: "10px", color: "lightgrey" }}
                      />
                      E-Commerce
                    </div>
                    <a href="" style={{ fontSize: "12px" }}>
                      Unlock
                    </a>
                  </li>
                  <li className={sidebarStyles.sidebar__listLocked}>
                    <div className={sidebarStyles.sidebar__locked}>
                      <FaLock
                        style={{ fontSize: "10px", color: "lightgrey" }}
                      />
                      Final Project
                    </div>
                    <a href="" style={{ fontSize: "12px" }}>
                      Unlock
                    </a>
                  </li>
                </ul>
                <p className={sidebarStyles.sidebar__weekTitle}>Bonus</p>
                <ul className={sidebarStyles.sidebar__listWrapper}>
                  <li className={sidebarStyles.sidebar__list}>
                    Make Money Coding
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
          <div className={sidebarStyles.sidebar__week3Wrapper}>
            <div
              className={sidebarStyles.sidebar__week3}
              onClick={() => openWeek3()}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <SiJavascript style={{ fontSize: "24px", color: "grey" }} />{" "}
                Week 3
              </div>
              <p>
                {" "}
                <AiOutlineDown style={{ color: "grey" }} />
              </p>
            </div>

            {isWeek3 ? (
              <div className={sidebarStyles.sidebar__week3Info}>
                <p className={sidebarStyles.sidebar__weekTitle}>Theory</p>
                <ul className={sidebarStyles.sidebar__listWrapper}>
                  <li className={sidebarStyles.sidebar__listLocked}>
                    <div className={sidebarStyles.sidebar__locked}>
                      <FaLock
                        style={{ fontSize: "10px", color: "lightgrey" }}
                      />
                      How To Win
                    </div>
                    <a href="" style={{ fontSize: "12px" }}>
                      Unlock
                    </a>
                  </li>
                  <li className={sidebarStyles.sidebar__listLocked}>
                    <div className={sidebarStyles.sidebar__locked}>
                      <FaLock
                        style={{ fontSize: "10px", color: "lightgrey" }}
                      />
                      Crash Course
                    </div>
                    <a href="" style={{ fontSize: "12px" }}>
                      Unlock
                    </a>
                  </li>
                  <li className={sidebarStyles.sidebar__listLocked}>
                    <div className={sidebarStyles.sidebar__locked}>
                      <FaLock
                        style={{ fontSize: "10px", color: "lightgrey" }}
                      />
                      Promises
                    </div>
                    <a href="" style={{ fontSize: "12px" }}>
                      Unlock
                    </a>
                  </li>
                </ul>
                <p className={sidebarStyles.sidebar__weekTitle}>
                  Problem Solving
                </p>
                <ul className={sidebarStyles.sidebar__listWrapper}>
                  <li className={sidebarStyles.sidebar__list}>
                    Beginner Challenges
                  </li>
                  <li className={sidebarStyles.sidebar__list}>
                    Medius Challenges
                  </li>
                  <li className={sidebarStyles.sidebar__list}>
                    Advanced Challenges
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
          <div className={sidebarStyles.sidebar__week4Wrapper}>
            <div
              className={sidebarStyles.sidebar__week4}
              onClick={() => openWeek4()}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <SiPowerpages style={{ fontSize: "24px", color: "grey" }} /> Week
                4
              </div>
              <p>
                {" "}
                <AiOutlineDown style={{ color: "grey" }} />
              </p>
            </div>
            {isWeek4 ? (
              <div className={sidebarStyles.sidebar__week4Info}>
                <p className={sidebarStyles.sidebar__weekTitle}>
                  Guided Projects
                </p>
                <ul className={sidebarStyles.sidebar__listWrapper}>
                  <li className={sidebarStyles.sidebar__list}>
                    Advanced Portfolio
                  </li>
                  <li className={sidebarStyles.sidebar__list}>
                    E-Commerce App
                  </li>
                  <li className={sidebarStyles.sidebar__list}>
                    Final Preparation
                  </li>
                </ul>
                <p className={sidebarStyles.sidebar__weekTitle}>
                  Individual Project
                </p>
                <ul className={sidebarStyles.sidebar__listWrapper}>
                  <li className={sidebarStyles.sidebar__listLocked}>
                    <div className={sidebarStyles.sidebar__locked}>
                      <FaLock
                        style={{ fontSize: "10px", color: "lightgrey" }}
                      />
                      Final Project
                    </div>
                    <a href="" style={{ fontSize: "12px" }}>
                      Unlock
                    </a>
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
        </div>
        <div className={sidebarStyles.sidebar__jobGuaranteeWrapper}>
          <h4 className={sidebarStyles.sidebar__jobGuaranteeTitle}>
            Job Guarantee 🚀
          </h4>
          <p className={sidebarStyles.sidebar__jobGuaranteePara}>
            Land a life changing developer job in under 12 months.
          </p>
          <button
            className={sidebarStyles.sidebar__learnMoreButton}
            onClick={() => router.push("/pricing")}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
