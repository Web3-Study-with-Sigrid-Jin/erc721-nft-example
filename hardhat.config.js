require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://ethereum-rinkeby-rpc.allthatnode.com/fV1yQSJuIz74RU8lfhew7xJKndczum36",
      accounts: ["33e29a1e7f5c463a4fa3a8e511eb9e5c87eb243c94196771eae080aa9e093888"]
    }
  }
};
