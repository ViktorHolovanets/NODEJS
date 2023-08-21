import axios from 'axios';

class Server {
  constructor(source)
  {
    this.source = source;
    this.server = axios.create({
        baseURL: this.source
    });
  }

  async AuthorizationUser(user) {
    const request = await this.server.post(this.source, {
        email: user.email,
        password: user.password,
    }).then(response => {
        console.log("Welcome! Authorization is successfull ... \n")
      return JSON.stringify(response)
    }).catch(error => {
        console.log("[Error message at the auth module method] \n" +
                    "Authorization unpossible now. Reason: \n" + error);
    });
    return request;
  }

  async RegisterUser(username,email,password)
  {
    const request = await this.server.post(this.source, {
        Name: username,
        Email:email,
        Password: password 
    }).then(response => {
          console.log("Registration is success ...");
        return JSON.stringify(response);
    }).catch(error => {
        console.log("[Error message at the register module method] \n" +
                    "Registration unpossible now. Reason: \n" + error);
    });
    return request;
  }
}
export default Server;