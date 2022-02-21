import {
    USER_LOGIN_FAILED,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_REGISTER_FAILED,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
} from '../contants/user';

import axios from 'axios';

export const login = (email, password) => async(dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(
            '/api/user/login/',
            { 'email': email, 'password': password},
            config
        )

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAILED,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
    }
}

export const register = (email) => async (dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST
        })

    const config = {
        header: {
            'Content-type': 'application/json'
        }
    }

    const { data } = await axios.post(
        '/api/users/register',
        {'email': email},
        config
    )

    dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data
    })

    // dispatch({
    //     type: USER_LOGIN_SUCCESS,
    //     payload: data
    // })

    localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAILED,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message
        })
    }
}