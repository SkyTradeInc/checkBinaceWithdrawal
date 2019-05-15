const chalk = require('chalk')
const beep = require('beepbeep')
const axios = require('axios')

const asset = "RVN"
function walletStatus(asset) {
      axios.get('https://www.binance.com/assetWithdraw/getAllAsset.html')
        .then(response => {
          const coins = response.data
          for(let i=0; i<coins.length;i++) {
            if(coins[i].assetCode == asset) {
              if(coins[i].enableWithdraw) {
                return console.log(chalk.green("ENABLED"))
                beep()
              }
            }
          }
          return console.log(chalk.red("NOT ENABLED"))
        })
        .catch(console.log)
    }

walletStatus(asset)
setInterval(() => {
  walletStatus(asset)
}, 20000)
