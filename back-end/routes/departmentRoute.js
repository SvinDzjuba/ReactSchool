import express from 'express';
import {
    getAll,
    getById,
    createDepartment,
    updateDepartment,
    deleteDepartment
} from '../controllers/departmentController.js';

const departmentRouter = express.Router();
departmentRouter.get('/', getAll);
departmentRouter.get('/:id', getById);
departmentRouter.post('/', createDepartment);
departmentRouter.put('/:id', updateDepartment);
departmentRouter.delete('/:id', deleteDepartment);

export default departmentRouter;