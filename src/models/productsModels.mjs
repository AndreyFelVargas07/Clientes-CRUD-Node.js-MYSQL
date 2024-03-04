import {connection} from '../database/conecction.mjs';

export class mdlApp{

    static async mdlCreate(body){
        if(!body) return false;

        
        const {name, pass, email, phone} = body;
        const sql = await connection.query('INSERT INTO customer (nameCust, passCust, addressCust, phoneCust) VALUES(?,?,?,?);', [name, pass,email,phone]);

    }

}