import {getAllBankAccounts} from"../api/v1/bank_accounts/controller.js"
import {fn} from "jest-mock";

describe("Base Controller", ()=> {
    it ("should return all bank accounts", async () => {
        const req = {};
        const res = {
            status: fn().mockReturnThis(),
            json: fn()
        };
        await getAllBankAccounts(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({
            message: "All bank_accounts",
            data:expect.any(Array)
        });
    });
});


