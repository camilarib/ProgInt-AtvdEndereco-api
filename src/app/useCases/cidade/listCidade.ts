import { Request, Response } from 'express';
import { Cidade } from '../../models/Cidade';

export async function listCidade(req: Request, res: Response) { // funcao listar os produtos
	try {
		const cidade = await Cidade.find(); // consulta o BD e recebe os produtos disponiveis para listar, solicitando o GET

		res.json(cidade); 
	} catch (error) {
		console.log(error);
		res.sendStatus(500); // erro do server
	}
}