import { connection } from "../database/conecction.mjs";

export class mdlApp {
  // Crear clientes en la bd
  static async mdlCreate(body) {
    if (!body) return false;

    const { name, pass, adress, phone } = body;

    //Insertando datos a la bd
    const sql = await connection.query(
      "INSERT INTO customer (nameCust, passCust, addressCust, phoneCust) VALUES(?,?,?,?);",
      [name, pass, adress, phone]
    );
    if (!sql) return false;

    return true;
  }

  //Validar el inicio de Sesion
  static async mdlGet(data) {
    if (!data) return false;


    const { adress, pass } = data;
    console.log(`${adress},${pass}`);

    // Consultar si el correo y la contrseña existen en la db
    const [result] = await connection.query(
      "SELECT addressCust, passCust FROM customer WHERE addressCust = ? AND passCust = ?",[adress, pass]
      );
      if(result.length < 1 ) return false
      
     
        return true
  }
}
