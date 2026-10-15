import express from 'express';
import type { Response, Request} from 'express';
const app = express();
app.get("/user",(req: Request,res: Response)=>{
    res.status(200).json({
        name:"Afsa",
        subject: "math"
    })
})
app.listen(3001,()=>{
    console.log("server is running on port 3001")
})