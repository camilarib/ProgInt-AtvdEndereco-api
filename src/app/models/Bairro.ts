import {model, Schema } from "mongoose";

export const Bairro = model("Bairro", new Schema({ //criar nova categoria
	name: { //  nome da categoria
		type: String,
		required: true, 
	}
}));