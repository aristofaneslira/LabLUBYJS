class VeiculoController{
    constructor(Veiculos, Negocios){
        this.Veiculos = Veiculos;
        this.Negocios = Negocios;
    }

    async getAll(req, res){
        try{
            const veiculos = await this.Veiculos.findAll();
            res.send(veiculos);
        }catch(err){
            res.status(400).send(err.message);
        }
    }

    async getById(req, res){
        const {params: { id } } = req;
        try{
            let veiculo = {};
            if(id === 'filtrar'){
                veiculo = await this.Veiculos.findAll({ where: { status: req.query.status }})
            }else{
                veiculo = await this.Veiculos.findByPk(id);
            }
            res.send(veiculo);
        }catch(err){
            res.status(400).send(err.message);
        }
    }

    async create(req, res){
        const veiculo = new this.Veiculos(req.body);
        try{
            await veiculo.save();
            res.status(201).send(veiculo);
        }catch(err){
            res.status(422).send(err.message);
        }
    }

    async update(req, res){
        const body = req.body;
        try{
            const veiculo = await this.Veiculos.findByPk(req.params.id);
            veiculo.marca = body.marca;
            veiculo.modelo = body.modelo;
            veiculo.ano = body.ano;
            veiculo.km = body.km;
            veiculo.cor = body.cor;
            veiculo.chassi = body.chassi;
            if(body.precoDeCompra){
                veiculo.precoDeCompra = body.precoDeCompra;
            }
            await veiculo.save();
            res.sendStatus(200);
        }catch(err){
            res.status(422).send(err.message);
        }
    }

    async delete(req, res){
        try{
            await this.Veiculos.destroy({
                where: {
                    id: req.params.id
                },
            });
            res.sendStatus(204);
        }catch(err){
            res.status(400).send(err.message);
        }
    }

    async vender(req, res){
        const STATUS = 'VENDIDO';
        await this.alterarStatus(req, res, STATUS);
    }

    async reservar(req, res){
        const STATUS = 'RESERVADO';
        await this.alterarStatus(req, res, STATUS);
    }

    async alterarStatus(req, res, status){
        const {params: { id } } = req;
        const negocio = new this.Negocios(req.body);
        negocio.data = new Date();
        negocio.status = status;
        negocio.veiculoId = id;
        try{
            const veiculo = await this.Veiculos.findByPk(id);
            veiculo.status = status;
            await negocio.save();
            await veiculo.save();
            res.status(201).send(negocio);
        }catch(err){
            res.status(422).send(err.message);
        }
    }
}
module.exports = VeiculoController;