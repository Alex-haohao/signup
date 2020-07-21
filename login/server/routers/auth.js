const sqlFn = require("../mysql/index")
const router = require('koa-router')();
const jwt = require('jsonwebtoken')
const config = require('../routers/config')

router.post('/api/auth',async (ctx)=>{
    ctx.body=ctx.request.body;  
    const{username,password} = ctx.body;
    const sql = "select * from user where `username` =? AND `password`=?"
    const arr = [username,password];

    const result = await sqlFn(sql,arr);

    if(result.length>0){

        ctx.body = {success:true}
        const token = jwt.sign({
            id:result[0],
            username:result[0].username
        },config.jwtSecreat)
        ctx.body = token
    }else{
        console.log("is fail fail")
    ctx.throw(401,"login fail, password is wrong", { expose: true });
       // ctx.throw(400,JSON.stringify({error:"signup fail"}));

    }
})

module.exports= router