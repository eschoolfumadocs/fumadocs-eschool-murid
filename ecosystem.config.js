module.exports = {
    apps: [
        {
            name: "Fumadocs Murid",
            script: "node_modules/next/dist/bin/next",
            args: "start -p 3002",
            cwd: "/www/wwwroot/fumadocs-eschool-murid", // ⬅️ WAJIB ABSOLUTE
            exec_mode: "fork",           // ⬅️ GANTI INI
            instances: 1,                // ⬅️ SIMPLE DULU
            autorestart: true,
            watch: false,
            max_memory_restart: "3G",
            env: {
                NODE_ENV: "production",
            }
        }
    ]
}