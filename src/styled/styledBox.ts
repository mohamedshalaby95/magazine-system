import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import { fontFamily, fontSize, height } from "@mui/system";

export const CategoryLabelBox = styled(Box)(()=>({


width: "90px",
 height:"38px",
 fontSize:".8em",
 fontWeight:"800",
color:"white",
borderRadius:3,
display:"flex",
justifyContent:"center",
alignItems:"center",
fontFamily:"Oswald",
 textTransform:"uppercase",
 marginLeft:"20px"

}))


export const HorizontalLineBox = styled(Box)(()=>({


    width: "60%",
     height:"6px",
     position:"absolute",
     top:"83%",
    left:"10%",

    
    }))
