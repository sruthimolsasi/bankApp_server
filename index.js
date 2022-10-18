//server creation
// 1. import express(require('express')) and store in a constant variable(const express)
const express=require('express')

//2. app creation using express
const app=express()

// to pass json datas from req body
app.use(express.json())

//resolve http request
// --------------------


//3.create port number ..3000

app.listen(3000,()=>{console.log('server started at port number 3000')})

//import data service file from service folder to use register funtion
const dataService=require('./service/dataservice')


//register post
app.post('/register',(req,res)=>{
    console.log(req.body)

    result=dataService.register(req.body.acno,req.body.username,req.body.password)
    res.status(result.statusCode).json(result)
   
})

//login
app.post('/login',(req,res)=>{
    console.log(req.body)

    result=dataService.login(req.body.acnum,req.body.pswd)
    res.status(result.statusCode).json(result)
   
})
// deposit
app.post('/deposit',(req,res)=>{
    console.log(req.body)

    result=dataService.deposit(req.body.acno,req.body.pswd,req.body.damount)
    res.status(result.statusCode).json(result)
   
})
// withdrow
app.post('/withdrow',(req,res)=>{
    console.log(req.body)

    result=dataService.withdrow(req.body.acno1,req.body.pswd1,req.body.wamount)
    res.status(result.statusCode).json(result)
   
})
app.get('/getTransaction',(req,res)=>{
    console.log(req.body)

    result=dataService.withdrow(req.body.acno)
    res.status(result.statusCode).json(result)
   
})







// //get request
// app.get('/',(req,res)=>{res.send('get methord............')})

// //post request
// app.post('/',(req,res)=>{res.send('post methord')})

// //get request
// app.put('/',(req,res)=>{res.send('put methord')})

// //get request
// app.patch('/',(req,res)=>{res.send('patch methord')})

// //delete request
// app.delete('/',(req,res)=>{res.send('delete methord')})