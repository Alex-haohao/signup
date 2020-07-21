const mysql = require("mysql");

var client = mysql.createConnection({
    host:"localhost",
    user:"root", 
    password:"",
    database:"Alexuser"
})

async function sqlFn(sql,arr){
    return new Promise((resolve, reject)=>{
        client.query(sql,arr, function(error,result){
            if(error){
                console.log(new Error(error));
            }
            else{resolve (result)}
        })
    })  
}



module.exports = sqlFn