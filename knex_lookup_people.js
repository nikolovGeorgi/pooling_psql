const args = process.argv[2];
const knex = require('./knexfile');
knex.select('*')
.from('famous_people')
.where('first_name', '=', args)
.orWhere('last_name', '=', args)
.then(function(rows) { console.log(rows) })
.catch(function(error) { console.error(error) } destroy());
// .then(() => {destory()});
