import express from 'express'

const PORT = 5000;
const app = express()

app.get('/',(eq,res)=>{
    res.status(200).send('serve')
})

app.listen(PORT,()=>{
    console.log('server started at port no:',PORT)
})