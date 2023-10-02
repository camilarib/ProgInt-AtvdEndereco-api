import { Request, Response } from 'express';
import { Bairro } from '../../models/Bairro';

export async function listBairro(req: Request, res: Response) { // funcao assincrona para listar os produtos
	try {
		const bairro = await Bairro.find(); // consulta o BD e recebe os produtos disponiveis para listar, solicitando o GET

		res.json(bairro); // resposta HTTP em formato json dos produtos 
	} catch (error) {
		console.log(error);
		res.sendStatus(500); // erro 
	}
}