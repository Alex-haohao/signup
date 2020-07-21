const router = require('koa-router')();
const isEmpty = require("lodash/isEmpty")
const validator = require("validator")
const sqlFn = require("../mysql/index")

const validatorInput = (data) =>{
    let error = {};
    if(validator.isEmpty(data.username)){
        error.username = "username is empty"
    }
    if(!validator.isEmail(data.email)){
        error.email = "email is empty"
    }
    if(validator.isEmpty(data.password)){
        error.password = "password is empty"
    }
    if(validator.isEmpty(data.passwordConfirmation)){
        error.password = "password confirmation is empty"
    }
    if(!validator.equals(data.password,data.passwordConfirmation)){
        error.passwordConfirmation = "password and confirmation is not equal"
    }

    return{
        error,
        isValid:isEmpty(error)
    }
}


router.post('/api/users',async (ctx)=>{
    
    ctx.body=ctx.request.body;  
    var sql = "insert into user values (null,?,?,?,?)";
    var arr = [ctx.body.email,ctx.body.username,ctx.body.password,ctx.body.passwordConfirmation];
    const {error,isValid} = validatorInput(ctx.body)
    if(!isValid){

        console.log(error)
        ctx.throw(400,JSON.stringify(error));
        
    }
    if(isValid){
     await sqlFn(sql,arr,function(data){
            if(data.affectedRows){
                ctx.body = {success:true}
            }
            else{
              ctx.throw(400,JSON.stringify({error:"signup fail"}));
            }

        })
       
        
        
    }

})



// router.get("/api/users/:username",async (ctx, next)=>{
//     var sql = "select * from user where 'username'=? "
//     var arr = [ctx.query.username];

   

    router.get("/api/users/:username",async (ctx, next) =>{
        var sql = "select * from user where `username`=?";
        var arr = [ctx.query.username];
     const result =   await sqlFn(sql,arr);
            if(result){
                ctx.body = result
            }else{
                ctx.body = {}
            }
        
        console.log("cccccccc")
    })

   



//         if(data.length>0){
//             ctx.body = data
//         }
//         else{
//             console.log("aaa")
//             ctx.body = {};
//         }
//     })
//     console.log("bbb")
//     await next()
// })

// router.get("/api/users/:username",(req,res) =>{
//     var sql = "select * from user where `username`=?";
//     var arr = [req.params.username];
//     sqlFn(sql,arr,function(data){
//         if(data){
//             res.body = data
//         }else{
//             res.body = {}
//         }
//     })
// })

module.exports= router