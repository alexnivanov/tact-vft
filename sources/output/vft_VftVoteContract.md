# TACT Compilation Report
Contract: VftVoteContract
BOC Size: 1236 bytes

# Types
Total Types: 15

## StateInit
TLB: `_ code:^cell data:^cell = StateInit`
Signature: `StateInit{code:^cell,data:^cell}`

## Context
TLB: `_ bounced:bool sender:address value:int257 raw:^slice = Context`
Signature: `Context{bounced:bool,sender:address,value:int257,raw:^slice}`

## SendParameters
TLB: `_ bounce:bool to:address value:int257 mode:int257 body:Maybe ^cell code:Maybe ^cell data:Maybe ^cell = SendParameters`
Signature: `SendParameters{bounce:bool,to:address,value:int257,mode:int257,body:Maybe ^cell,code:Maybe ^cell,data:Maybe ^cell}`

## Deploy
TLB: `deploy#946a98b6 queryId:uint64 = Deploy`
Signature: `Deploy{queryId:uint64}`

## DeployOk
TLB: `deploy_ok#aff90f57 queryId:uint64 = DeployOk`
Signature: `DeployOk{queryId:uint64}`

## FactoryDeploy
TLB: `factory_deploy#6d0ff13b queryId:uint64 cashback:address = FactoryDeploy`
Signature: `FactoryDeploy{queryId:uint64,cashback:address}`

## ChangeOwner
TLB: `change_owner#819dbe99 queryId:uint64 newOwner:address = ChangeOwner`
Signature: `ChangeOwner{queryId:uint64,newOwner:address}`

## ChangeOwnerOk
TLB: `change_owner_ok#327b2b4a queryId:uint64 newOwner:address = ChangeOwnerOk`
Signature: `ChangeOwnerOk{queryId:uint64,newOwner:address}`

## VftData
TLB: `_ statement:Maybe ^string url:Maybe ^string = VftData`
Signature: `VftData{statement:Maybe ^string,url:Maybe ^string}`

## Withdraw
TLB: `withdraw#0ba69751 amount:coins = Withdraw`
Signature: `Withdraw{amount:coins}`

## NewParentStatement
TLB: `new_parent_statement#e057c9c1 data:VftData{statement:Maybe ^string,url:Maybe ^string} = NewParentStatement`
Signature: `NewParentStatement{data:VftData{statement:Maybe ^string,url:Maybe ^string}}`

## NewChildStatement
TLB: `new_child_statement#8bbb4b35 data:VftData{statement:Maybe ^string,url:Maybe ^string} pro:bool = NewChildStatement`
Signature: `NewChildStatement{data:VftData{statement:Maybe ^string,url:Maybe ^string},pro:bool}`

## ChildCreated
TLB: `child_created#4d60c431 idx:uint256 = ChildCreated`
Signature: `ChildCreated{idx:uint256}`

## SetStatementData
TLB: `set_statement_data#53eae83c owner:address data:VftData{statement:Maybe ^string,url:Maybe ^string} = SetStatementData`
Signature: `SetStatementData{owner:address,data:VftData{statement:Maybe ^string,url:Maybe ^string}}`

## SetVoteData
TLB: `set_vote_data#e7cec7c2 owner:address = SetVoteData`
Signature: `SetVoteData{owner:address}`

# Get Methods
Total Get Methods: 1

## balance

# Error Codes
2: Stack undeflow
3: Stack overflow
4: Integer overflow
5: Integer out of expected range
6: Invalid opcode
7: Type check error
8: Cell overflow
9: Cell underflow
10: Dictionary error
13: Out of gas error
32: Method ID not found
34: Action is invalid or not supported
37: Not enough TON
38: Not enough extra-currencies
128: Null reference exception
129: Invalid serialization prefix
130: Invalid incoming message
131: Constraints error
132: Access denied
133: Contract stopped
134: Invalid argument
135: Code of a contract was not found
136: Invalid address
137: Masterchain support is not enabled for this contract
2840: Only parent is allowed to deploy
3111: Only statement is allowed to deploy
27461: Only statement is allowed to add funds
27848: Only statement is allowed to set data
27921: Only owner is allowed to withdraw
54615: Insufficient balance
58771: Only parent is allowed to set data