/**
 * Array of routes that are accessible to public
 * These do not require authentication
 * @type {string[]}
 */
export const publicRoutes: string[] = ["/"];

/**
 * Array of routes that are used for authentication
 * these will redirect user to /settings page
 * @type {string[]}
 */
export const authRoutes: string[] = ["/auth/login", "/auth/register"];

/**
 * prefix of API auth routes
 * routes that starts with this are API auth routes
 * @type {string}
 */
export const apiAuthPrefix: string = "/api/auth";

/**
 * the default redirect page after login
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT: string = "/settings";
