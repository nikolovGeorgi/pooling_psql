const args = process.argv[2];
const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

client.connect((err) => {
  if (err) {
   return console.error("Connection Error", err);
 }
 console.log("Searching ...");
 client.query("SELECT first_name, last_name, birthdate FROM famous_people WHERE first_name = $1 OR last_name = $1",[args], (err, result) => {
   if (err) {
     return console.error("error running query", err);
   }
   console.log(result.rows[0]);
   client.end();
 });
});
