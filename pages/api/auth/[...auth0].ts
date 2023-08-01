import auth0 from '@/lib/auth0'
import { AfterCallback } from '@auth0/nextjs-auth0'

const afterCallback: AfterCallback = async (req, res, session, _state) => {
  try {
    console.log(session.accessToken)
  } catch (err) {
    console.log(err)
  }

  return session
}

export default auth0.handleAuth({
  async login(req: any, res: any) {
    await auth0.handleLogin(req, res)
  },
  async callback(req: any, res: any) {
    try {
      await auth0.handleCallback(req, res, { afterCallback })
    } catch (error) {
      res.status(500).end()
    }
  },
  async logout(req: any, res: any) {
    try {
      await auth0.handleLogout(req, res, {
        returnTo: "/login",
      })
    } catch (error) {
      res.status(500).end()
    }
  }
})
