import { AccordionSummary, Typography } from "@mui/material";
import sidebarStyles from "../styles/Sidebar.module.css";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { useRouter, NextRouter } from "next/router";
import { BsFillPlayFill } from "react-icons/bs";
import { useState } from "react";
import Week1 from "./Week1";
import Week2 from "./Week2";
import Week3 from "./Week3";
import Week4 from "./Week4";

function Sidebar({ user, setCounter }) {
  const router: NextRouter = useRouter();
  const [expanded, setExpanded]: any = useState(false);
  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={sidebarStyles.sidebar__container}>
      <AccordionSummary
        style={{
          padding: "0",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography>
          <div className={sidebarStyles.sidebar__wrapper}>
            <div className={sidebarStyles.sidebar__startLearning}>
              <BsFillPlayFill style={{ fontSize: "40px" }} />{" "}
              <p>{user ? "Continue Learning" : "Start Learning"}</p>
            </div>
            <p style={{ paddingLeft: "8px" }}>Learning Shortcuts</p>
            <div className={sidebarStyles.sidebar__dashboard}>
              {" "}
              <AiOutlineUnorderedList style={{ fontSize: "22px" }} />
              Dashboard
            </div>
            <p style={{ paddingLeft: "8px" }}>Coding roadmap</p>
            <div className={sidebarStyles.sidebar__weeks}>
              <Week1 expanded={expanded} handleChange={handleChange} setCounter={setCounter} />
              <Week2 expanded={expanded} handleChange={handleChange} setCounter={setCounter}/>
              <Week3 expanded={expanded} handleChange={handleChange} setCounter={setCounter}/>
              <Week4 expanded={expanded} handleChange={handleChange} setCounter={setCounter}/>
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
        </Typography>
      </AccordionSummary>
    </div>
  );
}

export default Sidebar;
