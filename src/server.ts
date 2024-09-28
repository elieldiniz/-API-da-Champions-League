import express from "express"


const app = express()
const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Express API!' })
})

app.listen(PORT,()=>
    console.log('Server is running on port 3000')
) 