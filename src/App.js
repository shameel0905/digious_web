import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { disableContextMenu } from 'disable-context-menu';
import RouteScrollToTop from "./elements/RouteScrollToTop";
import ScrollToTop from "react-scroll-to-top";
import HomeFive from "./pages/HomeFive";
import About from "./pages/About";
import Service from "./pages/Service";
import CaseStudies from "./pages/Case-Studies";
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
import { Analytics } from "@vercel/analytics/react"
import TermsAndConditions from "./pages/terms-and-conditions";
import PrivacyandPolicy from "./pages/Privacy-Policy";
import CSAutowriter from "./pages/CSAutowriter";
import BlackFriday from "./pages/BlackFriday";
import BlogDetailsInnerBlackfriday from "./components/BlogDetailsInnerBlackfriday";
import Blog_BlackFriday from "./pages/Blog_BlackFriday";
import PageTracking from "./components/PageTracking";
// import Blog_ChatGpt from "./pages/Blog_ChatGpt";
import Announcement from "./components/Announcement";

// context menu disable here
// disable right click context menu
disableContextMenu();
// end context menu here
const App = () => {
  return (
    <>
      {/* <Scroll /> */}
      <BrowserRouter>
        {/* google Analytics here */}
        <PageTracking/>   
        {/* google Analytics here */}

        <Announcement />

        {/* <CustomCursor /> */}
        <RouteScrollToTop />
        <ScrollToTop smooth color="#196164" width="15" height="15" />
        <Routes>
          <Route exact path="/" element={<HomeFive />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Service />} />
          <Route exact path="/services/graphic-designing" element={<GraphicService />} />
          <Route
            exact
            path="/services/block-chain-development"
            element={<BlockChainService />}
          />
          <Route
            exact
            path="/services/digital-marketing"
            element={<DigitalMarketingService />}
          />
          <Route
            exact
            path="/services/ecommerce-solutions"
            element={<ECommerceSolutionService />}
          />
          <Route exact path="/erp-solutions" element={<Erpsolutions />} />
          <Route
            exact
            path="/services/game-development"
            element={<GameDevelopmentService />}
          />
          <Route
            exact
            path="/services/mobile-app-development"
            element={<MobileAppService />}
          />
          <Route
            exact
            path="/services/software-development"
            element={<SoftwareDevService />}
          />
          <Route
            exact
            path="/services/software-quality-assurance"
            element={<SqaService />}
          />
          <Route
            exact
            path="/services/website-development"
            element={<WebdevServices />}
          />
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
           <Route
            exact
            path="/how-aI-is-revolutionizing-web-development"
            element={<Blog_Revolutionizing />}
          />
          <Route exact path="/what-is-nft-art" element={<BlogNFT />} />
          <Route exact path="/black-friday-website-design-offer" element={<Blog_BlackFriday />} />
          {/* <Route exact path="/chatgpt-atlas-vs-google-chrome" element={<Blog_ChatGpt />} /> */}
          <Route exact path="/pricing" element={<Pricing />} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/team-details" element={<TeamDetails />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="*" element={<Error />} />
          <Route exact path="/terms-conditions" element={<TermsAndConditions />} />
          <Route exact path="/privacy-policy" element={<PrivacyandPolicy />} />
          <Route exact path="/project-details" element={<ProjectDetails />} />
          <Route exact path="/case-studies" element={<CaseStudies />} />
          <Route exact path="/case-studies/autowriter" element={<CSAutowriter />} />
          <Route exact path="/black-friday-deal" element={<BlackFriday />} />

        </Routes>
      </BrowserRouter>
      <SpeedInsights />
      <Analytics />

    </>
  );
};

export default App;
