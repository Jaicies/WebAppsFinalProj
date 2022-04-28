

const { Client } = require("pg")

const client = new Client({
    host:"localhost",
    user:"postgres",
    port:"5432",
    password: "password",
    database: "jaiciecongress"
})

function getRandomWord() {
    client.connect();
    var message = ""
    client.query(`select word from words order by random() limit 1;`, (err,res)=>{
        if(!err){
           console.log(res.rows);
           //message = res.rows[0].message
        }
        else{
            console.log(err.message);
        }
        client.end
    })
    return message
}
 getRandomWord()
