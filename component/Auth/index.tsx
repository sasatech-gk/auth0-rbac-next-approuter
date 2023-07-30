'use client'
import { signIn, signOut } from "next-auth/react"

export const SignIn = () => {
	return (
		<div>
			<button onClick={() => signIn("auth0")}>新規登録</button>
		</div>
	)
}

export const SignOut = () => {
	return (
		<div>
			<button onClick={() => signOut()}>ログアウト</button>
		</div>
	)
}
