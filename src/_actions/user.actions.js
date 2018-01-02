import { userConstants } from  '../_constants'
import { userService } from '../_services'
import { alertActions } from "./alert.actions"
import { history } from '../_helpers'

export const userActions = {
    login,
    logout,
    getAll
}

function login(username, password) {
    return dispatch => {
        dispatch(request({username}))

        userService.login
    }
}