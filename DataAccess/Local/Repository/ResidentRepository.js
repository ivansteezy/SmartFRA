// const { connection } = require("../Access/DatabaseAdapter");
const Queries = require("../Access/Queries");
const Adapter = require('../Access/DatabaseAdapter');
// const ResidentModel = require("../Models/ResidentModel");


const ResidentRepository =
{
    GetAllResidents: async function() {
        const result = await Adapter.Execute(Queries.Residents.GetAllResidents());
        const data = Adapter.EmptyOrRows(result);

        return data;
    }

    // return [new ResidentModel('1', 'Churrus', '', '', '', '', '', ''), new ResidentModel('2', 'Alma', '', '', '', '', '', '')];
}

module.exports = ResidentRepository;