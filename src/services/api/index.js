import axios from "axios";

export default axios.create({
    baseURL: process.env.REACT_APP_BASE_URL, 
    headers: {
        "X-Authorization": process.env.REACT_APP_PUBLIC_KEY ? process.env.REACT_APP_PUBLIC_KEY : '',
        Accept: "application/json",
        "Content-Type": "application/json",
      },
});