
const clientController = require("../model/model.js");

const userController = {
    //Route root
    getRoot: async(req, res) => {
        res.status(200).json({msg:"The API is Running !!!"})
    },

    //Controller para listar todos os usuarios do banco
    listAllUsers: async(req, res) => {
        try {
            const client = await clientController.getAllUsers();
            res.status(200).json(client);
        }
        catch (error) {
            res.status(500).json({error: "Erro ao obter a lista de Usuários"})
        }
    },

    //Listar usuários por ID
    listByID: async(req, res) => {
        try {

            const sql = await clientController.getByID(req.params.id);

            if (sql.length > 0) {
                res.status(200).json(sql)
            }
            else{
                res.status(401).json({msg: 'Não existe registro no banco com este ID'})
                }
            }
        catch (error) {
            return error
        }
    },

    createNewUsers: async(req, res) => {
       const {id, nome, sobrenome, idade} = req.body;

       try {
            const sql = await clientController.getByID(id);

            if (sql.length > 0) {
                res.status(200).json({msg: 'O ID já está cadastrado!'});
            }
            else{
                await clientController.registerUser(id, nome, sobrenome, idade);
                res.status(201).json({msg: 'Usuário cadastrado com sucesso'})
            }
       }
       catch (error) {
            return error
       }

    },

        deleteUser: async (req ,res)=>{
        try{
            const sql = await clientController.getByID(req.params.id);

            if(sql.length > 0){
                await clientController.deleteUser(req.params.id);
                res.status(204).json({msg:"Usuário deletado com sucesso!!!"})
            }
            else{
                res.status(401).json({msg:"O ID não existe na base de dados"})
            }
        }
        catch(error) {
            res.status(500).json({error:"Erro ao tentar deletar o usuário"})
        }
    },

    updateUser: async (req, res) => {
        const {nome,sobrenome,idade} = req.body;

        try{
            const sql = await clientController.getByID(req.params.id);

            if (sql.length > 0) {
                await clientController.updateUser(nome, sobrenome, idade, req.params.id);
                res.status(200).json({msg: "Usuário atualizado com sucesso !!!"})
            }
            else{
                res.status(401).json({msg:" Erro ao atualizar o Usuário"})
            }
        }
        catch(error) {
            res.status(500).json({error: "Erro ao tentar atualizar o Usuário" + error})
        }
    },
};

module.exports = userController;