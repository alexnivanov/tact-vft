import { 
    Cell,
    Slice, 
    Address, 
    Builder, 
    beginCell, 
    ComputeError, 
    TupleItem, 
    TupleReader, 
    Dictionary, 
    contractAddress, 
    ContractProvider, 
    Sender, 
    Contract, 
    ContractABI, 
    ABIType,
    ABIGetter,
    ABIReceiver,
    TupleBuilder,
    DictionaryValue
} from 'ton-core';

export type StateInit = {
    $$type: 'StateInit';
    code: Cell;
    data: Cell;
}

export function storeStateInit(src: StateInit) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeRef(src.code);
        b_0.storeRef(src.data);
    };
}

export function loadStateInit(slice: Slice) {
    let sc_0 = slice;
    let _code = sc_0.loadRef();
    let _data = sc_0.loadRef();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
    let _code = source.readCell();
    let _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function storeTupleStateInit(source: StateInit) {
    let builder = new TupleBuilder();
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserStateInit(): DictionaryValue<StateInit> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeStateInit(src)).endCell());
        },
        parse: (src) => {
            return loadStateInit(src.loadRef().beginParse());
        }
    }
}

export type Context = {
    $$type: 'Context';
    bounced: boolean;
    sender: Address;
    value: bigint;
    raw: Cell;
}

export function storeContext(src: Context) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounced);
        b_0.storeAddress(src.sender);
        b_0.storeInt(src.value, 257);
        b_0.storeRef(src.raw);
    };
}

export function loadContext(slice: Slice) {
    let sc_0 = slice;
    let _bounced = sc_0.loadBit();
    let _sender = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _raw = sc_0.loadRef();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadTupleContext(source: TupleReader) {
    let _bounced = source.readBoolean();
    let _sender = source.readAddress();
    let _value = source.readBigNumber();
    let _raw = source.readCell();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function storeTupleContext(source: Context) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounced);
    builder.writeAddress(source.sender);
    builder.writeNumber(source.value);
    builder.writeSlice(source.raw);
    return builder.build();
}

function dictValueParserContext(): DictionaryValue<Context> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeContext(src)).endCell());
        },
        parse: (src) => {
            return loadContext(src.loadRef().beginParse());
        }
    }
}

export type SendParameters = {
    $$type: 'SendParameters';
    bounce: boolean;
    to: Address;
    value: bigint;
    mode: bigint;
    body: Cell | null;
    code: Cell | null;
    data: Cell | null;
}

export function storeSendParameters(src: SendParameters) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounce);
        b_0.storeAddress(src.to);
        b_0.storeInt(src.value, 257);
        b_0.storeInt(src.mode, 257);
        if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
        if (src.code !== null && src.code !== undefined) { b_0.storeBit(true).storeRef(src.code); } else { b_0.storeBit(false); }
        if (src.data !== null && src.data !== undefined) { b_0.storeBit(true).storeRef(src.data); } else { b_0.storeBit(false); }
    };
}

export function loadSendParameters(slice: Slice) {
    let sc_0 = slice;
    let _bounce = sc_0.loadBit();
    let _to = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _mode = sc_0.loadIntBig(257);
    let _body = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _code = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _data = sc_0.loadBit() ? sc_0.loadRef() : null;
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadTupleSendParameters(source: TupleReader) {
    let _bounce = source.readBoolean();
    let _to = source.readAddress();
    let _value = source.readBigNumber();
    let _mode = source.readBigNumber();
    let _body = source.readCellOpt();
    let _code = source.readCellOpt();
    let _data = source.readCellOpt();
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function storeTupleSendParameters(source: SendParameters) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounce);
    builder.writeAddress(source.to);
    builder.writeNumber(source.value);
    builder.writeNumber(source.mode);
    builder.writeCell(source.body);
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeSendParameters(src)).endCell());
        },
        parse: (src) => {
            return loadSendParameters(src.loadRef().beginParse());
        }
    }
}

export type Deploy = {
    $$type: 'Deploy';
    queryId: bigint;
}

