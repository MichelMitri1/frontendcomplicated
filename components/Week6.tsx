import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import React from "react";
import { DiCss3Full } from "react-icons/di";
import { FaLock } from "react-icons/fa";
import sidebarStyles from "../styles/Sidebar.module.css";

function Week6({ expanded, handleChange, setCounter }) {
  return (
    <Accordion
      className={sidebarStyles.sidebar__week2Wrapper}
      expanded={expanded === "panel6"}
      onChange={(event, setExpanded) => handleChange(setExpanded, "panel6")}
    >
      <div className={sidebarStyles.sidebar__week2}>
        <AccordionSummary
          id="panel6-header"
          aria-controls="panel6-content"
          expandIcon={<ExpandMore />}
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          <Typography style={{ display: "flex", gap: "8px" }}>
            <DiCss3Full style={{ fontSize: "24px", color: "grey" }} /> Week 6
          </Typography>
        </AccordionSummary>
      </div>
      <AccordionDetails style={{ padding: "0" }}>
        <Typography>
          <div className={sidebarStyles.sidebar__week2Info}>
            <p className={sidebarStyles.sidebar__weekTitle}>Mini Project</p>
            <ul className={sidebarStyles.sidebar__listWrapper}>
              <li
                className={sidebarStyles.sidebar__list}
                onClick={() => setCounter(2)}
              >
                Github Setup
              </li>
              <li className={sidebarStyles.sidebar__listLocked}>
                <div className={sidebarStyles.sidebar__locked}>
                  <FaLock style={{ fontSize: "10px", color: "lightgrey" }} />
                  Build your website
                </div>
                <a href="" style={{ fontSize: "12px" }}>
                  Unlock
                </a>
              </li>
              <li className={sidebarStyles.sidebar__listLocked}>
                <div className={sidebarStyles.sidebar__locked}>
                  <FaLock style={{ fontSize: "10px", color: "lightgrey" }} />
                  Style your website
                </div>
                <a href="" style={{ fontSize: "12px" }}>
                  Unlock
                </a>
              </li>
              <li className={sidebarStyles.sidebar__listLocked}>
                <div className={sidebarStyles.sidebar__locked}>
                  <FaLock style={{ fontSize: "10px", color: "lightgrey" }} />
                  Responsiveness
                </div>
                <a href="" style={{ fontSize: "12px" }}>
                  Unlock
                </a>
              </li>
            </ul>
            <p className={sidebarStyles.sidebar__weekTitle}>Projects</p>
            <ul className={sidebarStyles.sidebar__listWrapper}>
              <li className={sidebarStyles.sidebar__listLocked}>
                <div className={sidebarStyles.sidebar__locked}>
                  <FaLock style={{ fontSize: "10px", color: "lightgrey" }} />
                  E-portfolio
                </div>
                <a href="" style={{ fontSize: "12px" }}>
                  Unlock
                </a>
              </li>
              <li className={sidebarStyles.sidebar__listLocked}>
                <div className={sidebarStyles.sidebar__locked}>
                  <FaLock style={{ fontSize: "10px", color: "lightgrey" }} />
                  E-Commerce
                </div>
                <a href="" style={{ fontSize: "12px" }}>
                  Unlock
                </a>
              </li>
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
            <p className={sidebarStyles.sidebar__weekTitle}>Bonus</p>
            <ul className={sidebarStyles.sidebar__listWrapper}>
              <li className={sidebarStyles.sidebar__list}>Make Money Coding</li>
            </ul>
          </div>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default Week6;
