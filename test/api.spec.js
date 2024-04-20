import app from "../app";
import request from "supertest";
describe("Bank Account", () => {
    it("GET /api/v1/bank_accounts", (done) => {
        request(app).get("/api/v1/bank_accounts").then((res) => {
            expect([200, 401, 403]).toContain(res.statusCode);
            expect(res.body).toHaveProperty("message");
            expect(res.body).toHaveProperty("data");

            done();
        });
    });

    it("POST /api/v1/bank_accounts", (done) => {
        request(app).post("/api/v1/bank_accounts").send({
            bank_name: "BRI",
            bank_account_number: "1234567890",
            ballance: 1000000,
            user_id: 1,
        }).then((res) => {
            expect([200, 401, 403]).toContain(res.statusCode);
            expect(res.body).toHaveProperty("message");
            expect(res.body).toHaveProperty("data");

            done();
        });
    });

    it("GET /api/v1/bank_accounts/:id", (done) => {
        request(app).get("/api/v1/bank_accounts/1").then((res) => {
            expect([200, 401, 403]).toContain(res.statusCode);
            expect(res.body).toHaveProperty("message");
            expect(res.body).toHaveProperty("data");

            done();
        });
    });

    it("PUT /api/v1/bank_accounts/:id", (done) => {
        request(app).put("/api/v1/bank_accounts/1").send({
            bank_name: "BRI",
            bank_account_number: "1234567890",
            ballance: 200000,
            user_id: 1,
        }).then((res) => {
            expect([200, 401, 403]).toContain(res.statusCode);
            expect(res.body).toHaveProperty("message");
            expect(res.body).toHaveProperty("data");

            done();
        });
    });

    it("DELETE /api/v1/bank_accounts/:id", (done) => {
        request(app).delete("/api/v1/bank_accounts/1").then((res) => {
            expect([200, 401, 403]).toContain(res.statusCode);
            expect(res.body).toHaveProperty("message");
            expect(res.body).toHaveProperty("data");

            done();
        });
    });

});

describe("Users", () => {
    it("GET /api/v1/users", (done) => {
        request(app).get("/api/v1/users").then((res) => {
            expect([200, 401, 403]).toContain(res.statusCode);
            expect(res.body).toHaveProperty("message");
            expect(res.body).toHaveProperty("data");

            done();
        });
    });
    it("POST /api/v1/users", (done) => {
        request(app).post("/api/v1/users").send({
            email: "putrinisarengganis@gmail.com",
            name: "Putri Nisa Rengganis",
            password: "659204",
            profile: { 
            identity_type: "type3",
            identity_number: "123456789",
            address: "Sumedang"
            }
        }).then((res) => {
            expect([200, 401, 403]).toContain(res.statusCode);
            expect(res.body).toHaveProperty("message");
            expect(res.body).toHaveProperty("data");

            done();
        });
    });
    it("GET /api/v1/users/:id", (done) => {
        request(app).get("/api/v1/users/1").then((res) => {
            expect([200, 401, 403]).toContain(res.statusCode);
            expect(res.body).toHaveProperty("message");
            expect(res.body).toHaveProperty("data");

            done();
        });
    });
    it("PUT /api/v1/users/:id", (done) => {
        request(app).put("/api/v1/users/1").send({
            email: "ochi@gmail.com",
            name: "ochi",
            password: "1234",
            profile: { 
            identity_type: "type3",
            identity_number: "11111",
            address: "Sumedang"
            }
        }).then((res) => {
            expect([200, 401, 403]).toContain(res.statusCode);
            expect(res.body).toHaveProperty("message");
            expect(res.body).toHaveProperty("data");

            done();
        });
    });
    it("DELETE /api/v1/users/:id", (done) => {
        request(app).delete("/api/v1/users/1").then((res) => {
            expect([200, 401, 403]).toContain(res.statusCode);
            expect(res.body).toHaveProperty("message");
            expect(res.body).toHaveProperty("data");

            done();
        });
    });
});
    describe("Transactions", () => {
        it("GET /api/v1/transaction", (done) => {
            request(app).get("/api/v1/transaction").then((res) => {
                expect([200, 401, 403]).toContain(res.statusCode);
                expect(res.body).toHaveProperty("message");
                expect(res.body).toHaveProperty("data");
    
                done();
            });
        });
        it("POST /api/v1/transation", (done) => {
            request(app).post("/api/v1/transation").send({
                source_account_id: 1,
                destination_account_id: 1,
                amount: 35000
            }).then((res) => {
                expect([200, 401, 403]).toContain(res.statusCode);
                expect(res.body).toHaveProperty("message");
                expect(res.body).toHaveProperty("data");
    
                done();
            });
        });
        it("GET /api/v1/transaction/:id", (done) => {
            request(app).get("/api/v1/transaction/1").then((res) => {
                expect([200, 401, 403]).toContain(res.statusCode);
                expect(res.body).toHaveProperty("message");
                expect(res.body).toHaveProperty("data");
    
                done();
            });
        });
        it("PUT /api/v1/transaction/:id", (done) => {
            request(app).put("/api/v1/transaction/2").send({
                source_account_id: 2,
                destination_account_id: 3,
                amount: 35000
            }).then((res) => {
                expect([200, 401, 403]).toContain(res.statusCode);
                expect(res.body).toHaveProperty("message");
                expect(res.body).toHaveProperty("data");
    
                done();
            });
        });
        it("DELETE /api/v1/transaction/:id", (done) => {
            request(app).delete("/api/v1/transaction/1").then((res) => {
                expect([200, 401, 403]).toContain(res.statusCode);
                expect(res.body).toHaveProperty("message");
                expect(res.body).toHaveProperty("data");
    
                done();
            });
        });
    });
