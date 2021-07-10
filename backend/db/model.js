const pool = require('./pool');

class Model {

	constructor(table) {
		this.pool = pool;
		this.table = table;
		this.pool.on('error', (err, client) => `Error, ${err}, on idle client${client}`);
	}

	// select statement to table 
	async select(columns = "*", clause, join) {
		let query;
		if (join === undefined) {
			// no join with clause
			if (clause !== undefined) {
				query = `SELECT ${columns} FROM ${this.table} WHERE ${clause}`;
			}
			// no join and no clause
			else {
				query = `SELECT ${columns} FROM ${this.table};`;
			}
		}
		else {
			// join with clause
			if (clause !== undefined) {
				query = `SELECT ${columns} FROM ${this.table} WHERE ${clause} ${join}`;
			}
			// join and no clause
			else {
				query = `SELECT ${columns} FROM ${this.table} ${join};`;
			}
		}

		// console.log(query);
		return this.pool.query(query);
	}

	// insert rows
	async insert(columns, rows) {
		let query;
		if (columns === undefined) { query = `INSERT INTO ${this.table} VALUES `; }
		else { query = `INSERT INTO ${this.table}(${columns}) VALUES `; }

		rows.forEach((element, index, array) => {
			query += `(${element})`;
			if (index < array.lengh - 1) { query += ', '; }
			else { query += ';'; }
		});

		console.log(query);
		return this.pool.query(query);
	}

	// generic command
	async command(command) {
		let query = `${command};`;
		return this.pool.query(query);
	}
}

module.exports = Model;