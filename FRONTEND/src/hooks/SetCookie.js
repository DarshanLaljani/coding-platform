import Cookie from 'js-cookie'

const SetCookie = (cookiename, usrin) => {
    Cookie.set(cookiename, {
        expires: 1,
        secure: true,
        sameSite: 'strict',
        path: '/'
    });
}

export { SetCookie };