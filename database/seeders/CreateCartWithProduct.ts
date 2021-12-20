import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Cart from 'App/Models/Cart'

export default class CreateCartWithProductSeeder extends BaseSeeder {
  public async run() {
    const cart = await Cart.create({
      name: 'Normy Hallwell',
      order_number: 5516,
      email: 'nhallwell0@un.org',
      status: 'Cancelado',
    })

    await cart.related('products').createMany([
      {
        name: 'Hickory Smoke, Liquid',
        unit_price: 22.8,
        amount: 53,
      },
      {
        name: 'Tomatoes - Yellow Hot House',
        unit_price: 17.31,
        amount: 17,
      },
      {
        name: 'Tomatoes - Vine Ripe, Red',
        unit_price: 71.85,
        amount: 66,
      },
      {
        name: 'Table Cloth 81x81 White',
        unit_price: 64.02,
        amount: 90,
      },
      {
        name: 'Potatoes - Mini White 3 Oz',
        unit_price: 48.49,
        amount: 34,
      },
    ])
  }
}
