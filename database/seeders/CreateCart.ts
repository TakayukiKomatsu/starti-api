import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Cart from 'App/Models/Cart'

export default class CreateCartSeeder extends BaseSeeder {
  public async run() {
    await Cart.create({
      name: 'Lebbie McKee',
      order_number: 3140,
      email: 'lmckee0@odnoklassniki.ru',
      status: 'Cancelado',
    })
  }
}
