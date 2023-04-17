import { Sequelize } from "sequelize";

const db = new Sequelize("crud_db", "root", "", {
  host: "localhost",
  get host() {
    return this._host;
  },
  set host(value) {
    this._host = value;
  },
  dialect: "mysql",
});

export default db;
