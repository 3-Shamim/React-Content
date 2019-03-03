import axios from "axios";

class AuthService {
  static login = credential => {
    return axios.post("http://localhost:8080/login", credential);
  };
}

export default AuthService;
