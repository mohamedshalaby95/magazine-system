import { styled } from "@mui/material/styles";
import { Box, Button, Grid } from "@mui/material";
import Logo from "../../assets/logoFooter.png";
import Person from "../../assets/person.png";

const Footer = () => {
  const StyledFooter = styled(Box)(({ theme }) => ({
    borderRadius: "3px",
    width: "100%",
    height: "350px",
    backgroundColor: `${theme.palette.primary.light}`,
    margin: "auto",
    // display: "flex",
    color: `${theme.palette.primary.contrastText}`,
    justifyContent: "space-between",
    // padding:"10px"
  }));
  const StyledGridLeft = styled(Grid)(({ theme }) => ({
    color: `${theme.palette.primary.contrastText}`,
    padding: "30px 0px 0px 25px",
  }));
  const StyledGridLeftText = styled(Box)(({ theme }) => ({
    marginTop: "20px;",
    fontSize: "10px",
    color: `${theme.palette.secondary.dark}`,
    width: "80%",
    lineHeight: "1.8",
  }));
  const StyledFooterButton = styled(Button)(({ theme }) => ({
    marginTop: "20px;",
    marginBottom: "40px",
    fontSize: "12px",
    height: "40px",
    width: "120px",
    fontFamily: "Oswald",
    fontWeight: "bolder",
    backgroundColor: `${theme.palette.primary.main}`,
    color: `${theme.palette.secondary.contrastText}`,
    "&:hover": {
      color: `${theme.palette.primary.main}`,
      backgroundColor: `${theme.palette.secondary.contrastText}`,
    },
  }));
  const StyledGridRight = styled(Grid)(({ theme }) => ({
    color: `${theme.palette.primary.contrastText}`,
  }));
  const StyledGridRightTitle = styled(Box)(({ theme }) => ({
    color: `${theme.palette.primary.contrastText}`,
    display: "flex",
    padding: "30px 0px 0px 42px",
    justifyContent: "space-between",
    fontFamily: "Oswald",
    fontWeight: "bold",
    fontSize: "14px",
    textTransform: "uppercase",
  }));
  const StyledGridRightLine = styled(Box)(({ theme }) => ({
    backgroundColor: `${theme.palette.secondary.dark}`,
    height: "3px",
    width: "160px",
    borderRadius: "10px",
    margin: "12px 0px 0px 25px",
  }));

  const StyledLine = styled(Box)(({ theme }) => ({
    backgroundColor: `${theme.palette.secondary.dark}`,
    width: "800px",
    margin: "auto",
    height: "0.3px",
  }));
  const BoxStyle = styled(Box)(({ theme }) => ({
    color: `${theme.palette.secondary.dark}`,
    fontSize: "10px",
    marginTop: "10px",
  }));
  const BoxStyleTwo = styled(Box)(({ theme }) => ({
    marginLeft: "30px",
    width: "150px",
    fontSize: "10px",
    "&:hover": {
      color: `${theme.palette.primary.main}`,
      cursor: "pointer",
    },
  }));
  const StyledFooterBottom = styled(Box)(({ theme }) => ({
    textAlign: "center",
    marginTop: "10px",
    fontSize: "10px",
    color: `${theme.palette.secondary.dark}`,
  }));

  return (
    <StyledFooter>
      <Grid container>
        <StyledGridLeft item xs={4}>
          <img src={Logo} />
          <StyledGridLeftText>
            All the day's headlines and highlights from MAGZ , direct to you
            every morning, there are all new that you need in day.
            <br />
            explores the connection between contemporary visual culture and
            social issues
            <StyledFooterButton>Sign up for MAGZ</StyledFooterButton>
          </StyledGridLeftText>
        </StyledGridLeft>

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
            lastest posts
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
      </Grid>

      <StyledLine />
      <StyledFooterBottom>
        © 2022 - MAGZ. All Rights Reserved.
      </StyledFooterBottom>
    </StyledFooter>
  );
};
export default Footer;
