const verifyDriverDetails = (name, email, licenseNumber,licenseImg) => {

    const isValidLicense = licenseNumber && licenseNumber.length > 5; 
    const isVerified = name && email && isValidLicense;

    return isVerified;
};

export default verifyDriverDetails;
