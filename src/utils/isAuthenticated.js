import Cookies from "js-cookie"
import { goToLoginPage } from "../routes/Coordinator"

export const isAuthenticated = (navigate) => {
    const token = Cookies.get('token')
    if(!token){
        goToLoginPage(navigate)
    }
}