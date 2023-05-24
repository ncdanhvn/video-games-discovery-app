// input url
// https://media.rawg.io/media/games/fb5/fb5e0fdb1f6bb0e8b5da5d08bb83a5fc.jpg

// output url
// https://media.rawg.io/media/crop/600/400/games/fb5/fb5e0fdb1f6bb0e8b5da5d08bb83a5fc.jpg

const getCroppedImageUrl = (url: string) => {
  const target = "media/";
  const insert_string = "crop/600/400/";
  const insert_pos = url.indexOf(target) + target.length;
  return (
    url.substring(0, insert_pos) + insert_string + url.substring(insert_pos)
  );
};

export default getCroppedImageUrl;
