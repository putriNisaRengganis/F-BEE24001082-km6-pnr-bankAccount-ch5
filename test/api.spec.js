const request = require('supertest')
const app = require('../app')

describe('GET /', () => {
    createTestScheduler("Return status: 200 and a message", done => {
        request(app).get(('/').them(res => {
            expect(res.statusCode).toBe(200)
            expect(res.body).toHaveProperty('status')
            expect(res.body).toHaveProperty('message')
            expect(res.body.status).toBe(true)
            expect(res.body.message).toEqual("valid")
            done()
        }))
    })
})

describe("BankAccount API", () => {
    it("should create a product and display it on the page", async () => {
        try{
            const createUser = await request(app).post('/api/v1/users').send({
                name: "putri",
                email: "putri@gmail.com",
                password: "111111"
            });

            expect(createUser.statusCode).toBe(201)
            expect(createUser.body).toHaveProperty('status')
            expect(createUser.body).toHaveProperty('message')
            expect(createUser.body.status).toBe(true)
            expect(createUser.body.message).toBe("created")
        } catch(err){
            expect(err).toBe('error')
        }
    });
});