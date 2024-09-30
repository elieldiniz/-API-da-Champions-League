import Express from "express"
import router from "./routers";

function createApp(){
    const app = Express();

    app.use(Express.json());

    app.use("/api", router) 

    return app;
}

export default createApp