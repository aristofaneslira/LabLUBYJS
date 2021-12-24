class FuncionarioController{
    constructor(Funcionarios){
        this.Funcionarios = Funcionarios;
    }

    async getAll(req, res){
        try{
            const funcionarios = await this.Funcionarios.findAll();
            res.send(funcionarios);
        }catch(err){
            res.status(400).send(err.message);
        }
    }

    async getById(req, res){
        const {params: { id } } = req;
        try{
            const funcionario = await this.Funcionarios.findByPk(id, {include: ['negocios']});
            res.send(funcionario);
        }catch(err){
            res.status(400).send(err.message);
        }
    }

    async create(req, res){
        const funcionario = new this.Funcionarios(req.body);
        try{
            await funcionario.save();
            res.status(201).send(funcionario);
        }catch(err){
            res.status(422).send(err.message);
        }
    }

    async update(req, res){
        const body = req.body;
        try{
            const funcionario = await this.Funcionarios.findByPk(req.params.id);
            funcionario.cpf = body.cpf;
            funcionario.nome = body.nome;
            funcionario.email = body.email;
            if(body.senha){
                funcionario.senha = body.senha;
            }
            await funcionario.save();
            res.sendStatus(200);
        }catch(err){
            res.status(422).send(err.message);
        }
    }

    async delete(req, res){
        try{
            await this.Funcionarios.destroy({
                where: {
                    id: req.params.id
                },
            });
            res.sendStatus(204);
        }catch(err){
            res.status(400).send(err.message);
        }
    }
}
module.exports = FuncionarioController;