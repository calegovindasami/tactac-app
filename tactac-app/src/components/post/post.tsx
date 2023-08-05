import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import ShareIcon from "@mui/icons-material/Share";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { Random } from "unsplash-js/dist/methods/photos/types";
import "./post.css";
import {
  Avatar,
  CardActionArea,
  CardActions,
  CardHeader,
  IconButton,
} from "@mui/material";

const Post = (post: Random) => {
  const user = post.user;
  const links = post.urls;
  const [likes, setLikes] = useState<number>(post.likes);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  function likePhoto() {
    setLikes(isLiked === true ? likes - 1 : likes + 1);

    setIsLiked(!isLiked);
    document.querySelector(`.${post.id}`)?.classList.toggle("is-liked");
  }

  return (
    <Card sx={{ width: "800px", padding: "16px" }}>
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
                    <img src={user.profile_image.small} height="45"></img>
                  </Avatar>
                }
                titleTypographyProps={{
                  fontFamily: "inherit",
                  color: "red[500]",
                  variant: "h6",
                  align: "left",
                }}
                title={<div id="title">{user.instagram_username}</div>}
                subheader={
                  <span>
                    <Chip size="small" label={user.location} />
                  </span>
                }
              />
            </Box>
            <Typography variant="body1" textAlign="left">
              {post.description}
            </Typography>
          </CardContent>
        </Box>

        <Box>
          <CardMedia>
            <img src={links.full} width={800} />
          </CardMedia>
        </Box>
        <CardActions>
          <Button onClick={likePhoto} sx={{ color: "black" }}>
            {likes}
            <FavoriteIcon
              className={post.id}
              sx={{ color: "gray", marginLeft: "8px" }}
            />
          </Button>

          <IconButton size="large">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
export default Post;
