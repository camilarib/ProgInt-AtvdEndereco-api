import {model, Schema } from "mongoose";

export const Endereco = model("Endereco", new Schema({ //criar nova categoria
	name: { // atributo nome da categoria de tipo str
		type: String,
		required: true, 
	},
	numero: { // icon da categoria 
		type: String,
		required: true,
	},
    complemento: {
        type: String,
        required: false,
    },
    bairro: {
        type: Schema.Types.ObjectId,
        required: false,
    },
    cidade: {
        type: Schema.Types.ObjectId,
        required: true
    }
}));