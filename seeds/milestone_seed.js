exports.seed = function(knex, Promise) {
  return knex('milestones').del()
    .then(function () {
      return Promise.all([
        knex('milestones').insert({id: 1, colName: 'rowValue1'}),
        knex('milestones').insert({id: 1, colName: 'rowValue1'}),
        knex('milestones').insert({id: 1, colName: 'rowValue1'})
      ]);
    });
};
