import express from 'express';
import { getFreeBook } from '../Controller/freebook.controller.js';

const freerouter = express.Router();

freerouter.get("/books", getFreeBook);

export default freerouter;