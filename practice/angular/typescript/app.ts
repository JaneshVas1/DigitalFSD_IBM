//import {CricketCoach} from "./CricketCoach"

//import {GolfCoach} from "./GolfCoach";
export interface Coach {
    getDailyWorkOut();
}

export interface FortuneService
{
    getDailyFortune():string;
}

export class GolfCoach implements Coach
{
    getDailyWorkOut():string {
        return "practice 100 balls within golf court range";
    }

}

export class CricketCoach implements Coach, FortuneService{

    getDailyWorkOut():string
    {
        return "Practice Your Spin Bowling Technique Today";
    }

    getDailyFortune():string
    {
        return 'today is your lucky day';
    }

}
let myCricketCoach=new CricketCoach();

console.log(myCricketCoach.getDailyWorkOut());

console.log(myCricketCoach.getDailyFortune());

let myGolfCoach=new GolfCoach();

console.log(myGolfCoach.getDailyWorkOut());