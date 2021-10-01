// import React from "react";
import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID Rku9Tq-eE_-ZNpPsrWJtx7qO5LSGvn4HEJBrbmHB0OA",
  },
});
