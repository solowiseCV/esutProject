import Driver from '../models/driver.js';
import verifyDriverDetails from '../utils/veifyDriver.js';

const registerDriver = async (driverData) => {
    const { name, email, licenseNumber ,licenseImg} = driverData;

    // Verify driver details
    const isVerified = verifyDriverDetails(name, email, licenseNumber,licenseImg)

    // Create a new driver with verification status
    const driver = new Driver({
        ...driverData,
        isVerified: isVerified
    });

    await driver.save();
    return driver;
};

const verifyDriver = async (driverId) => {
    const driver = await Driver.findById(driverId);
    if (!driver) {
        throw new Error('Driver not found');
    }

    // Perform verification
    const isVerified = verifyDriverDetails(driver.name, driver.email, driver.licenseNumber);

    // Update driver's verification status
    if (isVerified) {
        driver.isVerified = true;
        await driver.save();
    }

    return driver;
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

export { registerDriver, verifyDriver, getAllDrivers, getDriverById, updateDriver, deleteDriver };
