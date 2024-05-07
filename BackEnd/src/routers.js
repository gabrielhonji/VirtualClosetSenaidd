const express = require('express');
const clientController = require('../controller/controller');
const router = express.Router();

router.get('/', clientController.getRoot); //Rota raiz
router.get('/api/read', clientController.listAllUsers); // Rota para listar todos os Usuários
router.get('/api/read/:id', clientController.listByID); // Rota para listar um usuário por ID
router.post('/api/create', clientController.createNewUsers);//ROTA para Criar novo usuário
router.delete('/api/deletar/:id', clientController.deleteUser); //ROta para deletar usuário
router.put('/api/atualizar/gabriel/honji/:id', clientController.updateUser) //Rota para atualizar dados do usuário

module.exports = router;