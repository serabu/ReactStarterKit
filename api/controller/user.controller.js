const db = require("../db");

class UseController {
  async createUser(req, res) {
    try {
      const { first_name, second_name, age, email, position } = req.body.data;
      const newPerson = await db.query(
        "INSERT INTO users (first_name, second_name, age, email, position) values ($1, $2, $3, $4, $5) RETURNING *",
        [first_name, second_name, age, email, position]
      );
      res.json(newPerson.rows[0]);
    } catch (e) {
      console.log(e);
      return res.status(404).json({ message: "404" });
    }
  }

  async getUsers(req, res) {
    try {
      const users = await db.query("SELECT * FROM users");
      res.json(users.rows);
    } catch (e) {
      console.log(e);
      return res.status(404).json({ message: "404" });
    }
  }

  async getOneUser(req, res) {
    try {
      const id = req.query.id;
      const user = await db.query("SELECT * FROM users where id = $1", [id]);
      res.json(user.rows[0]);
    } catch (e) {
      console.log(e);
      return res.status(404).json({ message: "404" });
    }
  }

  async updateUser(req, res) {
    try {
      const { first_name, second_name, age, email, position } = req.body.data;
      const { id } = req.body;
      const user = await db.query(
        "UPDATE users set first_name = $1, second_name = $2, age = $3, email = $4, position = $5 where id = $6 ",
        [first_name, second_name, age, email, position, id]
      );
      res.json(user.rows[0]);
    } catch (e) {
      console.log(e);
      return res.status(404).json({ message: "404" });
    }
  }

  async deleteUser(req, res) {
    try {
      const id = req.query.id;
      const user = await db.query("DELETE FROM users where id = $1;", [id]);
      res.json(user.rows[0]);
    } catch (e) {
      console.log(e);
      return res.status(404).json({ message: "404" });
    }
  }
}

module.exports = new UseController();

