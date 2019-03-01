
exports.up = (knex, Promise) =>{
    return knex.schema.table('users', (table) =>{
        table.integer('role_id').unsigned().references('id').inTable('role');
        // add foreign key into the table users
    });
};

exports.down = (knex, Promise) =>{
    return knex.schema.table('users', (table) =>{
        table.dropColumn('role_id');
    });
};
