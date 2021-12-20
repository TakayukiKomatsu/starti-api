import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Product from './Product'

export default class Cart extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public order_number: number

  @column()
  public email: string

  @column()
  public status: 'Em Aberto' | 'Pago' | 'Cancelado'

  @hasMany(() => Product, {
    foreignKey: 'cart_id',
  })
  public products: HasMany<typeof Product>
}
