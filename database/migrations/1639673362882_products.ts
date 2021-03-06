/**
 *  A Coluna quantidade está como float pois não há como ter certeza de qual unidade de medida será armazenada
 */
import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Products extends BaseSchema {
  protected tableName = 'products'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.float('unit_price', 15, 2).notNullable().unsigned()
      table.float('amount').notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
