import Logo from "../../assets/logoFooter.png";
import Person from "../../assets/person.png";
import PopularPosts from "../popularPosts/PopularPosts";
import { Box, Button, Grid, useMediaQuery, useTheme } from "@mui/material";
import {
  StyledFooter,
  StyledFooterBottom,
  StyledFooterButton,
  StyledFooterMedia,
  StyledGridLeft,
  StyledGridLeftText,
  StyledGridRight,
  StyledGridRightTitle,
  StyledGridRightLine,
  BoxStyleTwo,
  BoxStyle,
  StyledLine,StyledLineMedai,StyledGridLeftTextMedia
} from "../../styled/Footer";
const Footer = () => {
   const theme = useTheme();
 const isMatch = useMediaQuery(theme.breakpoints.down(1117));
  return (
    <Box>
      {!isMatch ? (
        <StyledFooter>
          <Grid container>
            <StyledGridLeft item xs={4}>
              <img src={Logo} />
              <StyledGridLeftText>
                <Box>
                  All the day's headlines and highlights from MAGZ , direct to
                  you every morning, there are all new that you need in day.
                  <br />
                  explores the connection between contemporary visual culture
                  and social issues
                </Box>

                <StyledFooterButton>Sign up for MAGZ</StyledFooterButton>
              </StyledGridLeftText>
            </StyledGridLeft>

            <PopularPosts />
            <PopularPosts />


            
          </Grid>

          <StyledLine />
          <StyledFooterBottom>
            © 2022 - MAGZ. All Rights Reserved.
          </StyledFooterBottom>
        </StyledFooter>
      ) : (
        <StyledFooterMedia>
          <StyledGridLeft item xs={4}>
            <img src={Logo} />
            <StyledGridLeftTextMedia>
              All the day's headlines and highlights from MAGZ , direct to you
              every morning, there are all new that you need in day.
              <br />
              explores the connection between contemporary visual culture and
              social issues
              <StyledFooterButton>Sign up for MAGZ</StyledFooterButton>
            </StyledGridLeftTextMedia>
          </StyledGridLeft>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <StyledGridRight>
              <StyledGridRightTitle>
                popular posts
                <StyledGridRightLine />
              </StyledGridRightTitle>
              <StyledGridRightTitle>
                <Box
                  component="img"
                  src={Person}
                  sx={{ height: "50px", width: "80px" }}
                />
                <BoxStyleTwo>
                  Kylie Jenner, Bella Hadid, and More Celebrities…
                  <BoxStyle>Nov 20, 2020</BoxStyle>
                </BoxStyleTwo>
              </StyledGridRightTitle>
              <StyledGridRightTitle>
                <Box
                  component="img"
                  src={Person}
                  sx={{ height: "50px", width: "80px" }}
                />
                <BoxStyleTwo>
                  Kylie Jenner, Bella Hadid, and More Celebrities…
                  <BoxStyle>Nov 20, 2020</BoxStyle>
                </BoxStyleTwo>
              </StyledGridRightTitle>{" "}
              <StyledGridRightTitle>
                <Box
                  component="img"
                  src={Person}
                  sx={{ height: "50px", width: "80px" }}
                />
                <BoxStyleTwo>
                  Kylie Jenner, Bella Hadid, and More Celebrities…
                  <BoxStyle>Nov 20, 2020</BoxStyle>
                </BoxStyleTwo>
              </StyledGridRightTitle>
            </StyledGridRight>
            <StyledGridRight>
              <StyledGridRightTitle>
                popular posts
                <StyledGridRightLine />
              </StyledGridRightTitle>
              <StyledGridRightTitle>
                <Box
                  component="img"
                  src={Person}
                  sx={{ height: "50px", width: "80px" }}
                />
                <BoxStyleTwo>
                  Kylie Jenner, Bella Hadid, and More Celebrities…
                  <BoxStyle>Nov 20, 2020</BoxStyle>
                </BoxStyleTwo>
              </StyledGridRightTitle>
              <StyledGridRightTitle>
                <Box
                  component="img"
                  src={Person}
                  sx={{ height: "50px", width: "80px" }}
                />
                <BoxStyleTwo>
                  Kylie Jenner, Bella Hadid, and More Celebrities…
                  <BoxStyle>Nov 20, 2020</BoxStyle>
                </BoxStyleTwo>
              </StyledGridRightTitle>{" "}
              <StyledGridRightTitle>
                <Box
                  component="img"
                  src={Person}
                  sx={{ height: "50px", width: "80px" }}
                />
                <BoxStyleTwo>
                  Kylie Jenner, Bella Hadid, and More Celebrities…
                  <BoxStyle>Nov 20, 2020</BoxStyle>
                </BoxStyleTwo>
              </StyledGridRightTitle>
            </StyledGridRight>
          </Box>
          <StyledLineMedai />
          <StyledFooterBottom>
            © 2022 - MAGZ. All Rights Reserved.
          </StyledFooterBottom>
        </StyledFooterMedia>
      )}{" "}
    </Box>
  );
};
export default Footer;
