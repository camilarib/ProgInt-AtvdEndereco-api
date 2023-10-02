import {model, Schema } from "mongoose";

export const Cidade = model("Cidade", new Schema({ //criar nova categoria
	name: { //nome da categoria 
		type: String,
		required: true, 
	},
    estado:{
        type: String,
		required: true, 
    }
}));