export function storeDeploy(src: Deploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2490013878, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2490013878) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function loadTupleDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function storeTupleDeploy(source: Deploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeploy(): DictionaryValue<Deploy> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadDeploy(src.loadRef().beginParse());
        }
    }
}

export type DeployOk = {
    $$type: 'DeployOk';
    queryId: bigint;
}

export function storeDeployOk(src: DeployOk) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2952335191, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeployOk(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2952335191) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function loadTupleDeployOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function storeTupleDeployOk(source: DeployOk) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeployOk(): DictionaryValue<DeployOk> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeDeployOk(src)).endCell());
        },
        parse: (src) => {
            return loadDeployOk(src.loadRef().beginParse());
        }
    }
}

export type FactoryDeploy = {
    $$type: 'FactoryDeploy';
    queryId: bigint;
    cashback: Address;
}

export function storeFactoryDeploy(src: FactoryDeploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1829761339, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.cashback);
    };
}

export function loadFactoryDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1829761339) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _cashback = sc_0.loadAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function loadTupleFactoryDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _cashback = source.readAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function storeTupleFactoryDeploy(source: FactoryDeploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.cashback);
    return builder.build();
}

function dictValueParserFactoryDeploy(): DictionaryValue<FactoryDeploy> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeFactoryDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadFactoryDeploy(src.loadRef().beginParse());
        }
    }
}

export type ChangeOwner = {
    $$type: 'ChangeOwner';
    queryId: bigint;
    newOwner: Address;
}

export function storeChangeOwner(src: ChangeOwner) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2174598809, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.newOwner);
    };
}

export function loadChangeOwner(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2174598809) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _newOwner = sc_0.loadAddress();
    return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
}

function loadTupleChangeOwner(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _newOwner = source.readAddress();
    return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
}

function storeTupleChangeOwner(source: ChangeOwner) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.newOwner);
    return builder.build();
}

function dictValueParserChangeOwner(): DictionaryValue<ChangeOwner> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeChangeOwner(src)).endCell());
        },
        parse: (src) => {
            return loadChangeOwner(src.loadRef().beginParse());
        }
    }
}

export type ChangeOwnerOk = {
    $$type: 'ChangeOwnerOk';
    queryId: bigint;
    newOwner: Address;
}

export function storeChangeOwnerOk(src: ChangeOwnerOk) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(846932810, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.newOwner);
    };
}

export function loadChangeOwnerOk(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 846932810) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _newOwner = sc_0.loadAddress();
    return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner };
}

function loadTupleChangeOwnerOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _newOwner = source.readAddress();
    return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner };
}

function storeTupleChangeOwnerOk(source: ChangeOwnerOk) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.newOwner);
    return builder.build();
}

function dictValueParserChangeOwnerOk(): DictionaryValue<ChangeOwnerOk> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeChangeOwnerOk(src)).endCell());
        },
        parse: (src) => {
            return loadChangeOwnerOk(src.loadRef().beginParse());
        }
    }
}

export type VftData = {
    $$type: 'VftData';
    statement: string | null;
    url: string | null;
}

export function storeVftData(src: VftData) {
    return (builder: Builder) => {
        let b_0 = builder;
        if (src.statement !== null && src.statement !== undefined) { b_0.storeBit(true).storeStringRefTail(src.statement); } else { b_0.storeBit(false); }
        if (src.url !== null && src.url !== undefined) { b_0.storeBit(true).storeStringRefTail(src.url); } else { b_0.storeBit(false); }
    };
}

export function loadVftData(slice: Slice) {
    let sc_0 = slice;
    let _statement = sc_0.loadBit() ? sc_0.loadStringRefTail() : null;
    let _url = sc_0.loadBit() ? sc_0.loadStringRefTail() : null;
    return { $$type: 'VftData' as const, statement: _statement, url: _url };
}

function loadTupleVftData(source: TupleReader) {
    let _statement = source.readStringOpt();
    let _url = source.readStringOpt();
    return { $$type: 'VftData' as const, statement: _statement, url: _url };
}

function storeTupleVftData(source: VftData) {
    let builder = new TupleBuilder();
    builder.writeString(source.statement);
    builder.writeString(source.url);
    return builder.build();
}

