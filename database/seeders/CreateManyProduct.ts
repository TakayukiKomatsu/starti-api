import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Product from 'App/Models/Product'

export default class CreateManyProductSeeder extends BaseSeeder {
  public async run() {
    await Product.createMany([
      {
        name: 'Pasta - Fett Alfredo, Single Serve',
        unit_price: 90.62,
        amount: 70,
      },
      {
        name: 'Beef - Outside, Round',
        unit_price: 67.31,
        amount: 50,
      },
      {
        name: 'Salmon - Atlantic, No Skin',
        unit_price: 41.26,
        amount: 79,
      },
      {
        name: 'The Pop Shoppe - Black Cherry',
        unit_price: 1.85,
        amount: 25,
      },
      {
        name: 'Wasabi Paste',
        unit_price: 51.89,
        amount: 67,
      },
      {
        name: 'Pasta - Canelloni, Single Serve',
        unit_price: 47.48,
        amount: 74,
      },
      {
        name: 'Pizza Pizza Dough',
        unit_price: 78.53,
        amount: 56,
      },
      {
        name: 'Lid Coffee Cup 8oz Blk',
        unit_price: 80.99,
        amount: 4,
      },
      {
        name: 'Oil - Hazelnut',
        unit_price: 72.12,
        amount: 19,
      },
      {
        name: 'Whmis - Spray Bottle Trigger',
        unit_price: 64.6,
        amount: 96,
      },
      {
        name: 'Pork - European Side Bacon',
        unit_price: 29.03,
        amount: 44,
      },
      {
        name: 'Liners - Baking Cups',
        unit_price: 92.66,
        amount: 70,
      },
      {
        name: 'Schnappes Peppermint - Walker',
        unit_price: 44.42,
        amount: 27,
      },
      {
        name: 'Soho Lychee Liqueur',
        unit_price: 32.96,
        amount: 66,
      },
      {
        name: 'Oven Mitts 17 Inch',
        unit_price: 16.26,
        amount: 77,
      },
      {
        name: 'Bread - Roll, Canadian Dinner',
        unit_price: 40.83,
        amount: 17,
      },
      {
        name: 'Tomato - Tricolor Cherry',
        unit_price: 14.78,
        amount: 87,
      },
      {
        name: 'Cheese - Swiss Sliced',
        unit_price: 59.06,
        amount: 41,
      },
      {
        name: 'Beef - Salted',
        unit_price: 19.87,
        amount: 16,
      },
      {
        name: 'Hinge W Undercut',
        unit_price: 33.56,
        amount: 41,
      },
      {
        name: 'Cloves - Ground',
        unit_price: 89.77,
        amount: 63,
      },
      {
        name: 'Nescafe - Frothy French Vanilla',
        unit_price: 67.77,
        amount: 88,
      },
      {
        name: 'Soup - French Onion',
        unit_price: 17.94,
        amount: 46,
      },
      {
        name: 'Cheese - Fontina',
        unit_price: 71.59,
        amount: 49,
      },
      {
        name: 'Buffalo - Short Rib Fresh',
        unit_price: 31.22,
        amount: 64,
      },
      {
        name: 'Wine - Chianti Classico Riserva',
        unit_price: 73.59,
        amount: 67,
      },
      {
        name: 'Paste - Black Olive',
        unit_price: 25.38,
        amount: 58,
      },
      {
        name: 'Flower - Carnations',
        unit_price: 53.17,
        amount: 85,
      },
      {
        name: 'Burger Veggie',
        unit_price: 54.7,
        amount: 71,
      },
      {
        name: 'Gatorade - Xfactor Berry',
        unit_price: 38.3,
        amount: 58,
      },
      {
        name: 'Tomatoes',
        unit_price: 79.93,
        amount: 70,
      },
      {
        name: 'Pork - Kidney',
        unit_price: 37.71,
        amount: 63,
      },
      {
        name: 'Flower - Carnations',
        unit_price: 69.45,
        amount: 37,
      },
      {
        name: 'Cornstarch',
        unit_price: 85.59,
        amount: 11,
      },
      {
        name: 'Cocoa Feuilletine',
        unit_price: 92.43,
        amount: 16,
      },
      {
        name: 'Pork - Suckling Pig',
        unit_price: 74.66,
        amount: 64,
      },
      {
        name: 'Crackers - Graham',
        unit_price: 56.03,
        amount: 54,
      },
      {
        name: 'Oxtail - Cut',
        unit_price: 64.37,
        amount: 78,
      },
      {
        name: 'Beef - Sushi Flat Iron Steak',
        unit_price: 82.54,
        amount: 67,
      },
      {
        name: 'Turnip - White, Organic',
        unit_price: 15.81,
        amount: 50,
      },
      {
        name: 'Cut Wakame - Hanawakaba',
        unit_price: 57.55,
        amount: 56,
      },
      {
        name: 'Pastry - Raisin Muffin - Mini',
        unit_price: 39.21,
        amount: 67,
      },
      {
        name: 'Southern Comfort',
        unit_price: 5.46,
        amount: 39,
      },
      {
        name: 'Venison - Racks Frenched',
        unit_price: 93.19,
        amount: 75,
      },
      {
        name: 'Flour - Bread',
        unit_price: 45.64,
        amount: 25,
      },
      {
        name: 'Oil - Peanut',
        unit_price: 31.58,
        amount: 2,
      },
      {
        name: 'Puree - Raspberry',
        unit_price: 6.4,
        amount: 98,
      },
      {
        name: 'Coconut - Shredded, Unsweet',
        unit_price: 60.35,
        amount: 82,
      },
      {
        name: 'Wine - Sogrape Mateus Rose',
        unit_price: 10.23,
        amount: 48,
      },
      {
        name: 'Jam - Marmalade, Orange',
        unit_price: 87.89,
        amount: 83,
      },
    ])
  }
}
