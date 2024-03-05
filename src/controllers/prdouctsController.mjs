import { mdlApp } from "../models/productsModels.mjs";

export class ctrlApp {

   // Controlador para crear clientes en la DB
  static async createCtrl(req, res) {
   
    const { body } = req;
    console.log(body);
    const result = await mdlApp.mdlCreate(body); // Se llama el modelo que crea el cliente.
    if (!result)
      res.status(404).json({ message: "Hubo un error al registrar el cliente." });

    // Redirige al inicio para que se inicie sesion.
    res.status(200).send(` 
    <script>
    alert('Registro con exito.');
    window.location.replace("../html/index.html");
    </script>
    `);
  }

  //Validar los datos del cliente para dejarlo ingresar.
  static async getCtrl(req,res){
      
      const data = {
         adress:req.query.adress,
         pass:req.query.pass 
      }
         const result = await mdlApp.mdlGet(data);

   if(!result ){
      
      res.status(500).send(` <script>
      alert('No Se encontro al usuario')
      window.location.replace("../html/index.html");;
     </script>
      `)
     }
      res.status(200).send(`
      <script>
      alert('Se inicio Sesion Correctamente')
      window.open("../html/products.html");
     </script>`)
  
   }
}
