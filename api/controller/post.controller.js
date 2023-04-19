class PostController {
    async createPost(req, res){
        const {first_name, second_name, age, email, position, user_id} = req.body
        const newPost = await db.query('INSERT INTO postUsers (first_name, second_name, age, email, position, user_id) values ($1, $2, $3, $4, $5, $6) RETURNING *', [first_name, second_name, age, email, position, user_id])
        res.json(newPost.rows[0])

    }

    async getPostByUser(req, res){
        const id = req.query.id
        const user = await db.query('SELECT * FROM postUsers where id = $1', id)
        res.json(user.rows)
    }
}

module.exports = new PostController()