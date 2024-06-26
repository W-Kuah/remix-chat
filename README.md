# Full Stack Realtime Chat Messaging App with Remix.run


### Commands you will need
```sh
npm i remix-utils remix-auth-socials remix-auth @prisma/client
```

```sh
npm i -D prisma
```




## Fly Setup

1. [Install `flyctl`](https://fly.io/docs/getting-started/installing-flyctl/)

2. Sign up and log in to Fly

```sh
flyctl auth signup
```

3. Setup Fly. It might ask if you want to deploy, say no since you haven't built the app yet.

```sh
flyctl launch
```

4. Setup your environment variables
    - DATABASE_URL (Choose a database. Personally I went for Supabase)
    - GITHUB_CLIENT_ID (Register a new OAuth application in git GitHub and use 'http://localhost:3000/' for the Homepage URL, and use 'https://localhost:3000/auth/github/callback' as the Authorization callback URL.)
    - GITHUB_SECRET_KEY


## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

If you've followed the setup instructions already, all you need to do is run this:

```sh
npm run deploy
```

You can run `flyctl info` to get the url and ip address of your server.

Check out the [fly docs](https://fly.io/docs/getting-started/node/) for more information.