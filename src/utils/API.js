import axios from "axios";

const URL = "https://randomuser.me/api/?results=20&nat=us"
// eslint-disable-next-line 
//chose this so I didn't have to store it in an object
//Calling data from the API for the emp directory to take users
export default {
    getEmp: function() {
        return axios.get(URL);
    }
}