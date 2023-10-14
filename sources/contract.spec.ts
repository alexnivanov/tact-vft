import { toNano } from "ton";
import { ContractSystem } from "@tact-lang/emulator";
import { SampleTactContract } from "./output/sample_SampleTactContract";

describe("contract", () => {
    it("should deploy correctly", async () => {
        // Create ContractSystem and deploy contract
        let system = await ContractSystem.create();
        let owner = system.treasure("owner");
        let nonOwner = system.treasure("non-owner");
        let contract = system.open(await SampleTactContract.fromInit(owner.address));
        system.name(contract.address, "main");
        let track = system.track(contract);
        await contract.send(owner, { value: toNano(1) }, { $$type: "Deploy", queryId: 0n });
        await system.run();

        // Check counter
        expect(await contract.getCounter()).toEqual(0n);

        // Increment counter
        await contract.send(owner, { value: toNano(1) }, "increment");
        await system.run();

        // Check counter
        expect(await contract.getCounter()).toEqual(1n);

        // Non-owner
        await contract.send(nonOwner, { value: toNano(1) }, "increment");
        await system.run();

        // Check counter not changed
        expect(await contract.getCounter()).toEqual(1n);
    });
});
