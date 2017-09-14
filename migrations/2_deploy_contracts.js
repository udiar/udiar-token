var IcoToken = artifacts.require("./IcoToken.sol");

module.exports = function(deployer) {
    deployer.deploy(
        IcoToken, // Class
        4360000000000, // Amount
        "UDIAR Token", // Fullname
        6, // Precision
        "IAR" // Short name
    );
};
