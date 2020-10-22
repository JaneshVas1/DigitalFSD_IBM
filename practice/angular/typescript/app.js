"use strict";
//import {CricketCoach} from "./CricketCoach"
exports.__esModule = true;
exports.CricketCoach = exports.GolfCoach = void 0;
var GolfCoach = /** @class */ (function () {
    function GolfCoach() {
    }
    GolfCoach.prototype.getDailyWorkOut = function () {
        return "practice 100 balls within golf court range";
    };
    return GolfCoach;
}());
exports.GolfCoach = GolfCoach;
var CricketCoach = /** @class */ (function () {
    function CricketCoach() {
    }
    CricketCoach.prototype.getDailyWorkOut = function () {
        return "Practice Your Spin Bowling Technique Today";
    };
    CricketCoach.prototype.getDailyFortune = function () {
        return 'today is your lucky day';
    };
    return CricketCoach;
}());
exports.CricketCoach = CricketCoach;
var myCricketCoach = new CricketCoach();
console.log(myCricketCoach.getDailyWorkOut());
console.log(myCricketCoach.getDailyFortune());
var myGolfCoach = new GolfCoach();
console.log(myGolfCoach.getDailyWorkOut());