function dictValueParserVftData(): DictionaryValue<VftData> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeVftData(src)).endCell());
        },
        parse: (src) => {
            return loadVftData(src.loadRef().beginParse());
        }
    }
}

export type Withdraw = {
    $$type: 'Withdraw';
    amount: bigint;
}

export function storeWithdraw(src: Withdraw) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(195467089, 32);
        b_0.storeCoins(src.amount);
    };
}

export function loadWithdraw(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 195467089) { throw Error('Invalid prefix'); }
    let _amount = sc_0.loadCoins();
    return { $$type: 'Withdraw' as const, amount: _amount };
}

function loadTupleWithdraw(source: TupleReader) {
    let _amount = source.readBigNumber();
    return { $$type: 'Withdraw' as const, amount: _amount };
}

function storeTupleWithdraw(source: Withdraw) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.amount);
    return builder.build();
}

function dictValueParserWithdraw(): DictionaryValue<Withdraw> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeWithdraw(src)).endCell());
        },
        parse: (src) => {
            return loadWithdraw(src.loadRef().beginParse());
        }
    }
}

export type NewParentStatement = {
    $$type: 'NewParentStatement';
    data: VftData;
}

export function storeNewParentStatement(src: NewParentStatement) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3763849665, 32);
        b_0.store(storeVftData(src.data));
    };
}

export function loadNewParentStatement(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3763849665) { throw Error('Invalid prefix'); }
    let _data = loadVftData(sc_0);
    return { $$type: 'NewParentStatement' as const, data: _data };
}

function loadTupleNewParentStatement(source: TupleReader) {
    const _data = loadTupleVftData(source.readTuple());
    return { $$type: 'NewParentStatement' as const, data: _data };
}

function storeTupleNewParentStatement(source: NewParentStatement) {
    let builder = new TupleBuilder();
    builder.writeTuple(storeTupleVftData(source.data));
    return builder.build();
}

function dictValueParserNewParentStatement(): DictionaryValue<NewParentStatement> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeNewParentStatement(src)).endCell());
        },
        parse: (src) => {
            return loadNewParentStatement(src.loadRef().beginParse());
        }
    }
}

export type NewChildStatement = {
    $$type: 'NewChildStatement';
    data: VftData;
    pro: boolean;
}

export function storeNewChildStatement(src: NewChildStatement) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2344307509, 32);
        b_0.store(storeVftData(src.data));
        b_0.storeBit(src.pro);
    };
}

export function loadNewChildStatement(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2344307509) { throw Error('Invalid prefix'); }
    let _data = loadVftData(sc_0);
    let _pro = sc_0.loadBit();
    return { $$type: 'NewChildStatement' as const, data: _data, pro: _pro };
}

function loadTupleNewChildStatement(source: TupleReader) {
    const _data = loadTupleVftData(source.readTuple());
    let _pro = source.readBoolean();
    return { $$type: 'NewChildStatement' as const, data: _data, pro: _pro };
}

function storeTupleNewChildStatement(source: NewChildStatement) {
    let builder = new TupleBuilder();
    builder.writeTuple(storeTupleVftData(source.data));
    builder.writeBoolean(source.pro);
    return builder.build();
}

function dictValueParserNewChildStatement(): DictionaryValue<NewChildStatement> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeNewChildStatement(src)).endCell());
        },
        parse: (src) => {
            return loadNewChildStatement(src.loadRef().beginParse());
        }
    }
}

export type ChildCreated = {
    $$type: 'ChildCreated';
    idx: bigint;
}

export function storeChildCreated(src: ChildCreated) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1298187313, 32);
        b_0.storeUint(src.idx, 256);
    };
}

export function loadChildCreated(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1298187313) { throw Error('Invalid prefix'); }
    let _idx = sc_0.loadUintBig(256);
    return { $$type: 'ChildCreated' as const, idx: _idx };
}

function loadTupleChildCreated(source: TupleReader) {
    let _idx = source.readBigNumber();
    return { $$type: 'ChildCreated' as const, idx: _idx };
}

function storeTupleChildCreated(source: ChildCreated) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.idx);
    return builder.build();
}

