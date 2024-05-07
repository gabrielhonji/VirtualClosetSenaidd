const connection = require("../config/db")

const userModel = {
    getAllUsers: async () => {
        const [result] = await connection.query("SELECT * FROM cadastro_senai")
        .catch(erro => console.log(erro));
        return result
    },

    getByID: async (id) => {
        const [result] = await connection.query("SELECT * FROM cadastro_senai WHERE id=?",[id])
        .catch(erro => console.log(erro));
        return result
    },

    registerUser: async (id, nome, sobrenome, idade) => {
        const [result] = await connection.query ("INSERT INTO cadastro_senai values (?, ?, ?, ?)", [id, nome, sobrenome, idade])
        .catch(erro => console.log(erro));
        return result
    },

    deleteUser: async(id)=>{
        const [result] = await connection.query("DELETE FROM cadastro_senai where id=?",[id])
        .catch(erro => console.log(erro));
        return result
    },

    updateUser: async(nome, sobrenome, idade,id) => {
        const [result] = await connection.query("UPDATE cadastro_senai SET nome=?, sobrenome=?, idade=? WHERE id=?", [nome, sobrenome, idade,id])
        .catch(erro  => console.log(erro));
        return result
    },

    
}

module.exports = userModel;