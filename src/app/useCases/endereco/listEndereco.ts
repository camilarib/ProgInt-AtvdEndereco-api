import { Request, Response } from 'express';
import { Endereco } from '../../models/Endereco';

export async function listEndereco(req: Request, res: Response) { // funcao para listar os produtos
	try {
		const products = await Endereco.find(); //consulta o BD e recebe os produtos disponiveis para listar, solicitando o GET

		res.json(products); 
	} catch (error) {
		console.log(error);
		res.sendStatus(500); // erro do server
	}
}