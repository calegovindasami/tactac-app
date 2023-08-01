import { red } from "@mui/material/colors";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import ShareIcon from "@mui/icons-material/Share";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IPost from "../../interfaces/post/IPost";
import {
  Avatar,
  CardActionArea,
  CardActions,
  CardHeader,
  IconButton,
} from "@mui/material";



const Post = (props: IPost) => {
  return (
    <Card sx={{ width: "800px" }}>
    <CardActionArea sx={{ cursor: "default" }} disableTouchRipple={true}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
            }}
          >
            <CardHeader
              avatar={
                <Avatar>
                  <img src={props.avatar_url} height="45"></img>
                </Avatar>
              }
              titleTypographyProps={{
                fontFamily: "inherit",
                color: "red[500]",
                variant: "h6",
                align: "left",
              }}
              title={<div id="title">{props.username}</div>}
              subheader={
                <span>
                  <Chip size="small" label={props.tag} />
                </span>
              }
            />
          </Box>
          <Typography variant="body1" textAlign="left">
            {props.description}
          </Typography>
        </CardContent>
      </Box>

      <Box>
        <CardMedia>
          <img src="./react.svg" height={300} />
        </CardMedia>
      </Box>
      <CardActions>
        <Button>
          <FavoriteIcon sx={{ color: red[500] }} />
        </Button>

        <IconButton size="large">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </CardActionArea>
  </Card>
  )
}
export default Post