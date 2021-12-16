/* CRUD de produtos (nome, valor_unitario, quantidade). */
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public valor_unitario: number

  @column()
  public quantidade: number

  @column()
  public cart_id: number
}
