/**
 * NOTE:
 * This file must be compatible with the 'Edge runtime' and must NOT use NodeJs native modules.
 * This is because Next.js has this restriction on the 'middleware.js' file, where the functions from this file will be imported.
 * For this reason, the '@edge-csrf/core' library is used here (which is compatible with the Edge runtime) instead of the 'csrf' library.
 *
 * Restriction: https://nextjs.org/docs/app/building-your-application/routing/middleware#runtime
 */

import {
  createSecret,
  createToken,
  verifyToken,
  atou,
  utoa,
} from '@edge-csrf/core'

const CONFIG = {
  SALT_LENGTH: 49, // Number between 1 and 255. In the 'csrf' library defaults to 8
  SECRET_LENGTH: 48, // Number between 1 and 255. In the 'csrf' library defaults to 18
}

const secretUint8Array = createSecret(CONFIG.SECRET_LENGTH)

export async function generateCsrfToken(): Promise<string> {
  const tokenUint8Arr = await createToken(secretUint8Array, CONFIG.SALT_LENGTH)
  const tokenStr = utoa(tokenUint8Arr)
  return tokenStr
}

export async function verifyCsrfToken(token: string): Promise<boolean> {
  const tokenUint8Arr = atou(token)
  const isValid = await verifyToken(tokenUint8Arr, secretUint8Array)
  return isValid
}
