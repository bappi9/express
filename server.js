const express= require('express')
const contactRouter=require('./Api/Routes/Contacts')
 const app= express()

const PORT= process.env.PORT || 8081

app.use('/api/test',contactRouter)

app.get('/', (req, res) => {
    res.send('<h1>Bappi Sarkar</h1>')
})

app.get('/post',(req,res)=>{
    res.send('Hello Post Data')
})

app.get('/contacts',(req,res)=>{
    res.json(contacts)
})

app.listen(PORT, ()=>{
    console.log(`server us running port ${PORT}`)
})

let contacts=[
    {name:'Bappi Sarkar', email:'bappisarker9@gmail.com'},
    {name: 'Rabbi Sarkar', email:'rabbi@gmail.com'},
    {name: 'rahul sarkar', email:'rahul@gmail.com'}
]