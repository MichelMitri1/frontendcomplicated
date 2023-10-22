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
import { SiPowerpages } from "react-icons/si";

function Week4({ expanded, handleChange, setCounter }) {
  return (
    <Accordion
      className={sidebarStyles.sidebar__week4Wrapper}
      expanded={expanded === "panel4"}
      onChange={(event, setExpanded) => handleChange(setExpanded, "panel4")}
    >
      <div className={sidebarStyles.sidebar__week4}>
        <AccordionSummary
          id="panel4-header"
          aria-controls="panel4-content"
          expandIcon={<ExpandMore />}
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          <Typography style={{ display: "flex", gap: "8px" }}>
            <SiPowerpages style={{ fontSize: "24px", color: "grey" }} /> Week 4
          </Typography>
        </AccordionSummary>
      </div>
      <AccordionDetails style={{ padding: "0" }}>
        <Typography>
          <div className={sidebarStyles.sidebar__week4Info}>
            <p className={sidebarStyles.sidebar__weekTitle}>Guided Projects</p>
            <ul className={sidebarStyles.sidebar__listWrapper}>
              <li className={sidebarStyles.sidebar__listLocked}>
                <div className={sidebarStyles.sidebar__locked}>
                  <FaLock style={{ fontSize: "10px", color: "lightgrey" }} />
                  Advanced portfolio
                </div>
                <a href="" style={{ fontSize: "12px" }}>
                  Unlock
                </a>
              </li>
              <li className={sidebarStyles.sidebar__listLocked}>
                <div className={sidebarStyles.sidebar__locked}>
                  <FaLock style={{ fontSize: "10px", color: "lightgrey" }} />
                  E-Commerce app
                </div>
                <a href="" style={{ fontSize: "12px" }}>
                  Unlock
                </a>
              </li>
              <li
                className={sidebarStyles.sidebar__list}
                onClick={() => setCounter(4)}
              >
                Final Preparation
              </li>
            </ul>
            <p className={sidebarStyles.sidebar__weekTitle}>
              Individual Project
            </p>
            <ul className={sidebarStyles.sidebar__listWrapper}>
              <li className={sidebarStyles.sidebar__listLocked}>
                <div className={sidebarStyles.sidebar__locked}>
                  <FaLock style={{ fontSize: "10px", color: "lightgrey" }} />
                  Final Project
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

export default Week4;
