import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cart from 'App/Models/Cart'
import CartValidator from 'App/Validators/CartValidator'

export default class CartsController {
  public async index({}: HttpContextContract) {
    const carts = await Cart.query().preload('products')
    return carts
  }

  public async create({ request }: HttpContextContract) {
    const data = await request.validate(CartValidator)

    const newCart = await Cart.create(data)
    await newCart.related('products').createMany(data.products)
    return newCart
  }

  public async show({ params }: HttpContextContract) {
    const cart = await Cart.query().preload('products').where('id', params.id).firstOrFail()
    return cart
  }

  public async update({ request, params }: HttpContextContract) {
    const cart = await Cart.findOrFail(params.id)
    const data = await request.validate(CartValidator)

    cart.merge(data)
    await cart.save()
    return cart
  }

  public async destroy({ params }: HttpContextContract) {
    const cart = await Cart.findOrFail(params.id)
    await cart.delete()
  }
}
