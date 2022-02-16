// exports.seed = async function(knex) {
//     await knex('cars').truncate();
//     return knex('cars').insert([
//         {vin: 1, make: 'Jeep', model: 'Wrangler', mileage: 10000, title: 'Au', transmission: 'auto'}
//     ])
// }

const cars = [
    {
        vin: 'JH4CC2560PC005719', 
        make: 'Jeep', 
        model: 'Wrangler', 
        mileage: 10000, 
        title: 'clean', 
        transmission: 'auto'
    },
    {
        vin: '5GZCZ23D13S847842', 
        make: 'Toyota', 
        model: 'Camry', 
        mileage: 100020, 
        title: 'clean', 
    },
    {
        vin: 'SAJWA2GEXBMV00832', 
        make: 'Tesla', 
        model: 'Model Y', 
        mileage: 1000, 
    }
]

exports.seed = async function(knex){
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}