describe("Profiles", () => {
        it("GET /api/v1/profiles", (done) => {
            request(app).get("/api/v1/profiles").then((res) => {
                expect([200, 401, 403]).toContain(res.statusCode);
                expect(res.body).toHaveProperty("message");
                expect(res.body).toHaveProperty("data");
    
                done();
            });
        });
        it("POST /api/v1/profiles", (done) => {
            request(app).post("/api/v1/profiles").send({
                identity_type: "type3",
                identity_number: "34567",
                address: "Sumedang"
            }).then((res) => {
                expect([200, 401, 403]).toContain(res.statusCode);
                expect(res.body).toHaveProperty("message");
                expect(res.body).toHaveProperty("data");
    
                done();
            });
        });
        it("GET /api/v1/profiles/:id", (done) => {
            request(app).get("/api/v1/profiles/1").then((res) => {
                expect([200, 401, 403]).toContain(res.statusCode);
                expect(res.body).toHaveProperty("message");
                expect(res.body).toHaveProperty("data");
    
                done();
            });
        });
        it("PUT /api/v1/profiles/:id", (done) => {
            request(app).put("/api/v1/profiles/1").send({
                identity_type: "type3",
                identity_number: "34567",
                address: "Bandung"
            }).then((res) => {
                expect([200, 401, 403]).toContain(res.statusCode);
                expect(res.body).toHaveProperty("message");
                expect(res.body).toHaveProperty("data");
    
                done();
            });
        });
        it("DELETE /api/v1/profiles/:id", (done) => {
            request(app).delete("/api/v1/profiles/1").then((res) => {
                expect([200, 401, 403]).toContain(res.statusCode);
                expect(res.body).toHaveProperty("message");
                expect(res.body).toHaveProperty("data");
    
                done();
            });
        });
    });
    describe("Login", () => {
        it("POST /api/auth/login", (done) => {
            request(app).post("/api/auth/login").send({
                email: "putrinisarengganis@gmail.com",
                password: "659204"
            }).then((res) => {
                expect([200, 401, 403]).toContain(res.statusCode);
                expect(res.body).toHaveProperty("message");
                expect(res.body).toHaveProperty("data");
    
                done();
            });
        });
    });
    describe("Register", () => {
        it("POST /api/auth/register", (done) => {
            request(app).post("/api/auth/register").send({
                //data sdh terdaftar
                email: "putrinisarengganis@gmail.com",
                name: "Putri Nisa Rengganis",
                password: "659204",
                profile: { 
                    identity_type: "type3",
                    identity_number: "123456789",
                    address: "Sumedang"
                }
            }).then((res) => {
                expect([200, 401, 403, 500]).toContain(res.statusCode);
                expect(res.body).toHaveProperty("message");
                expect(res.body).toHaveProperty("data");
    
                done();
            });
        });
    });