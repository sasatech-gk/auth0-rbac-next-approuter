
## 概要
- Next.jsのAppRouterでAuth0のRBACを実装するためのテストコード。
- 2023年7月30日現時点で、Auth0のSDKはApp Routerに対応していないため、NextAuthを使用している。
- Nodeのバージョン等は「Volta」で管理している

## ローカルの環境変数（記入中）
| KEY                 | Value(example)                           |
|---------------------|------------------------------------------|
| NEXTAUTH_URL        | http://localhost:3000                    |
| AUTH0_DOMAIN        | dev-xxxxxx.jp.auth0.com                  |
| AUTH0_CLIENT_ID     | xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx         |
| AUTH0_CLIENT_SECRET | xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx |
| AUTH0_SCOPE         | openid profile email                     |
| AUTH0_AUDIENCE      | https://dev-xxxxxx.jp.auth0.com/api/v2/  |


##  Vercelにデプロイする場合の環境変数
https://vercel.com/docs/concepts/projects/environment-variables/system-environment-variables#