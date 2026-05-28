export default function handler(req, res) {

    res.setHeader("Content-Type", "text/plain")

    res.send(`
loadstring(game:HttpGet("https://raw.githubusercontent.com/create-stree/STREE-HUB/refs/heads/main/Loader/Main.lua", true))()
`)
}
