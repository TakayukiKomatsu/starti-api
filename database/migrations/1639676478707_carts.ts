import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Carts extends BaseSchema {
  protected tableName = 'carts'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome_do_cliente').notNullable()
      table.integer('numero_do_pedido').notNullable()
      table.string('email').notNullable()
      table.enu('status', ['Em Aberto', 'Pago', 'Cancelado']).defaultTo('Em Aberto')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
