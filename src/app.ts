import Express from "express"
import router from "./routers";
import cors from "cors";

function createApp(){
    const app = Express();

    app.use(Express.json());

    app.use("/api", router)

    //UseCors
    
    //const corsOptions = {
        //origin: ["http://localhost"],
        
    //}
    //app.use(cors())

    return app;
}

export default createApp