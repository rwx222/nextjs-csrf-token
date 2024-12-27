export const IS_PRODUCTION: boolean = process.env.NODE_ENV === 'production'

export const CSRF_TOKEN_NAME: string = 'csrftoken'

export const ERROR_CODE_INVALID_CSRF: string = 'middleware/invalid-csrf-token'
export const ERROR_CODE_INTERNAL_SERVER: string = 'server/internal-server-error'
