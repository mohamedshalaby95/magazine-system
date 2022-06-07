

import * as React from 'react';
import  Card  from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

import postAPI from '../../api/posts'

import { styledTodayTypography } from '../../styled/styledTypography';
import { palette } from '@mui/system';

const Today = () => {

  React.useEffect(()=>{
postAPI.get("get_all").then((res)=>{
  console.log(res.data)
}).catch((err)=>{
  console.log(err);
  
})

  },[])
return(
    <Card  sx={{width:"600px", margin:"20px 0 0 20px"}} elevation={0}>
      <CardActionArea>
        <CardMedia
          component="img" sx={{borderRadius:"8px"}}
          height="300" 
          image= "https://i.guim.co.uk/img/media/40f5722c70404541283ebc441ccbfdc7043bef13/0_102_2720_1632/master/2720.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=ed017ae975f362956a848cfb935aeb2f"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Box component="img"
height="30px" width="30px" borderRadius="50%" marginLeft={2} marginRight={2}
src= "https://i.guim.co.uk/img/media/40f5722c70404541283ebc441ccbfdc7043bef13/0_102_2720_1632/master/2720.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=ed017ae975f362956a848cfb935aeb2f"
alt="green iguana"

/>
        <Typography>Author name</Typography>
      </CardActions>
    </Card>
  );
}


export default Today;