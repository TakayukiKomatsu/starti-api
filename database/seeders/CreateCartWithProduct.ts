import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Cart from 'App/Models/Cart'

export default class CreateCartWithProductSeeder extends BaseSeeder {
  public async run() {
    const cart = await Cart.create({
      nome_do_cliente: 'Normy Hallwell',
      numero_do_pedido: 5516,
      email: 'nhallwell0@un.org',
      status: 'Cancelado',
    })

    await cart.related('products').createMany([
      {
        nome: 'Hickory Smoke, Liquid',
        valor_unitario: 22.8,
        quantidade: 53,
      },
      {
        nome: 'Tomatoes - Yellow Hot House',
        valor_unitario: 17.31,
        quantidade: 17,
      },
      {
        nome: 'Tomatoes - Vine Ripe, Red',
        valor_unitario: 71.85,
        quantidade: 66,
      },
      {
        nome: 'Table Cloth 81x81 White',
        valor_unitario: 64.02,
        quantidade: 90,
      },
      {
        nome: 'Potatoes - Mini White 3 Oz',
        valor_unitario: 48.49,
        quantidade: 34,
      },
    ])
  }
}
