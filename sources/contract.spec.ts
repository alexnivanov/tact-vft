import { toNano } from 'ton'
import { ContractSystem } from '@tact-lang/emulator'
import { VftStatementContract } from './output/vft_VftStatementContract'
import { VftData, VftMasterContract } from './output/vft_VftMasterContract'

describe('contract', () => {
    it('should deploy master and statement', async () => {
        let system = await ContractSystem.create()
        let owner = system.treasure('owner')
        let vftMaster = system.open(await VftMasterContract.fromInit(owner.address))
        system.name(vftMaster.address, 'master')
        await vftMaster.send(owner, { value: toNano(1) }, { $$type: 'Deploy', queryId: 0n })
        await system.run()

        expect(await vftMaster.getStatementsCount()).toEqual(0n)

        const data: VftData = { $$type: 'VftData' as const, statement: 'test statement', url: null }

        await vftMaster.send(owner, { value: toNano(1) }, { $$type: 'NewParentStatement' as const, data })
        await system.run()

        expect(await vftMaster.getStatementsCount()).toEqual(1n)

        let statementAddress = await vftMaster.getStatementAddress(0n)
        let statementContract = VftStatementContract.fromAddress(statementAddress)
        let vftStatement = system.open(statementContract)

        expect(await vftStatement.getData()).toEqual(data)
    })
})
