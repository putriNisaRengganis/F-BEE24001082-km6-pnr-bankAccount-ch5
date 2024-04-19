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

//const mockRequest = ( body = {}) => ({body})
//const mockResponse = () => {
//    const res = {}
//    res.json = jest.fn().mockReturnValue(res)
//    res.status = jest.fn().mockReturnValue(res)
//    return res
// }
//describe('base.index function', () => {
//    test('res.json called with {status: true, message: "Hello World"}', done => {
//        const req = mockRequest()
//        const res = mockResponse()
//        base.index(req, res)
//        expect(res.status).toBeCalledWith(200)
//        expect(res.json).toBeCalledWith({status: true, message: 'Hello World'})
//        done()
//    })
// })
