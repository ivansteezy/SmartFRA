const Queries = require("../Access/Queries");
const Adapter = require('../Access/DatabaseAdapter');

const ResidentRepository =
{
    GetAllResidents: async function() {
        const result = await Adapter.Execute(Queries.Residents.GetAllResidents());
        const data = Adapter.EmptyOrRows(result);

        return data;
    },

    InsertResident: async function( resident ){
        const result= await Adapter.Execute(Queries.Residents.InsertResident(resident));
        const data = Adapter.EmptyOrRows(result);

        return data;

    }
}


module.exports = ResidentRepository;