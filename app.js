import express from 'express'

const PORT = 5000;
const app = express()

app.get('/',(req,res)=>{
    res.status(200).send('server')
})

app.listen(PORT,()=>{
    console.log('server started at port no:',PORT)
})