let Calculator = require("./../calculator");
let chai = require("chai");

let app = require("./../index");
let chaiHttp = require("chai-http");

chai.use(chaiHttp);

// Assertion style
chai.should();

console.log("ready to test");


describe("Testing", function () {
    describe("Calculator", function () {

        let cal;

        // test add should add

        this.beforeAll(function () {
            cal = new Calculator();
        })

        it("should add 2 positive nums", function () {
            // let cal = new Calculator();
            let result = cal.add(5, 8);

            result.should.be.a("number");
            result.should.be.eq(13);
        })

        it("should add 1 positive and 1 negative num", function () {
            // let cal = new Calculator();
            let result = cal.add(5, -8);

            result.should.be.a("number");
            result.should.be.eq(-3);
        })

        // test div should not div
    })

    describe("Server APIs", function () {
        // get
        describe("GET /users", () => {
            it("should fetch all users", () => {
                chai.request(app)
                    .get("/users")
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.should.be.a("object");
                        res.body.should.have.property("success");
                        res.body.should.have.property("success").eq(true);
                        res.body.should.have.property("data").be.a("array");
                    });
            })
            it("should not fetch users", () => {
                chai.request(app)
                    .get("/hello/users")
                    .end((err, res) => {
                        res.should.have.status(404);
                    });
            })
        })

        // get by id/name
        describe("GET /users/:name", () => {
            it("should not find user", () => {
                let name = "mark";
                chai.request(app)
                    .get("/users/" + name)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.should.be.a("object");
                        res.body.should.have.property("success").eq(false);
                        res.body.should.have.property("message").be.eq("Invalid username");
                    });
            });
            it("should find user", () => {
                let name = "admin";
                chai.request(app)
                    .get("/users/" + name)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.should.be.a("object");
                        res.body.should.have.property("success").eq(true);
                        res.body.should.have.property("data").be.a("object");
                        res.body.should.have.property("data").have.property('role').be.eq("admin");
                    });
            });
        });

        // post new data
        // get by id/name
        describe("POST /users", () => {
            it("should create new user", () => {
                let user = {name: 'demo', password: 'demo@123'};
                chai.request(app)
                    .post("/users")
                    .send(user)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.should.be.a("object");
                        res.body.should.have.property("success").eq(true);
                    });
            });
        });


        // delete
        describe("DELETE /users", () => {
            it("should delete user", () => {
                let name="demo";
                chai.request(app)
                    .delete("/users/"+ name)
                    .end((err, res) => {
                        res.should.have.status(201);
                        res.should.be.a("object");
                        res.body.should.have.property("success").eq(true);
                    });
            });
        });
        // put

        describe("PUT /users", () => {
            it("should put user", () => {
                let user = {name: 'demo', password: 'passwd@123'};
                let name ="demo";
                chai.request(app)
                    .put("/users/"+ name)
                    .end((err, res) => {
                        res.should.have.status(201);
                        res.should.be.a("object");
                        res.body.should.have.property("success").eq(true);
                    });
            });
        });
    })
})