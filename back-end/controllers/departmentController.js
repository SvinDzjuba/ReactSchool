import Department from '../models/department.js';

export const getAll = async (req, res) => {
    try {
        const departments = await Department.findAll();
        res.status(200).json(departments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
export const getById = async (req, res) => {
    try {
        const department = await Department.findByPk(req.params.id);
        res.status(200).json(department);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
export const createDepartment = async (req, res) => {
    try {
        await Department.create(req.body);
        res.status(200).json({ message: `Department "${req.body.name}" was successfully created!` });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
export const updateDepartment = async (req, res) => {
    try {
        await Department.update(req.body,
            {
                where: { id: req.params.id }
            }
        );
        res.status(200).json({
            message: `Department "${req.body.name}" was successfully updated!`
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
export const deleteDepartment = async (req, res) => {
    try {
        await Department.destroy({
            where: { id: req.params.id }
        });
        res.status(200).json({
            message: `Department with id ${req.params.id} was successfully deleted!`
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}