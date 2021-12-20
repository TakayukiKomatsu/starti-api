/* CRUD de produtos (nome, valor_unitario, quantidade). */
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public unit_price: number

  @column()
  public amount: number

  @column()
  public cart_id: number
}
