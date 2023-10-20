// import React, { useEffect, useState } from "react";
// import VideoSection from "../components/VideoSection";
// import { auth } from "../public/firebase";
// import { onAuthStateChanged } from "firebase/auth";
// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";
// import { mapUrlToVideoId } from "../helpers/constants";
// import { useRouter } from "next/router";
// import { data } from "../data";

function Html() {
  //   const router = useRouter();
  //   const routerPath = router.pathname;
  //   const user = auth.currentUser;
  //   const [, setUser] = useState(null);
  //   const [isModal, setIsModal] = useState(false);
  //   const [isLogin, setIsLogin] = useState(false);
  //   const [isSidebar, setIsSidebar] = useState(false);

  //   useEffect(() => {
  //     onAuthStateChanged(auth, (user: any) => {
  //       if (user) {
  //         setUser(user);
  //       }
  //     });
  //   }, []);

  return (
    <>
    hello
      {/* <Navbar
        user={user}
        setIsLogin={setIsLogin}
        setIsModal={setIsModal}
        setIsSidebar={setIsSidebar}
        isSidebar={isSidebar}
        />
      <div style={{ display: "flex" }}>
        {isSidebar ? <Sidebar user={user} /> : null}
        <VideoSection
          user={user}
          setIsLogin={setIsLogin}
          setIsModal={setIsModal}
          />
      </div> */}
    </>
  );
}

export default Html;

// export function getPathnameFromVideoId(videoId: any) {
//   for (const [pathname, id] of mapUrlToVideoId.entries()) {
//     if (id === videoId) {
//       return pathname;
//     }
//   }
//   return null;
// }
