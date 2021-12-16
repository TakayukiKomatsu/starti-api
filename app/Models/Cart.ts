import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Product from './Product'

export default class Cart extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome_do_cliente: string

  @column()
  public numero_do_pedido: number

  @column()
  public email: string

  @column()
  public status: 'Em Aberto' | 'Pago' | ' Cancelado'

  @hasMany(() => Product)
  public products: HasMany<typeof Product>
}
