export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://grabmarketserver-me.herokuapp.com"
    : "http://localhost:8080";
