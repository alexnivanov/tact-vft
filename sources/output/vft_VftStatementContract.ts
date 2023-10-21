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

 type VftStatementContract_init_args = {
    $$type: 'VftStatementContract_init_args';
    parent: Address;
    idx: bigint;
    pro: boolean;
}

function initVftStatementContract_init_args(src: VftStatementContract_init_args) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeAddress(src.parent);
        b_0.storeInt(src.idx, 257);
        b_0.storeBit(src.pro);
    };
}

async function VftStatementContract_init(parent: Address, idx: bigint, pro: boolean) {
    const __code = Cell.fromBase64('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');
    const __system = Cell.fromBase64('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');
    let builder = beginCell();
    builder.storeRef(__system);
    builder.storeUint(0, 1);
    initVftStatementContract_init_args({ $$type: 'VftStatementContract_init_args', parent, idx, pro })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

const VftStatementContract_errors: { [key: number]: { message: string } } = {
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

const VftStatementContract_types: ABIType[] = [
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

const VftStatementContract_getters: ABIGetter[] = [
    {"name":"balance","arguments":[],"returnType":{"kind":"simple","type":"string","optional":false}},
    {"name":"data","arguments":[],"returnType":{"kind":"simple","type":"VftData","optional":false}},
    {"name":"proStatementsCount","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"proStatementAddress","arguments":[{"name":"idx","type":{"kind":"simple","type":"int","optional":false,"format":257}}],"returnType":{"kind":"simple","type":"address","optional":false}},
    {"name":"conStatementsCount","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"conStatementAddress","arguments":[{"name":"idx","type":{"kind":"simple","type":"int","optional":false,"format":257}}],"returnType":{"kind":"simple","type":"address","optional":false}},
    {"name":"votesCount","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"voteAddress","arguments":[{"name":"idx","type":{"kind":"simple","type":"int","optional":false,"format":257}}],"returnType":{"kind":"simple","type":"address","optional":false}},
]

const VftStatementContract_receivers: ABIReceiver[] = [
    {"receiver":"internal","message":{"kind":"typed","type":"SetStatementData"}},
    {"receiver":"internal","message":{"kind":"typed","type":"NewChildStatement"}},
    {"receiver":"internal","message":{"kind":"text","text":"vote"}},
    {"receiver":"internal","message":{"kind":"empty"}},
    {"receiver":"internal","message":{"kind":"text","text":"withdraw all"}},
    {"receiver":"internal","message":{"kind":"text","text":"withdraw safe"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Withdraw"}},
]

export class VftStatementContract implements Contract {
    
    static async init(parent: Address, idx: bigint, pro: boolean) {
        return await VftStatementContract_init(parent, idx, pro);
    }
    
    static async fromInit(parent: Address, idx: bigint, pro: boolean) {
        const init = await VftStatementContract_init(parent, idx, pro);
        const address = contractAddress(0, init);
        return new VftStatementContract(address, init);
    }
    
    static fromAddress(address: Address) {
        return new VftStatementContract(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types:  VftStatementContract_types,
        getters: VftStatementContract_getters,
        receivers: VftStatementContract_receivers,
        errors: VftStatementContract_errors,
    };
    
    private constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: SetStatementData | NewChildStatement | 'vote' | null | 'withdraw all' | 'withdraw safe' | Withdraw) {
        
        let body: Cell | null = null;
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'SetStatementData') {
            body = beginCell().store(storeSetStatementData(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'NewChildStatement') {
            body = beginCell().store(storeNewChildStatement(message)).endCell();
        }
        if (message === 'vote') {
            body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
        }
        if (message === null) {
            body = new Cell();
        }
        if (message === 'withdraw all') {
            body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
        }
        if (message === 'withdraw safe') {
            body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Withdraw') {
            body = beginCell().store(storeWithdraw(message)).endCell();
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
    
    async getData(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('data', builder.build())).stack;
        const result = loadTupleVftData(source);
        return result;
    }
    
    async getProStatementsCount(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('proStatementsCount', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getProStatementAddress(provider: ContractProvider, idx: bigint) {
        let builder = new TupleBuilder();
        builder.writeNumber(idx);
        let source = (await provider.get('proStatementAddress', builder.build())).stack;
        let result = source.readAddress();
        return result;
    }
    
    async getConStatementsCount(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('conStatementsCount', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getConStatementAddress(provider: ContractProvider, idx: bigint) {
        let builder = new TupleBuilder();
        builder.writeNumber(idx);
        let source = (await provider.get('conStatementAddress', builder.build())).stack;
        let result = source.readAddress();
        return result;
    }
    
    async getVotesCount(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('votesCount', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getVoteAddress(provider: ContractProvider, idx: bigint) {
        let builder = new TupleBuilder();
        builder.writeNumber(idx);
        let source = (await provider.get('voteAddress', builder.build())).stack;
        let result = source.readAddress();
        return result;
    }
    
}