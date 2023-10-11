import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import VideoSection from "../components/VideoSection";
import { mapUrlToVideoId } from "../helpers/constants";
import { auth } from "../public/firebase";
import Navbar from "../components/Navbar";

function React() {
  const router = useRouter();
  const routerPath = router.pathname;
  const value: any = mapUrlToVideoId.get(routerPath);
  const user = auth.currentUser;
  const [, setUser] = useState(null);
  const [isModal, setIsModal] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isSidebar, setIsSidebar] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user: any) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  return (
    <>
      <Navbar
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
      </div>
    </>
  );
}

export default React;

// export function getPathnameFromVideoId(videoId: any) {
//   for (const [pathname, id] of mapUrlToVideoId.entries()) {
//     if (id === videoId) {
//       return pathname;
//     }
//   }
//   return null;
// }
