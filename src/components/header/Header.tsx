import { theme } from "../../theme/palette";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import PersonIcon from "@mui/icons-material/Person";
import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import OutlinedInput from "@mui/material/OutlinedInput";
import SearchIcon from "@mui/icons-material/Search";
import Switch from "@mui/material/Switch";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Grid,
  FormControl,
  Input,
  InputAdornment,
  FormGroup,
  Select,
  MenuItem,
  FormControlLabel,
} from "@mui/material";

const Header = () => {
  let newDate = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let date_raw = days[newDate.getDay()];
  let date_number = newDate.getDay();
  let month_raw = months[newDate.getMonth() + 1];
  let year = newDate.getFullYear();

  const StyledNavTop = styled(Box)(({ theme }) => ({
    borderRadius: "3px",
    width: "95%",
    height: "30px",
    backgroundColor: `${theme.palette.secondary.main}`,
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0px 0px 0px 10px",
  }));
  const StyledNavConatiner = styled(Box)(({ theme }) => ({
    color: `${theme.palette.text.secondary}`,
    fontSize: "12px",
  }));
  const StyledNavTopRight = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  }));
  const StyledRightOne = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px",
  }));
  const PersonIconNav = styled(PersonIcon)(({ theme }) => ({
    color: `${theme.palette.secondary.main}`,
  }));
  const StylesSelected = styled(Select)(({ theme }) => ({
    color: `${theme.palette.text.secondary}`,
    height: "30px ",
    fontSize: "12px",
  }));
  const StyledRightOneConatiner = styled(Box)(({ theme }) => ({
    height: "25px",
    width: "25px",
    borderRadius: "50%",
    textAlign: "center",
    backgroundColor: `${theme.palette.primary.light}`,
  }));
  const StyledImage = styled(Box)(({ theme }) => ({
    // height: "100px",
    width: "150px",
    padding: "0px 0px 0px 50px",
  }));
  const StyledNavBottom = styled(Box)(({ theme }) => ({
    borderRadius: "3px",
    width: "95%",
    height: "50px",
    backgroundColor: `${theme.palette.primary.light}`,
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0px 0px 0px 10px",
  }));
  const StyledListNavLeft = styled(Box)(({ theme }) => ({
    color: `${theme.palette.primary.contrastText}`,
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    justifyContent: "space-between",
    padding: "0px 0px 0px 10px",
  }));
  const StyledListNavRight = styled(Box)(({ theme }) => ({
    color: `${theme.palette.primary.contrastText}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0px 10px 0px 10px",
  }));
  const StyledListNavLeftContent = styled(Box)(({ theme }) => ({
    margin: "10px",
    fontSize: "18px",
    textTransform: "uppercase",
    fontFamily: "Oswald",
    '&:hover':{
      // backgroundColor:"red"
    }
  }));

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#000"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark"
              ? "#8796A5"
              : `${theme.palette.primary.main}`,
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor:
        theme.palette.mode === "dark"
          ? "#003892"
          : `${theme.palette.primary.contrastText}`,
      width: 32,
      height: 32,
      "&:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          `${theme.palette.primary.main}`
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor:
        theme.palette.mode === "dark"
          ? "#8796A5"
          : `${theme.palette.primary.main}`,
      borderRadius: 20 / 2,
    },
  }));
  const StyledBox = styled(Box)(({ theme }) => ({
    height: "140px",
    width: "300px",
    position: "absolute",
    left: "95px",
    marginTop: "24px",
    fontFamily: "Oswald",
    cursor:"pointer",
    backgroundColor: `${theme.palette.primary.light}`,
    display: "flex",
    justifyContent: "space-between",
  }));
  const StyledBorsder = styled(Box)(({ theme }) => ({
    height: "120px",
    width: "1.5px",
    marginTop: "5px",
    backgroundColor: `${theme.palette.primary.contrastText}`,
  }));
  const [values, setValues] = React.useState(["Egypt", "UK Edition"]);
  const [selected, setSelected] = useState("Egypt");

  function handleChange(event: any) {
    setSelected(event.target.value);
  }
  const [isOpened, setIsOpened] = useState(false);

  function toggle() {
    setIsOpened((wasOpened) => !wasOpened);
  }

  return (
    <StyledNavConatiner>
      <StyledNavTop>
        <Box component="div">
          {date_raw} {month_raw} {date_number},{year}
        </Box>
        <StyledNavTopRight>
          <StyledRightOne>
            <StyledRightOneConatiner>
              <PersonIconNav />
            </StyledRightOneConatiner>
            <Typography sx={{ margin: "10px", fontSize: "12px" }} component={'span'} variant={"body2"}>
              Sign in
            </Typography>
          </StyledRightOne>
          <Box>
            <FormControl>
              <StylesSelected
                value={selected}
                onChange={handleChange}
                inputProps={{
                  name: "agent",
                  id: "age-simple",
                }}
              >
                {values.map((value, index) => {
                  return <MenuItem key={index} value={value}>{value}</MenuItem>;
                })}
              </StylesSelected>
            </FormControl>
          </Box>
        </StyledNavTopRight>
      </StyledNavTop>
      <StyledImage>
        <img src={Logo} height="70px" width="160px" />
      </StyledImage>
      <StyledNavBottom>
        <StyledListNavLeft>
          <StyledListNavLeftContent>new</StyledListNavLeftContent>
          <StyledListNavLeftContent>opinion</StyledListNavLeftContent>{" "}
          <StyledListNavLeftContent>sport</StyledListNavLeftContent>{" "}
          <StyledListNavLeftContent>life style</StyledListNavLeftContent>
          <StyledListNavLeftContent>culture</StyledListNavLeftContent>
          <StyledListNavLeftContent
            onClick={toggle}
            sx={{ display: "flex", alignItems: "center" }}
          >
            More
            <KeyboardArrowDownIcon sx={{ marginTop: "10px" }} />
          </StyledListNavLeftContent>
          <Box>
            {isOpened && (
              <StyledBox>
                <Grid container sx={{ marginLeft: "10px" }}>
                  <Grid item xs={2}>
                    <Box>Cartoon</Box>
                    <Box sx={{marginTop:"10px"}}>Video </Box>

                  </Grid>
                  <Grid item xs={1}>
                    <StyledBorsder />
                  </Grid>
                  <Grid item xs={2}>
                    <Box>Football</Box>
                    <Box sx={{marginTop:"10px"}}>Golf </Box>
                    <Box sx={{marginTop:"10px"}}>Boxing </Box>
                    <Box sx={{marginTop:"10px"}}>US Sport </Box>


                  </Grid>
                  <Grid item xs={1}>
                    <StyledBorsder />
                  </Grid>
                  <Grid item xs={2}>
                    <Box>Food</Box>
                    <Box sx={{marginTop:"10px"}}>Family </Box>
                    <Box sx={{marginTop:"10px"}}>Health </Box>
                  </Grid>
                  <Grid item xs={1}>
                    <StyledBorsder />
                  </Grid>
                  <Grid item xs={2}>
                    <Box>Flim</Box>
                    <Box sx={{marginTop:"10px"}}>Music </Box>
                    <Box sx={{marginTop:"10px"}}>Art & design </Box>

                  </Grid>
                </Grid>
              </StyledBox>
            )}
          </Box>
        </StyledListNavLeft>
        <StyledListNavRight>
          <FormControl sx={{ m: 5, width: "25ch" }} variant="outlined">
            <OutlinedInput
              sx={{ height: "30px", borderRadius: "40px", color: "white" }}
              id="outlined-adornment-weight"
              endAdornment={
                <InputAdornment position="end">
                  <SearchIcon sx={{ color: "white" }} />
                </InputAdornment>
              }
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />
          </FormControl>
          <FormGroup>
            <FormControlLabel
              control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
              label=""
            />
          </FormGroup>
        </StyledListNavRight>
      </StyledNavBottom>
    </StyledNavConatiner>
  );
};
export default Header;
