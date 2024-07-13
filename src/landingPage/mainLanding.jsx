import "./mainLanding.css";
import MainNavigationBars from "./components/MainNavigationBar";
import Home from "./components/HomeLand";
import ProfileCards from "./components/ProfileCard";
import FooterLands from "./components/FooterPage";
import DeskripsiSingkats from "./components/DeskripsiSingkat";

export const MainLanding = () => {
    return (
      <>
        <MainNavigationBars />
        <Home />
        <DeskripsiSingkats />
        <ProfileCards />
        <FooterLands />
      </>
    );
};
  