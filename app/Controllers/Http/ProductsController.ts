import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'
import ProductValidator from 'App/Validators/ProductValidator'

export default class ProductsController {
  public async index({}: HttpContextContract) {
    const products = await Product.all()
    return products
  }

  public async create({ request }: HttpContextContract) {
    const data = await request.validate(ProductValidator)
    const newProduct = await Product.create(data)
    return newProduct
  }

  public async show({ params }: HttpContextContract) {
    const product = await Product.findOrFail(params.id)
    return product
  }

  public async update({ request, params }: HttpContextContract) {
    const data = await request.validate(ProductValidator)
    const product = await Product.findOrFail(params.id)

    product.merge(data)
    await product.save()
    return product
  }

  public async destroy({ params }: HttpContextContract) {
    const product = await Product.findOrFail(params.id)
    await product.delete()
  }
}
