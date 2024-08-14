/**
 * Retrieves the value of a cookie with the given name.
 *
 * @param {string} name - The name of the cookie to retrieve.
 * @return {string} The value of the cookie, or an empty string if the cookie does not exist.
 */
export default function getCookie(name) {
  const cookieName = name + '='
  const decodedCookie = decodeURIComponent(document.cookie)
  const cookieArray = decodedCookie.split(';')

  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i].trim()
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length)
    }
  }

  return ''
}
