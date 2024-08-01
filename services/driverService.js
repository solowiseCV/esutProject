import Driver from '../models/driver.js';

const registerDriver = async (driverData) => {
    const { user, name, email, licenseNumber } = driverData;

    const newDriver = new Driver({
        user,
        name,
        email,
        licenseNumber
    });

    return await newDriver.save();
};

const getAllDrivers = async () => {
    return await Driver.find();
};

const getDriverById = async (id) => {
    return await Driver.findById(id);
};

const updateDriver = async (id, updateData) => {
    return await Driver.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteDriver = async (id) => {
    return await Driver.findByIdAndDelete(id);
};

export { registerDriver, getAllDrivers, getDriverById, updateDriver, deleteDriver };


