/**
 * 
 * Date: 05/09/2018	
 */
export class Persondetails
{
	
	private _fname: string;
	private _lname: string;
	private _age: number;
	private _gender: string;
	private _weight: number;
	
	constructor() { 
	}
	
	set fname(value: string) {
		this._fname = value;
	}
	get fname() : string {
		return this._fname;
	}
	set lname(value: string) {
		this._lname = value;
	}
	get lname() : string {
		return this._lname;
	}
	set age(value: number) {
		this._age = value;
	}
	get age() : number {
		return this._age;
	}
	set gender(value: string) {
		this._gender = value;
	}
	get gender() : string {
		return this._gender;
	}
	set weight(value: number) {
		this._weight = value;
	}
	get weight() : number {
		return this._weight;
	}
	
}
