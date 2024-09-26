import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteScrollToTop from "./elements/RouteScrollToTop";
import ScrollToTop from "react-scroll-to-top";
import HomeFive from "./pages/HomeFive";
import About from "./pages/About";
import Service from "./pages/Service";
import Project from "./pages/Project";
import ProjectDetails from "./pages/ProjectDetails";
import Blog from "./pages/Blog";
import Pricing from "./pages/Pricing";
import Team from "./pages/Team";
import TeamDetails from "./pages/TeamDetails";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import GraphicService from "./pages/graphic-design";
import BlockChainService from "./pages/Block-Chain-dev";
import DigitalMarketingService from "./pages/Digital-Marketing";
import ECommerceSolutionService from "./pages/E-Commerce-Solution";
import Erpsolutions from "./pages/ERP-Solutions";
import GameDevelopmentService from "./pages/Game-Development";
import MobileAppService from "./pages/Mobile-App-Development";
import SoftwareDevService from "./pages/Software-Development";
import SqaService from "./pages/Software-Quality-Assurance";
import WebdevServices from "./pages/website-development";
import ProjectDetailsGraphic from "./pages/ProjectDetailsGraphic";
import ProjectDetailsAnimation from "./pages/ProjectDetailsAnimation";
import ProjectDetailsUIUX from "./pages/ProjectDetailsUIUX";
import ProjectDetailsBranding from "./pages/ProjectDetailsBranding";
import ProjectDetailsBlockChain from "./pages/ProjectDetailsBlockChain";
import ProjectDetailsWebsiteDesign from "./pages/ProjectDetailsWebsiteDesign";
import BlogAppleId from "./pages/BlogAppleId";
import BlogSEO from "./pages/BlogSEO";
import BlogNFT from "./pages/BlogNFT";
import { SpeedInsights } from "@vercel/speed-insights/react";
import TermsAndConditions from "./pages/terms-and-conditions";
import PrivacyandPolicy from "./pages/Privacy-Policy";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";

// import CustomCursor from "./elements/CursrorCustom";
// import Scroll from "./elements/smoothScroll";

const App = () => {
  return (
    <>
    <SmoothScroll></SmoothScroll>
      {/* <Scroll /> */}
      <BrowserRouter>
        {/* <CustomCursor /> */}
        <RouteScrollToTop />
        <ScrollToTop smooth color="#196164" width="15" height="15" />
        <Routes>
          <Route exact path="/" element={<HomeFive />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Service />} />
          <Route exact path="/graphic-designing" element={<GraphicService />} />
          <Route
            exact
            path="/block-chain-development"
            element={<BlockChainService />}
          />
          <Route
            exact
            path="/digital-marketing"
            element={<DigitalMarketingService />}
          />
          <Route
            exact
            path="/ecommerce-solutions"
            element={<ECommerceSolutionService />}
          />
          <Route exact path="/erp-solutions" element={<Erpsolutions />} />
          <Route
            exact
            path="/game-development"
            element={<GameDevelopmentService />}
          />
          <Route
            exact
            path="/mobile-app-development"
            element={<MobileAppService />}
          />
          <Route
            exact
            path="/software-development"
            element={<SoftwareDevService />}
          />
          <Route
            exact
            path="/software-quality-assurance"
            element={<SqaService />}
          />
          <Route
            exact
            path="/website-development"
            element={<WebdevServices />}
          />
          <Route exact path="/" element={<Project />} />
          <Route exact path="/" element={<ProjectDetails />} />
          <Route
            exact
            path="/graphic-portfolio"
            element={<ProjectDetailsGraphic />}
          />
          <Route
            exact
            path="/animation-portfolio"
            element={<ProjectDetailsAnimation />}
          />
          <Route
            exact
            path="/ui-ux-portfolio"
            element={<ProjectDetailsUIUX />}
          />
          <Route
            exact
            path="/block-chain-portfolio"
            element={<ProjectDetailsBlockChain />}
          />
          <Route
            exact
            path="/branding-portfolio"
            element={<ProjectDetailsBranding />}
          />
          <Route
            exact
            path="/website-design-portfolio"
            element={<ProjectDetailsWebsiteDesign />}
          />
          <Route exact path="/blog" element={<Blog />} />
          <Route
            exact
            path="/if-you-have-forgotten-your-apple-id-password"
            element={<BlogAppleId />}
          />
          <Route
            exact
            path="/how-to-be-a-success-with-search-engine-optimization"
            element={<BlogSEO />}
          />
          <Route exact path="/what-is-nft-art" element={<BlogNFT />} />
          <Route exact path="/pricing" element={<Pricing />} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/team-details" element={<TeamDetails />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="*" element={<Error />} />
          <Route exact  path="/terms-conditions" element={<TermsAndConditions />} />
          <Route exact  path="/privacy-policy" element={<PrivacyandPolicy />} />
          

        </Routes>
      </BrowserRouter>
      <SpeedInsights />
    </>
  );
};

export default App;
