import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { FaLock } from "react-icons/fa";
import sidebarStyles from "../styles/Sidebar.module.css";

function Week1({ expanded, handleChange, setCounter }) {
  return (
    <Accordion
      className={sidebarStyles.sidebar__week1Wrapper}
      expanded={expanded === "panel1"}
      onChange={(event, setExpanded) => handleChange(setExpanded, "panel1")}
    >
      <div className={sidebarStyles.sidebar__week1}>
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMore />}
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          <Typography style={{ display: "flex", gap: "8px" }}>
            <AiFillHtml5 style={{ fontSize: "24px", color: "grey" }} /> Week 1
          </Typography>
        </AccordionSummary>
      </div>
      <AccordionDetails style={{ padding: "0" }}>
        <Typography>
          <p className={sidebarStyles.sidebar__weekTitle}>HTML</p>
          <ul className={sidebarStyles.sidebar__listWrapper}>
            <li className={sidebarStyles.sidebar__list} onClick={() => setCounter(1)}>Crash Course</li>
            <li className={sidebarStyles.sidebar__listLocked}>
              <div className={sidebarStyles.sidebar__locked}>
                <FaLock style={{ fontSize: "10px", color: "lightgrey" }} />
                Best practices
              </div>
              <a href="" style={{ fontSize: "12px" }}>
                Unlock
              </a>
            </li>
          </ul>
          <p className={sidebarStyles.sidebar__weekTitle}>CSS</p>
          <ul className={sidebarStyles.sidebar__listWrapper}>
            <li className={sidebarStyles.sidebar__listLocked}>
              <div className={sidebarStyles.sidebar__locked}>
                <FaLock style={{ fontSize: "10px", color: "lightgrey" }} />
                Crash course
              </div>
              <a href="" style={{ fontSize: "12px" }}>
                Unlock
              </a>
            </li>
            <li className={sidebarStyles.sidebar__listLocked}>
              <div className={sidebarStyles.sidebar__locked}>
                <FaLock style={{ fontSize: "10px", color: "lightgrey" }} />
                Flexbox Layout
              </div>
              <a href="" style={{ fontSize: "12px" }}>
                Unlock
              </a>
            </li>
            <li className={sidebarStyles.sidebar__listLocked}>
              <div className={sidebarStyles.sidebar__locked}>
                <FaLock style={{ fontSize: "10px", color: "lightgrey" }} />
                Best Practices
              </div>
              <a href="" style={{ fontSize: "12px" }}>
                Unlock
              </a>
            </li>
          </ul>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default Week1;
