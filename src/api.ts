import axios from "axios";

interface LoginData {
  email: string;
  password: string;
}
interface LoginResponse{
data:{

},
token : string
}

const BASE_URL = "https://api-dev.domecompass.com";
export const login = (data: LoginData) => {
  const url = BASE_URL + "/login";
  console.log(data);
  //   return fetch(url, {
  //     method: "POST",
  //     body: JSON.stringify(data),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }).then((response) => {
  //     response.json().then((data) => console.log('Response body in json format',data));
  //     return response;
  //   });
  axios.post(url, data).then((response) => {
    console.log(response.data.data.token);
    localStorage.setItem("login_token", response.data.data.token);
  });
};
