import { createApi } from "unsplash-js";
import { Random } from "unsplash-js/dist/methods/photos/types";
import { useEffect, useState } from "react";
import Post from "../post/post";
import { Stack } from "@mui/material";

export default function Feed() {
  const unsplash = createApi({
    accessKey: "guS1CbR3lhIghL51JI1KlTQ-W3mK87JmngbXj4kFyGA",
  });

  const [photos, setPhotos] = useState<Random[]>();

  useEffect(() => {
    const getPhotoAsync = async () => {
      unsplash.photos
        .getRandom({
          count: 4,
          orientation: "landscape",
        })
        .then((result) => {
          if (result.type === "success") {
            setPhotos(result.response as Random[]);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getPhotoAsync();
  }, []);

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      minHeight={"50%"}
      overflow={"auto"}
      marginTop={8}
    >
      {photos?.map((photo) => (
        <Post key={photo.id} {...photo}></Post>
      ))}
    </Stack>
  );
}
