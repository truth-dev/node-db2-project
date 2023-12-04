// STRETCH

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars'). insert([
        {cars_make:'Chevy', cars_model:'Malibu', 
        mileage:25, vin_num:'jk1245310dj'}
    ])
}
