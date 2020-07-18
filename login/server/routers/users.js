const router = require('koa-router')();
const isEmpty = require("lodash/isEmpty")
const validator = require("validator")


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
    
    ctx.body=ctx.request.body;  //获取表单提交的数据

    const {error,isValid} = validatorInput(ctx.body)
    if(!isValid){

        console.log(error)
        ctx.throw(400,JSON.stringify(error));
        
    }
    if(isValid){
        ctx.body = {success:true}
    }

})



module.exports= router