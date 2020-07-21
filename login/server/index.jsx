    var Koa=require('koa');
    var router = require('koa-router')();
    const bodyParser = require('koa-bodyparser')

   const users = require("./routers/users")
    const auth = require("./routers/auth")



   var app=new Koa();


    app.use(bodyParser());

    
   

  
    

    app.use(auth.routes());
    app.use(users.routes());
    app.use(router.allowedMethods());

    app.listen(3031);   