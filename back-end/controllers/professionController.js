import Profession from "../models/profession.js";

export const getAll = async (req, res) => {
    try {
        const professions = await Profession.findAll({
            include: 'department',
            order: [['name', 'ASC']]
        });
        res.status(200).json(professions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
export const getById = async (req, res) => {
    try {
        const profession = await Profession.findAll({
            include: 'department',
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(profession[0]);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
export const getByDepartmentId = async (req, res) => {
    try {
        const professions = await Profession.findAll({
            where: { department_id: req.params.id },
            include: 'department',
            order: [['name', 'ASC']]
        });
        res.status(200).json(professions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
export const createProfession = async (req, res) => {
    try {
        await Profession.create(req.body);
        res.status(200).json({
            message: `Profession "${req.body.name}" was successfully created!`
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
export const updateProfession = async (req, res) => {
    try {
        await Profession.update(req.body,
            {
                where: { id: req.params.id }
            }
        );
        res.status(200).json({
            message: `Profession "${req.body.name}" was successfully updated!`
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
export const deleteProfession = async (req, res) => {
    try {
        await Profession.destroy({
            where: { id: req.params.id }
        });
        res.status(200).json({
            message: `Profession with id ${req.params.id} was successfully deleted!`
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}