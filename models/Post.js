const db = require('./db')

const Post = db.sequelize.define('cadastro', {

    Nome: {
        type: db.Sequelize.STRING
    },
    Email: {
        type: db.Sequelize.TEXT
    },

    Senha: {
        type: db.Sequelize.STRING

    },
    Data: {
    type: db.Sequelize.STRING(8)
 }
})

////Post.sync({force: true}) 

module.exports = Post 
