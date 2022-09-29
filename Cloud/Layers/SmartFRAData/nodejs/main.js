import { ResidentModel } from './ResidentModel.js';
import { Queries } from './Queries.js';


const resident = new ResidentModel('Ivan', 'Ayala', 'Martinez', '22', '3', '', '311224433', 'ivanyala.xml');
console.log(Queries.Residents.InsertResident(resident));

export { ResidentModel, Queries };