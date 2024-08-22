import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteScrollToTop from "./elements/RouteScrollToTop";
import ScrollToTop from "react-scroll-to-top";
import IndexPage from "./pages/IndexPage";
import HomeOne from "./pages/HomeOne";
import HomeTwo from "./pages/HomeTwo";
import HomeThree from "./pages/HomeThree";
import HomeFour from "./pages/HomeFour";
import HomeFive from "./pages/HomeFive";
import About from "./pages/About";
import Service from "./pages/Service";
import Project from "./pages/Project";
import ProjectDetails from "./pages/ProjectDetails";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
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

const App = () => {
  return (
    <>
      <BrowserRouter>
        <RouteScrollToTop />
        <ScrollToTop smooth color="#196164" width="15" height="15" />
        <Routes>
          <Route exact path="/" element={<HomeFive/>} />
          <Route exact path="/home-2" element={<HomeTwo />} />
          <Route exact path="/home-3" element={<HomeThree />} />
          <Route exact path="/home-4" element={<HomeFour />} />
          <Route exact path="/home-1" element={<HomeOne />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/service" element={<Service />} />
          <Route exact path="/graphic-designing" element={<GraphicService />} />
          <Route exact path="/block-chain-development" element={<BlockChainService />} />
          <Route exact path="/digital-marketing" element={<DigitalMarketingService />} />
          <Route exact path="/ecommerce-solutions" element={<ECommerceSolutionService />} />
          <Route exact path="/erp-solutions" element={<Erpsolutions />} />
          <Route exact path="/game-development" element={<GameDevelopmentService />} />
          <Route exact path="/mobile-app-development" element={<MobileAppService />} />
          <Route exact path="/software-development" element={<SoftwareDevService />} />
          <Route exact path="/software-quality-assurance" element={<SqaService />} />
          <Route exact path="/website-development" element={<WebdevServices />} />
          <Route exact path="/project" element={<Project />} />
          <Route exact path="/project-details" element={<ProjectDetails />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/blog-details" element={<BlogDetails />} />
          <Route exact path="/pricing" element={<Pricing />} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/team-details" element={<TeamDetails />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
