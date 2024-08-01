import { registerDriver, getAllDrivers, getDriverById, updateDriver, deleteDriver } from '../services/driverService.js';

const registerDriverController = async (req, res) => {
    try {
        const driverData = {
            user: req.user.id,
            name: req.body.name,
            email: req.body.email,
            licenseNumber: req.body.licenseNumber,
            licenseImg: req.body.licenseImg,

        };
        const newDriver = await registerDriver(driverData);
        res.status(201).json(newDriver);
    } catch (error) {
        res.status(400).json({ message: error.message });
        console.log(error);
    }
};

const getAll = async (req, res) => {
    try {
        const drivers = await getAllDrivers();
        res.status(200).json(drivers);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getById = async (req, res) => {
    try {
        const driver = await getDriverById(req.params.id);
        res.status(200).json(driver);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const update = async (req, res) => {
    try {
        const updatedDriver = await updateDriver(req.params.id, req.body);
        res.status(200).json(updatedDriver);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const remove = async (req, res) => {
    try {
        await deleteDriver(req.params.id);
        res.status(200).json({ message: 'Driver deleted' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export { registerDriverController, getAll, getById, update, remove };
