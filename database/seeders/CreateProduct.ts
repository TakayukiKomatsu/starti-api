import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Product from 'App/Models/Product'

export default class CreateProductSeeder extends BaseSeeder {
  public async run() {
    await Product.create({ nome: 'Cheese - Grie Des Champ', valor_unitario: 91.51, quantidade: 88 })
  }
}
