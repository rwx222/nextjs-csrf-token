export const IS_PRODUCTION = process.env.NODE_ENV === 'production'

export const CSRF_TOKEN_NAME = 'csrftoken'

export const ERROR_CODE_INVALID_CSRF = 'middleware/invalid-csrf-token'

export const ERROR_CODE_INTERNAL_SERVER = 'server/internal-server-error'
