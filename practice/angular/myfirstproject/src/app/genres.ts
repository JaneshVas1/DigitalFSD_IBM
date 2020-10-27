export class Genres {

  constructor(public _id:string, public name: string,public _v:string) {
    console.log("inside constructor");
    this._id = _id;
    this.name = name;
    this._v=_v;


  }

}
