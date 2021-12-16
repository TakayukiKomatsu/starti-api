import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cart from 'App/Models/Cart'

export default class CartsController {
  public async index({}: HttpContextContract) {
    const carts = await Cart.query().preload('products')
    return carts
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
