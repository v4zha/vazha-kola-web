import axios from "axios";
import {RegUsr,LogUsr} from "../types/Types";
class ApiService {    
    API_URL:string;
    config:any;
    constructor(){
        this.API_URL = "https://vazha-kala-api.herokuapp.com";
        this.config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    }
    /**
     * Sign Up function , required secret key given to user by musk bot :)
     * @param username 
     * @param email 
     * @param password 
     */
    register = (username: string, email: string, password: string) => {
        const data: RegUsr = {
            uname: username,
            passwd: password,
            e_mail: email,
        };
        return axios.post(this.API_URL + "/signup", JSON.stringify(data), this.config);
    };

    /**
     *  Login function also assigns JWT : )
     * @param username 
     * @param password 
     */
    login = (username: string, password: string) => {
        const data: LogUsr = {
            uname: username,
            passwd: password,
        };
        return axios.post(this.API_URL + "/login", JSON.stringify(data), this.config).then((response) => {
            if (response.data.authorize) {
                if (response.data.authorize == true) {
                    console.log(`User auth ${JSON.stringify(response.data)}`);
                }
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
    };

    /**
     * Logout Function to remove JWToken : )
     */
    logout = () => {
        localStorage.removeItem("user");
    }
}
export default new ApiService();

