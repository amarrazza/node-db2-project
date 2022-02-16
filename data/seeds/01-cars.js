// exports.seed = async function(knex) {
//     await knex('cars').truncate();
//     return knex('cars').insert([
//         {vin: 1, make: 'Jeep', model: 'Wrangler', mileage: 10000, title: 'Au', transmission: 'auto'}
//     ])
// }

const cars = [
    {
        vin: 11111, 
        make: 'Jeep', 
        model: 'Wrangler', 
        mileage: 10000, 
        title: 'clean', 
        transmission: 'auto'
    },
    {
        vin: 12323, 
        make: 'Toyota', 
        model: 'Camry', 
        mileage: 100020, 
        title: 'clean', 
    },
    {
        vin: 1232323, 
        make: 'Tesla', 
        model: 'Model Y', 
        mileage: 1000, 
    }
]

exports.seed = async function(knex){
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}