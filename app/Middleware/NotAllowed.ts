import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cart from 'App/Models/Cart'

export default class NotAllowed {
  public async handle({ response, params }: HttpContextContract, next: () => Promise<void>) {
    const cart = await Cart.findOrFail(params.id)

    if (cart.status === 'Pago' || cart.status === 'Cancelado') {
      return response.forbidden({ error: { message: 'Operação não permitida.' } })
    }
    await next()
  }
}