function dictValueParserChildCreated(): DictionaryValue<ChildCreated> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeChildCreated(src)).endCell());
        },
        parse: (src) => {
            return loadChildCreated(src.loadRef().beginParse());
        }
    }
}

export type SetStatementData = {
    $$type: 'SetStatementData';
    owner: Address;
    data: VftData;
}

export function storeSetStatementData(src: SetStatementData) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1407903804, 32);
        b_0.storeAddress(src.owner);
        b_0.store(storeVftData(src.data));
    };
}

export function loadSetStatementData(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1407903804) { throw Error('Invalid prefix'); }
    let _owner = sc_0.loadAddress();
    let _data = loadVftData(sc_0);
    return { $$type: 'SetStatementData' as const, owner: _owner, data: _data };
}

function loadTupleSetStatementData(source: TupleReader) {
    let _owner = source.readAddress();
    const _data = loadTupleVftData(source.readTuple());
    return { $$type: 'SetStatementData' as const, owner: _owner, data: _data };
}

function storeTupleSetStatementData(source: SetStatementData) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.owner);
    builder.writeTuple(storeTupleVftData(source.data));
    return builder.build();
}

function dictValueParserSetStatementData(): DictionaryValue<SetStatementData> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeSetStatementData(src)).endCell());
        },
        parse: (src) => {
            return loadSetStatementData(src.loadRef().beginParse());
        }
    }
}

export type SetVoteData = {
    $$type: 'SetVoteData';
    owner: Address;
}

export function storeSetVoteData(src: SetVoteData) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3889088450, 32);
        b_0.storeAddress(src.owner);
    };
}

export function loadSetVoteData(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3889088450) { throw Error('Invalid prefix'); }
    let _owner = sc_0.loadAddress();
    return { $$type: 'SetVoteData' as const, owner: _owner };
}

function loadTupleSetVoteData(source: TupleReader) {
    let _owner = source.readAddress();
    return { $$type: 'SetVoteData' as const, owner: _owner };
}

function storeTupleSetVoteData(source: SetVoteData) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.owner);
    return builder.build();
}

function dictValueParserSetVoteData(): DictionaryValue<SetVoteData> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeSetVoteData(src)).endCell());
        },
        parse: (src) => {
            return loadSetVoteData(src.loadRef().beginParse());
        }
    }
}

 type VftMasterContract_init_args = {
    $$type: 'VftMasterContract_init_args';
    owner: Address;
}

function initVftMasterContract_init_args(src: VftMasterContract_init_args) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeAddress(src.owner);
    };
}

