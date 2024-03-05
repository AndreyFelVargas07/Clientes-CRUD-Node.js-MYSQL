import { Router } from "express";
import {ctrlApp} from "../controllers/prdouctsController.mjs"
export const custRouter = Router();

custRouter.post('/',(ctrlApp.createCtrl));
custRouter.get('/',ctrlApp.getCtrl);