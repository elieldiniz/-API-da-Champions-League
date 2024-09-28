import express, { json } from "express"


const app = express()
const PORT = process.env.PORT 

app.use(json())

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Express API!' })
})

app.listen(PORT,()=>
    console.log(`Server is running on port${PORT}`)
) 