async function VftMasterContract_init(owner: Address) {
    const __code = Cell.fromBase64('te6ccgECIQEABgkAART/APSkE/S88sgLAQIBYgIDAtTQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxa2zzy4ILI+EMBzH8BygBZWSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFsv/ye1UGwQCASANDgTa7aLt+wGSMH/gcCHXScIflTAg1wsf3iCCEOBXycG6jqkw0x8BghDgV8nBuvLggdIAAZPUAdCRbeIB0gABk9QB0JFt4hJsEts8f+AgwAAi10nBIbCSW3/gIIIQC6aXUbrjAiCCEJRqmLa64wLAAAUGBwgCmvhDU0N/2zxccFnIcAHLAXMBywFwAcsAEszMyfkAyHIBywFwAcsAEsoHy//J0CDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4Ij4QkBUEwkBkDDTHwGCEAuml1G68uCB+gABMYFtEfhCUkDHBfL0+CdvEPhBbyQTXwOhggiYloChtgiCANVXIcIA8vT4Qn9YgEIQI21tbds8fwsBUDDTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J+EIBcG3bPH8KAbSO1PkBgvC+spNaggibFU0y+ZxDd6qWCqEVNmzCxgJ1Xja5f1Bc7LqOrIFtEfhCUjDHBfL0+EJ/+CdvEPhBbyQTXwOhggiYloChgEIQI21tbds8f9sx4JEw4nALAv7IVSCCEFPq6DxQBMsfWCDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFgIhbrOcf1ADygDIWM8WyQHMlXAyAsoA4iFus5t/AcoAyFjPFskBzJRwMsoA4smCCJiWgFpyAn8GRVXbPCDIAYIQTWDEMVjLH8v/yfhCAX9t2zykCwoBOm1tIm6zmVsgbvLQgG8iAZEy4hAkcAMEgEJQI9s8CwHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wAMAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAgFYDxACASAUFQIRtKO7Z5tnjYQwGxECE7XoW2eLG2eNhDAbEgACIQGQ+ENSMn/bPHBZyHABywFzAcsBcAHLABLMzMn5AMhyAcsBcAHLABLKB8v/ydAg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIEwDaA9D0BDBtIYEU7gGAEPQPb6Hy4IcBgRTuIgKAEPQXAoE98AGAEPQPb6Hy4IcSgT3wAQKAEPQXyAHI9ADJAcxwAcoAVSAEWiDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFhKBAQHPAMoAyQIBIBYXAgFIHyACASAYGQC5t3owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwThOy6ctWadluZ0HSzbKM3RSQTggZzq084r86ShYDrC3EyPZQAhGzXHbPNs8bCGAbGgIRsbA2zzbPGwhgGxwAAiABwO1E0NQB+GPSAAGOJfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgB0/9ZbBLg+CjXCwqDCbry4In6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIAdHbPB0BDvgnbxB52zweAAJwANogwQEhwk2x8tCGyCLBAJiALQHLBwKjAt5/cG8ABI4bBHqpDCDAAFIwsLObcDOmMBRvjASkBAORMOIE5AGzlwKALm+MAqTejhADeqkMpjATb4wDpCLAABA05jMipQOaUxJvgQHLBwKlAuRsIcnQABGwr7tRNDSAAGAAdbJu40NWlwZnM6Ly9RbWFwdThBeUt3VjVkTlVqbXYxaXdVZ0xqTGtNbThrVndRYUFxSll0QXhBTnFngg');
    const __system = Cell.fromBase64('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');
    let builder = beginCell();
    builder.storeRef(__system);
    builder.storeUint(0, 1);
    initVftMasterContract_init_args({ $$type: 'VftMasterContract_init_args', owner })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

const VftMasterContract_errors: { [key: number]: { message: string } } = {
    2: { message: `Stack undeflow` },
    3: { message: `Stack overflow` },
    4: { message: `Integer overflow` },
    5: { message: `Integer out of expected range` },
    6: { message: `Invalid opcode` },
    7: { message: `Type check error` },
    8: { message: `Cell overflow` },
    9: { message: `Cell underflow` },
    10: { message: `Dictionary error` },
    13: { message: `Out of gas error` },
    32: { message: `Method ID not found` },
    34: { message: `Action is invalid or not supported` },
    37: { message: `Not enough TON` },
    38: { message: `Not enough extra-currencies` },
    128: { message: `Null reference exception` },
    129: { message: `Invalid serialization prefix` },
    130: { message: `Invalid incoming message` },
    131: { message: `Constraints error` },
    132: { message: `Access denied` },
    133: { message: `Contract stopped` },
    134: { message: `Invalid argument` },
    135: { message: `Code of a contract was not found` },
    136: { message: `Invalid address` },
    137: { message: `Masterchain support is not enabled for this contract` },
    2840: { message: `Only parent is allowed to deploy` },
    3111: { message: `Only statement is allowed to deploy` },
    27461: { message: `Only statement is allowed to add funds` },
    27848: { message: `Only statement is allowed to set data` },
    27921: { message: `Only owner is allowed to withdraw` },
    54615: { message: `Insufficient balance` },
    58771: { message: `Only parent is allowed to set data` },
}

const VftMasterContract_types: ABIType[] = [
    {"name":"StateInit","header":null,"fields":[{"name":"code","type":{"kind":"simple","type":"cell","optional":false}},{"name":"data","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"Context","header":null,"fields":[{"name":"bounced","type":{"kind":"simple","type":"bool","optional":false}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"raw","type":{"kind":"simple","type":"slice","optional":false}}]},
    {"name":"SendParameters","header":null,"fields":[{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}},{"name":"to","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"code","type":{"kind":"simple","type":"cell","optional":true}},{"name":"data","type":{"kind":"simple","type":"cell","optional":true}}]},
    {"name":"Deploy","header":2490013878,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"DeployOk","header":2952335191,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"FactoryDeploy","header":1829761339,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"cashback","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ChangeOwner","header":2174598809,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"newOwner","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ChangeOwnerOk","header":846932810,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"newOwner","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"VftData","header":null,"fields":[{"name":"statement","type":{"kind":"simple","type":"string","optional":true}},{"name":"url","type":{"kind":"simple","type":"string","optional":true}}]},
    {"name":"Withdraw","header":195467089,"fields":[{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}}]},
    {"name":"NewParentStatement","header":3763849665,"fields":[{"name":"data","type":{"kind":"simple","type":"VftData","optional":false}}]},
    {"name":"NewChildStatement","header":2344307509,"fields":[{"name":"data","type":{"kind":"simple","type":"VftData","optional":false}},{"name":"pro","type":{"kind":"simple","type":"bool","optional":false}}]},
    {"name":"ChildCreated","header":1298187313,"fields":[{"name":"idx","type":{"kind":"simple","type":"uint","optional":false,"format":256}}]},
    {"name":"SetStatementData","header":1407903804,"fields":[{"name":"owner","type":{"kind":"simple","type":"address","optional":false}},{"name":"data","type":{"kind":"simple","type":"VftData","optional":false}}]},
    {"name":"SetVoteData","header":3889088450,"fields":[{"name":"owner","type":{"kind":"simple","type":"address","optional":false}}]},
]

const VftMasterContract_getters: ABIGetter[] = [
    {"name":"balance","arguments":[],"returnType":{"kind":"simple","type":"string","optional":false}},
    {"name":"statementsCount","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"statementAddress","arguments":[{"name":"idx","type":{"kind":"simple","type":"int","optional":false,"format":257}}],"returnType":{"kind":"simple","type":"address","optional":false}},
    {"name":"owner","arguments":[],"returnType":{"kind":"simple","type":"address","optional":false}},
]

const VftMasterContract_receivers: ABIReceiver[] = [
    {"receiver":"internal","message":{"kind":"typed","type":"NewParentStatement"}},
    {"receiver":"internal","message":{"kind":"empty"}},
    {"receiver":"internal","message":{"kind":"text","text":"withdraw safe"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Withdraw"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Deploy"}},
]

export class VftMasterContract implements Contract {
    
    static async init(owner: Address) {
        return await VftMasterContract_init(owner);
    }
    
    static async fromInit(owner: Address) {
        const init = await VftMasterContract_init(owner);
        const address = contractAddress(0, init);
        return new VftMasterContract(address, init);
    }
    
    static fromAddress(address: Address) {
        return new VftMasterContract(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types:  VftMasterContract_types,
        getters: VftMasterContract_getters,
        receivers: VftMasterContract_receivers,
        errors: VftMasterContract_errors,
    };
    
    private constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: NewParentStatement | null | 'withdraw safe' | Withdraw | Deploy) {
        
        let body: Cell | null = null;
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'NewParentStatement') {
            body = beginCell().store(storeNewParentStatement(message)).endCell();
        }
        if (message === null) {
            body = new Cell();
        }
        if (message === 'withdraw safe') {
            body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Withdraw') {
            body = beginCell().store(storeWithdraw(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Deploy') {
            body = beginCell().store(storeDeploy(message)).endCell();
        }
        if (body === null) { throw new Error('Invalid message type'); }
        
        await provider.internal(via, { ...args, body: body });
        
    }
    
    async getBalance(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('balance', builder.build())).stack;
        let result = source.readString();
        return result;
    }
    
    async getStatementsCount(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('statementsCount', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getStatementAddress(provider: ContractProvider, idx: bigint) {
        let builder = new TupleBuilder();
        builder.writeNumber(idx);
        let source = (await provider.get('statementAddress', builder.build())).stack;
        let result = source.readAddress();
        return result;
    }
    
    async getOwner(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('owner', builder.build())).stack;
        let result = source.readAddress();
        return result;
    }
    
}