import { Button} from "@mui/material";
import { styled } from "@mui/material/styles";


 
   export const StyledButton = styled(Button)(() => ({
      
      boxSizing: "border-box",
      fontFamily: "Roboto,sans-serif",
      fontWeight: 500,
      borderRadius: 999,
      padding: "2px 16px",
      color: "white",
      fontSize: "1em",
      textTransform: "initial",
      "&:focus": {
        backgroundColor: "#e91e63",
      },
      "&:hover": {
        backgroundColor: "#424242",
        transition:
          "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      },
    }));

