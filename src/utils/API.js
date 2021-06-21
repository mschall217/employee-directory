//Week 19 stu project pupster as guide 

import axios from "axios"

//setting base URL for data fetch 

const BASEURL = 'https://randomuser.me/api/?results=20&nat=us'

export default {
    getEmp: () => {
        return axios.get(BASEURL)
    }
}