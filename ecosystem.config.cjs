module.exports = {
    apps: [
        {
            name: "Giveaway-Frontend",
            script: "dist/server/entry.mjs",
            time: true,
            instances: 1,
            autorestart: true,
            max_restarts: 50,
            watch: false,
            max_memory_restart: "1G",
        },
    ],
    deploy: {
        production: {
            user: "github",
            host: "vindi.best",
            key: "deploy.key",
            ref: "origin/master",
            repo: "https://github.com/beautifulmim/fanfest.git",
            path: "/var/projects/omega-giveaway-frontend-prod/",
            "post-deploy":
                "npm i && npm run build && pm2 reload ecosystem.config.cjs --env production --force && pm2 save",
            env: {
                NODE_ENV: "production",
                HOST: "vindi.best"
            },
        },
    },
};
