## Deployment / Hosting

### Vercel — not recommended

Vercel has a free tier, but it is a poor fit for Agwasuri:

- **No WebSocket support** — Laravel Reverb (the real-time dashboard backbone) requires persistent WebSocket connections, which Vercel does not support. The live sensor streaming feature would be broken.
- **No free database** — Vercel Postgres is a paid add-on ($29/month). SQLite will not work because serverless functions are stateless.
- **Serverless-only** — Long-running processes like `php artisan reverb:start` and `php artisan queue:work` do not fit the model. Function cold-start times (10s default) are also problematic for the scikit-learn/pandas ML service.

You *can* deploy Laravel as serverless functions via the [Vercel PHP adapter](https://vercel.com/docs/laravel), and FastAPI as serverless Python functions, but you would lose the real-time dashboard and need workarounds for queues, sessions, and caches.

### Recommended: Render

**Render free tier** is the best fit for Agwasuri:

- Free PostgreSQL (512MB, 12GB storage)
- Free Redis (25MB) — solves the Reverb/WebSocket problem
- 512MB RAM, 512MB disk
- Supports long-running web services (not serverless)
- Custom domains on free tier
- Auto-deploys from Git

This lets you run Laravel, Reverb, and FastAPI as normal services with no architectural changes — the real-time dashboard works out of the box.

### Runner-up: Railway

Railway is similar — free PostgreSQL and generous free credits — but Redis is a paid add-on, not free like on Render.

### Other options

- **Laravel Forge** + a cloud VM (DigitalOcean, AWS) — full control, but you manage the server.
- **Laravel Vapor** — serverless Laravel on AWS Lambda; officially supports Reverb via Redis, queues, etc. (paid).
- **Fly.io** — free tier (shared CPU, 256MB RAM), supports long-running processes and WebSockets.

### Bottom line

Use **Render**. It is the simplest path to a fully working free deployment that preserves all features — including the real-time broadcasting that is central to the app.