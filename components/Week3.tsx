import React from "react";
import sidebarStyles from "../styles/Sidebar.module.css";
import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import { FaLock } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

function Week3({ expanded, handleChange, setCounter }) {
  return (
    <Accordion
      className={sidebarStyles.sidebar__week3Wrapper}
      expanded={expanded === "panel3"}
      onChange={(event, setExpanded) => handleChange(setExpanded, "panel3")}
    >
      <div className={sidebarStyles.sidebar__week3}>
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-content"
          expandIcon={<ExpandMore />}
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          <Typography style={{ display: "flex", gap: "8px" }}>
            <SiJavascript style={{ fontSize: "24px", color: "grey" }} /> Week 3
          </Typography>
        </AccordionSummary>
      </div>
      <AccordionDetails style={{ padding: "0" }}>
        <Typography>
          <div className={sidebarStyles.sidebar__week3Info}>
            <p className={sidebarStyles.sidebar__weekTitle}>Theory</p>
            <ul className={sidebarStyles.sidebar__listWrapper}>
              <li className={sidebarStyles.sidebar__listLocked}>
                <div className={sidebarStyles.sidebar__locked}>
                  <FaLock style={{ fontSize: "10px", color: "lightgrey" }} />
                  How To Win
                </div>
                <a href="" style={{ fontSize: "12px" }}>
                  Unlock
                </a>
              </li>
              <li className={sidebarStyles.sidebar__list} onClick={() => setCounter(3)}>
                Crash Course
              </li>
              <li className={sidebarStyles.sidebar__listLocked}>
                <div className={sidebarStyles.sidebar__locked}>
                  <FaLock style={{ fontSize: "10px", color: "lightgrey" }} />
                  Promises
                </div>
                <a href="" style={{ fontSize: "12px" }}>
                  Unlock
                </a>
              </li>
            </ul>
            <p className={sidebarStyles.sidebar__weekTitle}>Problem Solving</p>
            <ul className={sidebarStyles.sidebar__listWrapper}>
            <li className={sidebarStyles.sidebar__listLocked}>
                <div className={sidebarStyles.sidebar__locked}>
                  <FaLock style={{ fontSize: "10px", color: "lightgrey" }} />
                  Beginner challenges
                </div>
                <a href="" style={{ fontSize: "12px" }}>
                  Unlock
                </a>
              </li>
              <li className={sidebarStyles.sidebar__listLocked}>
                <div className={sidebarStyles.sidebar__locked}>
                  <FaLock style={{ fontSize: "10px", color: "lightgrey" }} />
                  Medium challenges
                </div>
                <a href="" style={{ fontSize: "12px" }}>
                  Unlock
                </a>
              </li>
              <li className={sidebarStyles.sidebar__listLocked}>
                <div className={sidebarStyles.sidebar__locked}>
                  <FaLock style={{ fontSize: "10px", color: "lightgrey" }} />
                  Advanced challenges
                </div>
                <a href="" style={{ fontSize: "12px" }}>
                  Unlock
                </a>
              </li>
            </ul>
          </div>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default Week3;
