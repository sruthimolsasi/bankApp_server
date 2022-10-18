userDetails={
    1000:{acno:1000,username:'amal',password:123,balance:100000,transaction:[]},
    1001:{acno:1001,username:'manu',password:123,balance:10000,transaction:[]},
    1002:{acno:1000,username:'ananthu',password:123,balance:4000000,transaction:[]},
    1003:{acno:1000,username:'sruthi',password:123,balance:800000,transaction:[]},
   }

const register=(acno,username,password)=>  
{
 
  if(acno in userDetails){
    return {
      statusCode:401,
      status:false,
      message:'user already exist'
    }
  }
  else{
    userDetails[acno]={acno,username,password,balance:0,transaction:[]}
    console.log(userDetails);
    
     return {
      statusCode:200,
      status:true,
      message:'registration success'
     }

  }
}

const login=(acnum,pswd)=>{
    if (acnum in userDetails)
  {
    if(pswd==userDetails[acnum]['password']){
      currentuser=userDetails[acnum]['username']
      currentacno=acnum
     
      return {
        statusCode:200,
        status:true,
        message:'login success',
        currentacno,
        currentuser,
      }  
        
        
     }
     else {
      return {
        statusCode:401,
        status:false,
        message:'incorrect password'
      }
     }
 }
 else{
   return {
      statusCode:401,
      status:false,
      message:'not a registered user'
   }
 }
 
}

const deposit=(acno,pswd,damount)=>
{
  
  
  var amount=parseInt(damount)     //input in the form of string type this convert to number
  if(acno in userDetails)
  {
    if(pswd==userDetails[acno]['password'])
    {
       userDetails[acno]['balance']+=amount
       userDetails[acno]['transaction'].push({type:'CREDIT',amount})

       return {
        statusCode:200,
        status:true,
        message: `${amount} amount credited  and your current balance is ${userDetails[acno]['balance']}`
      }
     
    }
    else
    {
      return {
        statusCode:401,
        status:false,
        message:'incorrect password'
      }
    }
  }
  else{
    return {
      statusCode:401,
      status:false,
      message:'not a registered user'
   }
  }
}
// withdow
const withdrow=(acno1,pswd1,wamount)=>
{
  
  var amount=parseInt(wamount)
  if(acno1 in userDetails)
  {
    if(pswd1==userDetails[acno1]['password'])
    {
       if(amount<=userDetails[acno1]['balance'])
       {   
             userDetails[acno1]['balance']-=amount
             userDetails[acno1]['transaction'].push({type:'DEBIT',amount})

              
             return {
              statusCode:200,
              status:true,
              message: `${amount} credited amount and your current balance is ${userDetails[acno1]['balance']}`
                }
          }
       else
       {
        return {
          statusCode:401,
          status:false,
          message:'insuficient balnce'
        }
        
       }
    }
    else
    {
      return {
        statusCode:401,
        status:false,
        message:'incorrect password'
      }
    }
  }
  else
  {
    return {
      statusCode:401,
      status:false,
      message:'user not exist'
   }
    
  }
  
}
// transaction

const getTransaction=(acno)=>
{

 return {
  statusCode:200,
  status:true,
  status:userDetails[acno]['transaction']
    }
}

module.exports={
  register,login,deposit,withdrow,getTransaction
  
  
}