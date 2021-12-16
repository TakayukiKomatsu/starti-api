import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Cart from 'App/Models/Cart'

export default class CreateCartSeeder extends BaseSeeder {
  public async run() {
    await Cart.create({
      nome_do_cliente: 'Lebbie McKee',
      numero_do_pedido: 3140,
      email: 'lmckee0@odnoklassniki.ru',
      status: 'Cancelado',
    })
  }
}
