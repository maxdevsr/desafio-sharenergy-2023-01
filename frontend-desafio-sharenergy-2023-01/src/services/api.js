import axios from "axios";

function ApiConsume(name) {
  const apiUrlMap = {
    users: "https://randomuser.me/api/",
    cats: "https://http.cat",
    dogs: "https://random.dog/woof.json"
  };

  const api = axios.create({
    baseURL: apiUrlMap[name]
  });

  return api;
}


export default ApiConsume;