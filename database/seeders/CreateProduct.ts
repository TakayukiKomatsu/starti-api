import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Product from 'App/Models/Product'

export default class CreateProductSeeder extends BaseSeeder {
  public async run() {
    await Product.create({ name: 'Cheese - Grie Des Champ', unit_price: 91.51, amount: 88 })
  }
}
