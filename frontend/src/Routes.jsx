import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Navbar from "components/Header2/navbar";
import Loader from "./utils/loading";

const Portfolio = React.lazy(() => import("pages/Portfolio/porfolio"));
const User = React.lazy(() => import("pages/Profile/user"));
const NftBid = React.lazy(() => import("pages/Bid/nft-bid"));
const NftOverview = React.lazy(() => import("pages/overview/nft-overview"));
const IllustrationNft = React.lazy(() =>
  import("pages/illustration/illustration-nft")
);
const AnimationNft = React.lazy(() => import("pages/Animation/animation-nft"));
const PaintingNft = React.lazy(() => import("pages/Painting/painting-nft"));
const Nft = React.lazy(() => import("pages/Nft/nft-Index"));
const Message = React.lazy(() => import("pages/MessageBox/message"));
const DesktopEleven = React.lazy(() => import("pages/DesktopEleven"));
const ThreadBox = React.lazy(() => import("pages/ThreadBox/thread"));
const DesktopNine = React.lazy(() => import("pages/DesktopNine"));
const DesktopEight = React.lazy(() => import("pages/DesktopEight"));
const DesktopSeven = React.lazy(() => import("pages/DesktopSeven"));
const EnvForum = React.lazy(() => import("pages/EnvForum/environment"));
const EntreForum = React.lazy(() =>
  import("pages/EntreForum/entrepreneurship")
);
const EducationForum = React.lazy(() =>
  import("pages/EducationForum/education")
);
const Verification = React.lazy(() => import("pages/Verify/verification"));
const Signin = React.lazy(() => import("pages/Signin/signin"));
const Signup = React.lazy(() => import("pages/Signup/signup"));
const ComingSoon = React.lazy(() => import("./utils/comingSoon"));

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Router>
        <Routes>
          <Route path="/loading" element={<Loader />} />

          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/verification" element={<Verification />} />
          <Route
            path="/education"
            element={
              <Navbar className=" ">
                <EducationForum className="" />
              </Navbar>
            }
          />
          <Route
            path="/entrepreneurship"
            element={
              <Navbar>
                <EntreForum />
              </Navbar>
            }
          />
          <Route
            path="/environment"
            element={
              <Navbar>
                <EnvForum />
              </Navbar>
            }
          />
          <Route path="/desktopseven" element={<DesktopSeven />} />
          <Route path="/desktopeight" element={<DesktopEight />} />
          <Route path="/desktopnine" element={<DesktopNine />} />
          <Route path="/thread/:cid" element={<ThreadBox />} />
          <Route path="/desktopeleven" element={<DesktopEleven />} />
          <Route
            path="/message"
            element={
              <Navbar>
                <Message />
              </Navbar>
            }
          />
          <Route
            path="/nft-index"
            element={
              <Navbar>
                <Nft />
              </Navbar>
            }
          />
          <Route
            path="/painting-nft"
            element={
              <Navbar>
                <PaintingNft />
              </Navbar>
            }
          />
          <Route
            path="/animation-nft"
            element={
              <Navbar>
                <AnimationNft />
              </Navbar>
            }
          />
          <Route
            path="/illustration-nft"
            element={
              <Navbar>
                <IllustrationNft />
              </Navbar>
            }
          />
          <Route
            path="/nft-overview"
            element={
              <Navbar>
                <NftOverview />
              </Navbar>
            }
          />
          <Route
            path="/nft-bid"
            element={
              <Navbar>
                <NftBid />
              </Navbar>
            }
          />
          <Route
            path="/user"
            element={
              <Navbar>
                <User />
              </Navbar>
            }
          />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route
            path="/portfolio"
            element={
              <Navbar>
                <Portfolio />
              </Navbar>
            }
          />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
