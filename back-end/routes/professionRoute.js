import express from 'express';
import {
    getAll,
    getById,
    getByDepartmentId,
    createProfession,
    updateProfession,
    deleteProfession
} from '../controllers/professionController.js';

const professionRoute = express.Router();
professionRoute.get('/', getAll);
professionRoute.get('/:id', getById);
professionRoute.get('/department/:id', getByDepartmentId);
professionRoute.post('/', createProfession);
professionRoute.put('/:id', updateProfession);
professionRoute.delete('/:id', deleteProfession);

export default professionRoute;