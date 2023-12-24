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
import { mapUrlToVideoId } from "../helpers/constants";
// import { getPathnameFromVideoId } from "../pages/html";

function VideoSection({ user, setIsModal, setIsLogin, counter, setCounter }) {
  const userInfo = auth.currentUser;
  const [completedVideos, setCompletedVideos] = useState(false);
  // const [docs1, setDocs1] = useState([]);
  const [docs2, setDocs2] = useState([]);
  // let foundVideos: any,
  let foundCompleted: any, filteredVideos: any, filteredVideosId: any;
  const router: NextRouter = useRouter();
  const routerPath = router.pathname;
  let value = mapUrlToVideoId.get(routerPath);

  // async function getAllVideos() {
  //   const q = query(collection(db, "videos"));
  //   onSnapshot(q, (snapshot) =>
  //     setDocs1(snapshot.docs.map((elem) => ({ ...elem.data(), id: elem.id })))
  //   );
  // }

  async function getAllCompleted() {
    const q = query(collection(db, "completed"));
    onSnapshot(q, (snapshot) =>
      setDocs2(snapshot.docs.map((elem) => ({ ...elem.data(), id: elem.id })))
    );
  }

  let videoId = value;
  // const pathname = getPathnameFromVideoId(videoId);

  useEffect(() => {
    // getAllVideos();
    getAllCompleted();
  }, [router]);

  function nextVideo() {
    if (+counter >= +data[data.length - 1].id) {
      alert("there are no more videos");
      return;
    } else {
      setCounter(counter + 1);
    }
    // if (pathname !== null) {
    //   router.pathname = pathname;
    //   +videoId === +value + counter;
    //   console.log(videoId);
    //   console.log(`The pathname for video ID ${videoId} is ${pathname}`);
    // } else {
    //   console.log(`Video ID ${videoId} not found.`);
    // }
  }

  function previousVideo() {
    if (counter <= 1) {
      alert("There is no previous video you can watch");
      return;
    } else {
      console.log(counter);
      setCounter(counter - 1);
    }
    // if (pathname !== null) {
    //   router.pathname = pathname;
    //   +videoId == (+value - counter) * -1;
    //   console.log(videoId);
    //   console.log(`The pathname for video ID ${videoId} is ${pathname}`);
    // } else {
    //   console.log(`Video ID ${videoId} not found.`);
    // }
  }

  async function markComplete() {
    foundCompleted = docs2.find((id) => id.userId === userInfo.uid);
    let codedCompleted = foundCompleted.id;
    const completed = doc(db, "completed", codedCompleted);

    filteredVideos = data.filter((data) => +data.id === +counter);
    filteredVideosId = filteredVideos[0].id;
    console.log(filteredVideosId);

    if (!completedVideos) {
      setCompletedVideos(true);
      const newvideos = {
        [filteredVideosId]: completedVideos,
      };
      await updateDoc(completed, newvideos);
    } else {
      setCompletedVideos(false);
      const newvideos = {
        [filteredVideosId]: completedVideos,
      };
      await updateDoc(completed, newvideos);
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
              <a
                href="#"
                className={videoSectionStyles.videoSection__loginButton}
                onClick={() => setLogin()}
              >
                Login
              </a>
              <a
                href="#"
                className={videoSectionStyles.videoSection__registerButton}
                onClick={() => setRegister()}
              >
                Register
              </a>
            </div>
          </div>
        )}
        <div className={videoSectionStyles.videoSection__buttonsWrapper}>
          {user ? (
            docs2
              .filter((id) => id.userId === userInfo.uid)
              .map((doc, index) => (
                <div key={index}>
                  {doc ? (
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
          {user ? (
            data
              .filter((doc) => +doc.id === +counter)
              .map((doc, index) => {
                return (
                  <div key={index}>
                    <h1
                      className={
                        videoSectionStyles.videoSection__videoInfoTitle
                      }
                    >
                      {doc.videoDescription}
                    </h1>
                    <p
                      className={videoSectionStyles.videoSection__videoInfoPara}
                    >
                      {doc.description}
                    </p>
                    <p className={videoSectionStyles.videoSection__videoInfo}>
                      Instructor(s):{" "}
                      <span style={{ color: "#4d4dff" }}>
                        {doc.instructors}
                      </span>
                    </p>
                    <p className={videoSectionStyles.videoSection__videoInfo2}>
                      Current Attendees:
                      <span style={{ color: "#4d4dff" }}> {doc.attendees}</span>
                    </p>
                  </div>
                );
              })
          ) : (
            <div>
              <h1 className={videoSectionStyles.videoSection__videoInfoTitle}>
                ????????
              </h1>
              <p className={videoSectionStyles.videoSection__videoInfoPara}>
                ????????
              </p>
              <p className={videoSectionStyles.videoSection__videoInfo}>
                Instructor(s):{" "}
                <span style={{ color: "#4d4dff" }}>????????</span>
              </p>
              <p className={videoSectionStyles.videoSection__videoInfo2}>
                Current Attendees:
                <span style={{ color: "#4d4dff" }}>????????</span>
              </p>
            </div>
          )}
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
