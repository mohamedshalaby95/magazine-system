import Header from "../header/Header";
import { theme } from "../../theme/palette";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "../../assets/background.png";
import Footer from "../footer/Footer";
export default function Home() {
  const Home = styled(Box)(({ theme }) => ({
    backgroundImage: `url(${Image})`,
    width: "100%",
    height: "678px",
    backgroundPosition:"center",
    backgroundSize:"cover",
    position: "fixed",
   
  }));

  const Info = styled(Box)(({ theme }) => ({
    backgroundColor: `${theme.palette.primary.contrastText}`,
    width: "950px",
    height: "1000px",
    margin: "auto",
    position: "relative",
    fontFamily: ['Open Sans'],
  

   
  }));
  return (
    <>
      <Home />
      <Info>
        <Header />
        pages
        {/* <Footer/> */}
      </Info>
    </>
  );
}
