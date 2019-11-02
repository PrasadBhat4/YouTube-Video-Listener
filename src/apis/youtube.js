import axios from "axios";

const KEY = "AIzaSyAXZMZaR-5wdGbPK545PGgRKXrki9JyGN0";

export const baseParams = {
  part: "snippet",
  maxResults: 5,
  key: KEY
};
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: baseParams
});
