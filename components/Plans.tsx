import planStyles from "../styles/Plans.module.css";
import { MdShield } from "react-icons/md";
import { BsDashLg } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";

function Plans() {
  return (
    <div className={planStyles.plan__container}>
      <div className={planStyles.plan__wrapper}>
        <div className={planStyles.plan__empty}></div>
        <div className={planStyles.plan__free}>
          <h3 style={{ fontWeight: "normal" }}>Free</h3>
          <p>
            <span
              style={{
                fontSize: "32px",
                fontWeight: "bolder",
                color: "#4d4dff ",
              }}
            >
              $0
            </span>{" "}
            USD
          </p>
          <button className={planStyles.plan__freeButton}>
            You Already Got It!
          </button>
        </div>
        <div className={planStyles.plan__paid}>
          <h3 style={{ fontWeight: "normal" }}>
            Bootcamp <span className={planStyles.plan__new}>NEW</span>
          </h3>
          <p style={{ fontSize: "14px" }}>FLexible plans available</p>
          <button className={planStyles.plan__paidButton}>Apply Now</button>
        </div>
      </div>
      <div className={planStyles.plan__comparisonWrapper}>
        <div className={planStyles.plan__comparison}>
          <p className={planStyles.plan__para}>
            <MdShield /> 100% Money-Back Job Guarantee
          </p>
          <div style={{ textAlign: "center" }}>
            <BsDashLg style={{ fontSize: "24px", color: "grey" }} />
          </div>
          <div style={{ textAlign: "center" }}>
            <AiOutlineCheck style={{ color: "#4d4dff", fontSize: "24px" }} />
          </div>
        </div>
        <div className={planStyles.plan__comparison}>
          <p className={planStyles.plan__para}>Crash Courses</p>
          <div
            style={{
              textAlign: "center",
              color: "#4d4dff",
              fontWeight: "bolder",
            }}
          >
            Basic
          </div>
          <div style={{ textAlign: "center" }}>
            <AiOutlineCheck style={{ color: "#4d4dff", fontSize: "24px" }} />
          </div>
        </div>
        <div className={planStyles.plan__comparison}>
          <p className={planStyles.plan__para}>Structured Coding Job Roadmap</p>
          <div style={{ textAlign: "center", color: "grey" }}>
            <BsDashLg style={{ fontSize: "24px" }} />
          </div>
          <div style={{ textAlign: "center" }}>
            <AiOutlineCheck style={{ color: "#4d4dff", fontSize: "24px" }} />
          </div>
        </div>
        <div className={planStyles.plan__comparison}>
          <p className={planStyles.plan__para}>Real-World Project Tutorials</p>
          <div style={{ textAlign: "center" }}>
            <BsDashLg style={{ fontSize: "24px", color: "grey" }} />
          </div>
          <div
            style={{
              textAlign: "center",
              color: "#4d4dff",
              fontWeight: "bolder",
            }}
          >
            10+
          </div>
        </div>
        <div className={planStyles.plan__comparison}>
          <p className={planStyles.plan__para}>Practice Interview Questions</p>
          <div style={{ textAlign: "center" }}>
            <BsDashLg style={{ fontSize: "24px", color: "grey" }} />
          </div>
          <div
            style={{
              textAlign: "center",
              color: "#4d4dff",
              fontWeight: "bolder",
            }}
          >
            60+
          </div>
        </div>
        <div className={planStyles.plan__comparison}>
          <p className={planStyles.plan__para}>Chat Support</p>
          <div style={{ textAlign: "center" }}>
            <BsDashLg style={{ fontSize: "24px", color: "grey" }} />
          </div>
          <div
            style={{
              textAlign: "center",
              color: "#4d4dff",
              fontWeight: "bolder",
            }}
          >
            Priority
          </div>
        </div>
        <div className={planStyles.plan__comparison}>
          <p className={planStyles.plan__para}>
            Lifetime access to our learning platform
          </p>
          <div style={{ textAlign: "center" }}>
            <BsDashLg style={{ fontSize: "24px", color: "grey" }} />
          </div>
          <div style={{ textAlign: "center" }}>
            <AiOutlineCheck style={{ color: "#4d4dff", fontSize: "24px" }} />
          </div>
        </div>
        <div className={planStyles.plan__comparison}>
          <p className={planStyles.plan__para}>1-on-1 Mentorship</p>
          <div style={{ textAlign: "center" }}>
            <BsDashLg style={{ fontSize: "24px", color: "grey" }} />
          </div>
          <div style={{ textAlign: "center" }}>
            <AiOutlineCheck style={{ color: "#4d4dff", fontSize: "24px" }} />
          </div>
        </div>
        <div className={planStyles.plan__comparison}>
          <p className={planStyles.plan__para}>
            Weekly live Q&As with expert instructors
          </p>
          <div style={{ textAlign: "center" }}>
            <BsDashLg style={{ fontSize: "24px", color: "grey" }} />
          </div>
          <div style={{ textAlign: "center" }}>
            <AiOutlineCheck style={{ color: "#4d4dff", fontSize: "24px" }} />
          </div>
        </div>
        <div className={planStyles.plan__comparison}>
          <p className={planStyles.plan__para}>Code Reviews</p>
          <div style={{ textAlign: "center" }}>
            <BsDashLg style={{ fontSize: "24px", color: "grey" }} />
          </div>
          <div style={{ textAlign: "center" }}>
            <AiOutlineCheck style={{ color: "#4d4dff", fontSize: "24px" }} />
          </div>
        </div>
        <div className={planStyles.plan__comparison}>
          <p className={planStyles.plan__para}>Portfolio Review</p>
          <div style={{ textAlign: "center" }}>
            <BsDashLg style={{ fontSize: "24px", color: "grey" }} />
          </div>
          <div style={{ textAlign: "center" }}>
            <AiOutlineCheck style={{ color: "#4d4dff", fontSize: "24px" }} />
          </div>
        </div>
        <div className={planStyles.plan__comparison}>
          <p className={planStyles.plan__para}>
            Resume, LinkedIn & Cover Letter Review
          </p>
          <div style={{ textAlign: "center" }}>
            <BsDashLg style={{ fontSize: "24px", color: "grey" }} />
          </div>
          <div style={{ textAlign: "center" }}>
            <AiOutlineCheck style={{ color: "#4d4dff", fontSize: "24px" }} />
          </div>
        </div>
        <div className={planStyles.plan__comparison}>
          <p className={planStyles.plan__para}>Exclusive Portfolio</p>
          <div style={{ textAlign: "center" }}>
            <BsDashLg style={{ fontSize: "24px", color: "grey" }} />
          </div>
          <div style={{ textAlign: "center" }}>
            <AiOutlineCheck style={{ color: "#4d4dff", fontSize: "24px" }} />
          </div>
        </div>
        <div className={planStyles.plan__comparison}>
          <p className={planStyles.plan__para}>Advanced Virtual Internship</p>
          <div style={{ textAlign: "center" }}>
            <BsDashLg style={{ fontSize: "24px", color: "grey" }} />
          </div>
          <div style={{ textAlign: "center" }}>
            <AiOutlineCheck style={{ color: "#4d4dff", fontSize: "24px" }} />
          </div>
        </div>
        <div className={planStyles.plan__comparison}>
          <p className={planStyles.plan__para}>Carreer Coaching</p>
          <div style={{ textAlign: "center" }}>
            <BsDashLg style={{ fontSize: "24px", color: "grey" }} />
          </div>
          <div style={{ textAlign: "center" }}>
            <AiOutlineCheck style={{ color: "#4d4dff", fontSize: "24px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plans;
