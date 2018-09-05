/**
 * 
 * Date: 05/09/2018	
 */
export class Testmodel
{
	
	private _id: string;
	
	constructor() { 
	}
	
	set id(value: string) {
		this._id = value;
	}
	get id() : string {
		return this._id;
	}
	
}
