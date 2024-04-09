import Cookie from 'js-cookie'

const GetCookie = (cookiename, usrin) => {
    return Cookie.get(cookiename);
}

export { GetCookie };