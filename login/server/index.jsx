    var Koa=require('koa');
    var router = require('koa-router')();
    const bodyParser = require('koa-bodyparser')

   const users = require("./routers/users")




   var app=new Koa();


    app.use(bodyParser());

    
   

  
    


    app.use(users.routes());
    app.use(router.allowedMethods());

    app.listen(3031);   