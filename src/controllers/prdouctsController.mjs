import { mdlApp } from "../models/productsModels.mjs";

export class ctrlApp{

 static async productCtrl (req, res) {
    const {body} = req;
    const result = mdlApp.mdlCreate({body})
    if(!result) res.status(404).json({message: 'Hubo un error al registrar el cliente.'})
    
    res.status(200).json({message:'Se ha cargado correctamente el cliente.'})
   }

}