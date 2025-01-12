const API_URL = import.meta.env.API_URL ?? 'https://vindi.best:8004/api'
const APP_URL = import.meta.env.APP_URL ?? 'https://vindi.best:8004/'
const PROD_ERROR_MESSAGES = import.meta.env.PROD_ERROR_MESSAGES ?? false

export const is_dev_mode = () => {
    return import.meta.env.DEV;
}

export const is_prod_mode = () => {
    return import.meta.env.PROD;
}

export const get_auth_url = () => {
    return `${API_URL}/oauth/login?redirect=${APP_URL}/auth/login`
}

export const get_api_url = () => {
    return API_URL
}

export const get_app_url = () => {
    return APP_URL
}

export const prod_error_messages = () => {
    return PROD_ERROR_MESSAGES === 'true'
}

export const get_valid_code_length = () => {
    return import.meta.env.VALID_CODE_LENGTH ? parseInt(import.meta.env.VALID_CODE_LENGTH) : 8
}