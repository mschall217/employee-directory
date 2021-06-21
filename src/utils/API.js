import axios from "axios";

const URL = "https://randomuser.me/api/?results=20&nat=us"
// eslint-disable-next-line 
export default {
    getEmp: function() {
        return axios.get(URL);
    }
}