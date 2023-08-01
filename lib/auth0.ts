import { initAuth0 } from '@auth0/nextjs-auth0'

export default initAuth0({
  baseURL: `${process.env.NEXT_PUBLIC_AUTH0_BASE_URL}`,
  clientID: `${process.env.AUTH0_CLIENT_ID}`,
  clientSecret: `${process.env.AUTH0_CLIENT_SECRET}`,
  issuerBaseURL: `${process.env.NEXT_PUBLIC_AUTH0_ISSUER_BASE_URL}`,
  secret: `${process.env.AUTH0_SECRET}`,
})
