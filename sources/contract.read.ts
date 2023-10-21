import { Address, contractAddress, TonClient4 } from 'ton'
import { VftMasterContract } from './output/vft_VftMasterContract'

;(async () => {
    const client = new TonClient4({
        endpoint: 'https://sandbox-v4.tonhubapi.com', // 🔴 Test-net API endpoint
    })

    // Parameters
    let owner = Address.parse('kQBM7QssP28PhrctDOyd47_zpFfDiQvv5V9iXizNopb1d2LB')
    let init = await VftMasterContract.init(owner)
    let contract_address = contractAddress(0, init)

    // Preparing
    console.log('Reading Contract Info...')
    console.log(contract_address)

    // Input the contract address
    let contract = VftMasterContract.fromAddress(contract_address)
    let contract_open = client.open(contract)
    console.log('Statements count: ' + (await contract_open.getStatementsCount()))
})()
