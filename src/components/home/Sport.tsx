

import * as React from 'react';
import  Card  from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { styledTodayTypography } from '../../styled/styledTypography';
import { palette } from '@mui/system';
import { CategoryLabelBox, HorizontalLineBox } from '../../styled/styledBox';

const Sport = () => {
return(
<>
<Box position={"relative"}>
    <CategoryLabelBox sx={{backgroundColor:"#dd2b2b"}}>sport</CategoryLabelBox>
    <HorizontalLineBox sx={{backgroundColor:"#dd2b2b"}}></HorizontalLineBox>
    </Box>
    <Card  sx={{width:"600px", margin:"20px 0 0 20px", borderRadius:"4px" }} elevation={0} >
      <CardActionArea sx={{ display:"flex"}}>
        <CardMedia
          component="img" sx={{borderRadius:"2px", maxWidth:"340px"}}
            height={255}
          image= "https://i.guim.co.uk/img/media/40f5722c70404541283ebc441ccbfdc7043bef13/0_102_2720_1632/master/2720.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=ed017ae975f362956a848cfb935aeb2f"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" fontSize={18} fontFamily={"Oswald"}>
            Lizard are a widespread group of squamate reptiles, with over...
          </Typography>
          <Typography variant="body2" color="text.secondary"  sx={{width:"200px"}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <CardActions>
              <Box display={"flex"} marginLeft={-1} >
      <Box component="img"
height="30px" width="30px" borderRadius="50%"  marginRight={2} 
src= "https://i.guim.co.uk/img/media/40f5722c70404541283ebc441ccbfdc7043bef13/0_102_2720_1632/master/2720.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=ed017ae975f362956a848cfb935aeb2f"
alt="green iguana"

/>
        <Typography>Author name</Typography>
        </Box>
      </CardActions>
        </CardContent>
        
      </CardActionArea>
     
    </Card>
    </>
  );
}


export default Sport;