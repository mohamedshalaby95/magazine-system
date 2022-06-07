import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Button, Grid, useMediaQuery, useTheme } from "@mui/material";
import Person from "../../assets/person.png";
import {
  StyledGridRight,
  StyledGridRightTitle,
  StyledGridRightLine,
  BoxStyleTwo,
  BoxStyle,
} from "../../styled/PopularPost";
const PopularPosts = () => {
  return (
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
        <BoxStyleTwo >
          Kylie Jenner, Bella Hadid, and More Celebrities…
          <BoxStyle>Nov 20, 2020</BoxStyle>
        </BoxStyleTwo>
      </StyledGridRightTitle>{" "}
    </StyledGridRight>
  );
};
export default PopularPosts;
