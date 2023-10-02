import { Request, Response } from 'express';
import { Bairro } from '../../models/Bairro';

export async function createBairro(req: Request, res: Response) { // Cria nova categoria
	try {
		const {name} = req.body; // extrai o icon e nome para a solicitação post
		const bairro = await Bairro.create({name}); 
		res.status(201).json(bairro); 
	} catch (error) {
		console.log(error);
		res.sendStatus(500);//erro
	}
}