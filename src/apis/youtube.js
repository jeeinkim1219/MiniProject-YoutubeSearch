import axios from "axios";

const KEY = "AIzaSyDeixXzpr9VuMnDmosseNzCUaaHvjgbI4Q";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    type: "video",
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
