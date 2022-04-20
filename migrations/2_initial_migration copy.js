const Migrations = artifacts.require("ERC721_contract");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
