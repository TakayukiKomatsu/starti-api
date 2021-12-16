import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cart from 'App/Models/Cart'

export default class CartsController {
  public async index({}: HttpContextContract) {
    const carts = await Cart.query().preload('products')
    return carts
  }

  public async create({ request }: HttpContextContract) {
    const data = request.only([
      'nome_do_cliente',
      'numero_do_pedido',
      'email',
      'status',
      'products',
    ])

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
    const data = request.only([
      'nome_do_cliente',
      'numero_do_pedido',
      'email',
      'status',
      'products',
    ])

    cart.merge(data)
    await cart.save()
    return cart
  }

  public async destroy({ params }: HttpContextContract) {
    const cart = await Cart.findOrFail(params.id)
    await cart.delete()
  }
}
