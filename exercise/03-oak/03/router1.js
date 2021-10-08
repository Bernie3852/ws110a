import { Application, Router, send } from "https://deno.land/x/oak/mod.ts";

const router = new Router();
router
    .get("/(.*)", async (context) => {
        let wpath = context.params[0]
        console.log('wpath=', wpath)
        await send(context, wpath, {
            root: Deno.cwd()+"/public/",
            index: "table99.html",
        })
    })

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

console.log('start at : http://127.0.0.1:8000')
await app.listen({ port: 8000 });