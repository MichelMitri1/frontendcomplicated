import { useEffect, useState } from "react";
import videoSectionStyles from "../styles/VideoSection.module.css";
import { AiOutlineRight } from "react-icons/ai";
import { BsDiscord, BsFillPlayFill } from "react-icons/bs";
import { NextRouter, useRouter } from "next/router";
import { auth, db } from "../public/firebase";
import {
  collection,
  doc,
  onSnapshot,
  query,
  updateDoc,
} from "firebase/firestore";
import { BiLockAlt } from "react-icons/bi";
import { AiOutlineCheck } from "react-icons/ai";
import Link from "next/link";
import { data } from "../data.js";

function VideoSection({ user, setIsModal, setIsLogin }) {
  const userInfo = auth.currentUser;
  const [completed, setCompleted] = useState(false);
  const [docs, setDocs] = useState([]);
  let found: any;
  const [isLoadingButton, setIsLoadingButton] = useState(false);
  const [counter, setCounter] = useState(1);

  async function getAllVideos() {
    const q = query(collection(db, "videos"));
    onSnapshot(q, (snapshot) =>
      setDocs(snapshot.docs.map((elem) => ({ ...elem.data(), id: elem.id })))
    );
  }

  useEffect(() => {
    getAllVideos();
  }, []);

  function nextVideo() {
    if (counter >= data[data.length - 1].id) {
      alert("there are no more videos");
      return;
    } else {
      setCounter(counter + 1);
    }
  }

  function previousVideo() {
    if (counter <= 1) {
      alert("There is no previous video you can watch");
      return;
    } else {
      setCounter(counter - 1);
    }
  }

  async function markComplete() {
    setIsLoadingButton(false);
    found = docs.find((id) => id.userId === userInfo.uid);
    let codedId = found.id;
    const markCompleted = doc(db, "videos", codedId);
    if (!completed) {
      setCompleted(true);
      const newMarkCompleted = {
        isCompleted: completed,
      };
      await updateDoc(markCompleted, newMarkCompleted);
    } else {
      setCompleted(false);
      const newMarkCompleted = {
        isCompleted: completed,
      };
      await updateDoc(markCompleted, newMarkCompleted);
    }
  }

  function setLogin() {
    setIsModal(true);
    setIsLogin(true);
  }

  function setRegister() {
    setIsModal(true);
    setIsLogin(false);
  }
  const router: NextRouter = useRouter();
  return (
    <div className={videoSectionStyles.videoSection__container}>
      <div className={videoSectionStyles.videoSection__videoWrapper}>
        {counter === 1 ? null : (
          <button
            className={videoSectionStyles.videoSection__backButton}
            onClick={() => previousVideo()}
          >
            Back
          </button>
        )}
        {user ? (
          data
            ?.filter((data) => +data.id === +counter)
            .map((data: any, index: any) => {
              return (
                <iframe
                  key={index}
                  src={data.src}
                  width="100%"
                  height="726px"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title={data.title}
                  className={videoSectionStyles.videoSection__video}
                ></iframe>
              );
            })
        ) : (
          <div className={videoSectionStyles.videoSection__videoNone}>
            <BiLockAlt className={videoSectionStyles.videoSection__videoLock} />
            <h1 className={videoSectionStyles.videoSection__videoLockedTitle}>
              Unlock this video
            </h1>
            <p className={videoSectionStyles.videoSection__videoLockedPara}>
              Log into your account to watch the this video!
            </p>
            <div
              className={videoSectionStyles.videoSection__videoButtonsWrapper}
            >
              <button
                className={videoSectionStyles.videoSection__loginButton}
                onClick={() => setLogin()}
              >
                Login
              </button>
              <button
                className={videoSectionStyles.videoSection__registerButton}
                onClick={() => setRegister()}
              >
                Register
              </button>
            </div>
          </div>
        )}
        <div className={videoSectionStyles.videoSection__buttonsWrapper}>
          {user ? (
            docs
              .filter((id) => id.userId === userInfo.uid)
              .map((doc, index) => (
                <div key={index}>
                  {doc.isCompleted ? (
                    <button
                      onClick={() => markComplete()}
                      className={
                        videoSectionStyles.videoSection__lessonCompleted
                      }
                    >
                      Lesson Completed{" "}
                      <AiOutlineCheck style={{ fontWeight: "bolder" }} />
                    </button>
                  ) : (
                    <button
                      className={videoSectionStyles.videoSection__button1}
                      onClick={() => markComplete()}
                    >
                      Mark Complete
                    </button>
                  )}
                </div>
              ))
          ) : (
            <button className={videoSectionStyles.videoSection__button1}>
              Mark Complete
            </button>
          )}

          <button
            className={videoSectionStyles.videoSection__button2}
            onClick={() => nextVideo()}
          >
            Next Lesson <AiOutlineRight />
          </button>
        </div>
        <div className={videoSectionStyles.videoSection__videoInfoWrapper}>
          {data
            .filter((doc) => +doc.id === +counter)
            .map((doc, index) => {
              return (
                <div key={index}>
                  <h1
                    className={videoSectionStyles.videoSection__videoInfoTitle}
                  >
                    {doc.videoDescription}
                  </h1>
                  <p className={videoSectionStyles.videoSection__videoInfoPara}>
                    {doc.description}
                  </p>
                  <p className={videoSectionStyles.videoSection__videoInfo}>
                    Instructor(s):{" "}
                    <span style={{ color: "#4d4dff" }}>{doc.instructors}</span>
                  </p>
                  <p className={videoSectionStyles.videoSection__videoInfo2}>
                    Current Attendees:
                    <span style={{ color: "#4d4dff" }}> {doc.attendees}</span>
                  </p>
                </div>
              );
            })}
          <button
            className={videoSectionStyles.videoSection__bootcampButton}
            onClick={() => router.push("/pricing")}
          >
            Start Job Guarantee Bootcamp 🚀
          </button>
          <Link
            href="/"
            className={videoSectionStyles.videoSection__courseReviews}
          >
            <BsFillPlayFill style={{ transform: "scale(2)" }} /> Watch Some
            Course Reviews
          </Link>
          <h5>ADDITIONAL RESOURCES</h5>
          <div className={videoSectionStyles.videoSection__resourcesContainer}>
            <button
              className={videoSectionStyles.videoSection__resourcesWrapper}
            >
              <span
                style={{
                  width: "100%",
                  maxWidth: "60px",
                  height: "60px",
                  border: "1px solid lightgray",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bolder",
                }}
              >
                {"</>"}
              </span>
              <div
                className={videoSectionStyles.videoSection__resourseInfoWrapper}
              >
                <p
                  className={videoSectionStyles.videoSection__resourceInfoTitle}
                >
                  Download Assets
                </p>
                <p
                  className={videoSectionStyles.videoSection__resourceInfoPara}
                >
                  Download assets and/or source code used in this video to speed
                  up your development process.
                </p>
              </div>
            </button>
            <button
              className={videoSectionStyles.videoSection__resourcesWrapper}
            >
              <span
                style={{
                  color: "#4d4dff",
                  width: "100%",
                  maxWidth: "60px",
                  height: "60px",
                  border: "1px solid lightgray",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <BsDiscord style={{ fontSize: "25px" }} />
              </span>
              <div
                className={videoSectionStyles.videoSection__resourseInfoWrapper}
              >
                <p
                  className={
                    videoSectionStyles.videoSection__resourceInfoTitle2
                  }
                >
                  Discord Community
                </p>
                <p
                  className={videoSectionStyles.videoSection__resourceInfoPara}
                >
                  Netword in our community of over 40,000 people, including
                  engineers working at top tech companies.
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoSection;

// <iframe
//   src="https://player.vimeo.com/video/854596225?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
//   width="100%"
//   height="726px"
//   frameBorder="0"
//   allow="autoplay; fullscreen; picture-in-picture"
//   className={videoSectionStyles.videoSection__video}
//   title="dont buy no weed from the gas station"
// ></iframe>

// <iframe
//   src="https://player.vimeo.com/video/833236557?h=39bef521f3&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
//   width="100%"
//   height="726px"
//   frameBorder="0"
//   allow="autoplay; fullscreen; picture-in-picture"
//   allowFullScreen
//   title="Biggest Miss"
//   className={videoSectionStyles.videoSection__video}
// ></iframe>
