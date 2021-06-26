const pool = require('./pool');

class Model {

	constructor(table) {
		this.pool = pool;
		this.table = table;
		this.pool.on('error', (err, client) => `Error, ${err}, on idle client${client}`);
	}

	async select(columns, clause) {
		let query;
		if (clause !== undefined) {
			query = `SELECT ${columns} FROM ${this.table} WHERE ${clause}`;
		}
		else {
			query = `SELECT ${columns};`;
		}

		return this.pool.query(query);
	}
}

module.exports = Model;