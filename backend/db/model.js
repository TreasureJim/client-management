const pool = require('./pool');

class Model {

	constructor(table) {
		this.pool = pool;
		this.table = table;
		this.pool.on('error', (err, client) => `Error, ${err}, on idle client${client}`);
	}

	async select(columns, clause=undefined, join=undefined) {
		let query;
		if (clause !== undefined) {
			query = `SELECT ${columns} FROM ${this.table} WHERE ${clause}`;
		}
		else {
			query = `SELECT ${columns} FROM ${this.table};`;
		}

		return this.pool.query(query);
	}

	async command(command) {
		let query = `SELECT ${command};`;
		return this.pool.query(query);
	}
}

module.exports = Model;