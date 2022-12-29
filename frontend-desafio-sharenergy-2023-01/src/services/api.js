import axios from "axios";

function ApiConsume(name) {
  const apiUrlMap = {
    users: "https://randomuser.me/api/",
    cats: "https://http.cat",
    dogs: "https://randomdog.me/api/"
  };

  const api = axios.create({
    baseURL: apiUrlMap[name]
  });

  return api;
}


export default ApiConsume;