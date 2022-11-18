const { connection } = require("../Access/DatabaseAdapter");
const Queries = require("../Access/Queries");
const ResidentModel = require("../Models/ResidentModel");

const ResidentRepository =
{
    GetAllResidents() {
        //connection.query(Queries.Residents.GetAllResidents, (error, result) => {
    
        //});
        // return ['Alma', 'Churrus', 'Hector'];
        return [new ResidentModel('1', 'Churrus', '', '', '', '', '', ''), new ResidentModel('2', 'Alma', '', '', '', '', '', '')];
        ///connection.end();
    }


};

module.exports = ResidentRepository;