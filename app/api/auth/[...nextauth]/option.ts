import type {NextAuthOptions} from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";

export const options: NextAuthOptions = {
		debug: false,
		session: {strategy: "jwt"},
		providers: [
			Auth0Provider({
				clientId: process.env.AUTH0_CLIENT_ID || "",
				clientSecret: process.env.AUTH0_CLIENT_SECRET || "",
				issuer: process.env.AUTH0_ISSUER_BASE_URL,
			})
		],
		callbacks: {
			jwt: async ({token, user, account}) => {
				// 注意: トークンをログ出力してはダメ
				// console.log('in jwt', {user, token, account, profile})
				if (user) {
					token.user = user;
					const u = user as any
					token.uid = u.id
				}
				if (account) {
					token.accessToken = account.access_token
				}
				return token;
			},
			session: ({session, token}) => {
				// console.log("in session", {session, token});
				token.accessToken
				return {
					...session,
					user: {
						...session.user,
						uid: token.uid,
					},
				};
			},
		}
	}
;