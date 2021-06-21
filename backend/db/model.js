import { pool } from './pool';

class Model {

	constructor(table) {
		this.pool = pool;
		this.table = table;
		this.pool.on('error', (err, client) => `Error, ${err}, on idle client${client}`);
	}

	async select(columns, clause) {
		if (clause !== undefined) {
			let query = `SELECT ${columns} FROM ${this.table}`;
		}
		else {
			let query = `SELECT ${columns};`;
		}

		if (clause) query += clause;
		return this.pool.query(query);
	}
}

export default Model;