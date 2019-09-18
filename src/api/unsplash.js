import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 92676d2a28f8529701041059ff2aca12c31b1432e339482ce9a3935358aa0ef5"
  }
});
