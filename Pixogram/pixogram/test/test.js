let chai = require("chai");
var path = require('path');

let app = require("./../app");
let chaiHttp = require("chai-http");

chai.use(chaiHttp);

// Assertion style
chai.should();

console.log("ready to test");


    describe("Server APIs", function () {
        // get
        describe("GET /account/search", () => {
            it("should fetch all users", () => {
                chai.request(app)
                    .get("/account/search")
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.should.be.a("object");
                       /* res.body.should.have.property("success");
                        res.body.should.have.property("success").eq(true);
                        res.should.have.property("data").be.a("array");*/
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
        describe("GET /media/:userId", () => {
            it("should not find user", () => {
                //invalid user
                let userId = "5f90047c";
                chai.request(app)
                    .get("/media/" + userId)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.should.be.a("object");
                      /*  res.body.should.have.property("success").eq(false);
                        res.body.should.have.property("message").be.eq("Invalid username");*/
                    });
            });
          /*  it("should find user", () => {
                let userId = "5f90047c447128608075a32d";
                chai.request(app)
                    .get("/media/" + userId)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.should.be.a("object");
                      /*  res.body.should.have.property("success").eq(true);
                        res.body.should.have.property("data").be.a("object");
                        res.body.should.have.property("data").have.property('role').be.eq("admin");*/
                   /* });
            });*/
        });
        /*

                // post new data
                // get by id/name
                describe("POST /users", () => {
                    it("should create new user", () => {
                        let user = {firstname: 'demo', lastname:'demo',username:'testinguser', password: 'demo@123'};
                        chai.request(app)
                            .post("/users/add-user")
                            .send(user)
                            .end((err, res) => {
                                res.should.have.status(200);
                                res.should.be.a("object");
                               // res.body.should.have.property("success").eq(true);
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
            })*/
})