import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Product from 'App/Models/Product'

export default class CreateManyProductSeeder extends BaseSeeder {
  public async run() {
    await Product.createMany([
      {
        nome: 'Pasta - Fett Alfredo, Single Serve',
        valor_unitario: 90.62,
        quantidade: 70,
      },
      {
        nome: 'Beef - Outside, Round',
        valor_unitario: 67.31,
        quantidade: 50,
      },
      {
        nome: 'Salmon - Atlantic, No Skin',
        valor_unitario: 41.26,
        quantidade: 79,
      },
      {
        nome: 'The Pop Shoppe - Black Cherry',
        valor_unitario: 1.85,
        quantidade: 25,
      },
      {
        nome: 'Wasabi Paste',
        valor_unitario: 51.89,
        quantidade: 67,
      },
      {
        nome: 'Pasta - Canelloni, Single Serve',
        valor_unitario: 47.48,
        quantidade: 74,
      },
      {
        nome: 'Pizza Pizza Dough',
        valor_unitario: 78.53,
        quantidade: 56,
      },
      {
        nome: 'Lid Coffee Cup 8oz Blk',
        valor_unitario: 80.99,
        quantidade: 4,
      },
      {
        nome: 'Oil - Hazelnut',
        valor_unitario: 72.12,
        quantidade: 19,
      },
      {
        nome: 'Whmis - Spray Bottle Trigger',
        valor_unitario: 64.6,
        quantidade: 96,
      },
      {
        nome: 'Pork - European Side Bacon',
        valor_unitario: 29.03,
        quantidade: 44,
      },
      {
        nome: 'Liners - Baking Cups',
        valor_unitario: 92.66,
        quantidade: 70,
      },
      {
        nome: 'Schnappes Peppermint - Walker',
        valor_unitario: 44.42,
        quantidade: 27,
      },
      {
        nome: 'Soho Lychee Liqueur',
        valor_unitario: 32.96,
        quantidade: 66,
      },
      {
        nome: 'Oven Mitts 17 Inch',
        valor_unitario: 16.26,
        quantidade: 77,
      },
      {
        nome: 'Bread - Roll, Canadian Dinner',
        valor_unitario: 40.83,
        quantidade: 17,
      },
      {
        nome: 'Tomato - Tricolor Cherry',
        valor_unitario: 14.78,
        quantidade: 87,
      },
      {
        nome: 'Cheese - Swiss Sliced',
        valor_unitario: 59.06,
        quantidade: 41,
      },
      {
        nome: 'Beef - Salted',
        valor_unitario: 19.87,
        quantidade: 16,
      },
      {
        nome: 'Hinge W Undercut',
        valor_unitario: 33.56,
        quantidade: 41,
      },
      {
        nome: 'Cloves - Ground',
        valor_unitario: 89.77,
        quantidade: 63,
      },
      {
        nome: 'Nescafe - Frothy French Vanilla',
        valor_unitario: 67.77,
        quantidade: 88,
      },
      {
        nome: 'Soup - French Onion',
        valor_unitario: 17.94,
        quantidade: 46,
      },
      {
        nome: 'Cheese - Fontina',
        valor_unitario: 71.59,
        quantidade: 49,
      },
      {
        nome: 'Buffalo - Short Rib Fresh',
        valor_unitario: 31.22,
        quantidade: 64,
      },
      {
        nome: 'Wine - Chianti Classico Riserva',
        valor_unitario: 73.59,
        quantidade: 67,
      },
      {
        nome: 'Paste - Black Olive',
        valor_unitario: 25.38,
        quantidade: 58,
      },
      {
        nome: 'Flower - Carnations',
        valor_unitario: 53.17,
        quantidade: 85,
      },
      {
        nome: 'Burger Veggie',
        valor_unitario: 54.7,
        quantidade: 71,
      },
      {
        nome: 'Gatorade - Xfactor Berry',
        valor_unitario: 38.3,
        quantidade: 58,
      },
      {
        nome: 'Tomatoes',
        valor_unitario: 79.93,
        quantidade: 70,
      },
      {
        nome: 'Pork - Kidney',
        valor_unitario: 37.71,
        quantidade: 63,
      },
      {
        nome: 'Flower - Carnations',
        valor_unitario: 69.45,
        quantidade: 37,
      },
      {
        nome: 'Cornstarch',
        valor_unitario: 85.59,
        quantidade: 11,
      },
      {
        nome: 'Cocoa Feuilletine',
        valor_unitario: 92.43,
        quantidade: 16,
      },
      {
        nome: 'Pork - Suckling Pig',
        valor_unitario: 74.66,
        quantidade: 64,
      },
      {
        nome: 'Crackers - Graham',
        valor_unitario: 56.03,
        quantidade: 54,
      },
      {
        nome: 'Oxtail - Cut',
        valor_unitario: 64.37,
        quantidade: 78,
      },
      {
        nome: 'Beef - Sushi Flat Iron Steak',
        valor_unitario: 82.54,
        quantidade: 67,
      },
      {
        nome: 'Turnip - White, Organic',
        valor_unitario: 15.81,
        quantidade: 50,
      },
      {
        nome: 'Cut Wakame - Hanawakaba',
        valor_unitario: 57.55,
        quantidade: 56,
      },
      {
        nome: 'Pastry - Raisin Muffin - Mini',
        valor_unitario: 39.21,
        quantidade: 67,
      },
      {
        nome: 'Southern Comfort',
        valor_unitario: 5.46,
        quantidade: 39,
      },
      {
        nome: 'Venison - Racks Frenched',
        valor_unitario: 93.19,
        quantidade: 75,
      },
      {
        nome: 'Flour - Bread',
        valor_unitario: 45.64,
        quantidade: 25,
      },
      {
        nome: 'Oil - Peanut',
        valor_unitario: 31.58,
        quantidade: 2,
      },
      {
        nome: 'Puree - Raspberry',
        valor_unitario: 6.4,
        quantidade: 98,
      },
      {
        nome: 'Coconut - Shredded, Unsweet',
        valor_unitario: 60.35,
        quantidade: 82,
      },
      {
        nome: 'Wine - Sogrape Mateus Rose',
        valor_unitario: 10.23,
        quantidade: 48,
      },
      {
        nome: 'Jam - Marmalade, Orange',
        valor_unitario: 87.89,
        quantidade: 83,
      },
    ])
  }
}
