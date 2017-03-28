const args = process.argv.slice(2);
const knex = require('./knexfile');
knex('famous_people').insert([{first_name: args[0],last_name: args[1],birthdate: args[2]}])
.then(function(result){knex.destroy()})
