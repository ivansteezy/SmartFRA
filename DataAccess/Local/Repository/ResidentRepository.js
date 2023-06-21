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

    },

    GetResidentById: async function( id ){
        const result= await Adapter.Execute(Queries.Residents.GetResidentById(id));
        const data = Adapter.EmptyOrRows(result);

        return data;

    },

    GetResidentByEmail: async function( email ){
        const result= await Adapter.Execute(Queries.Residents.GetResidentByEmail(email));
        const data = Adapter.EmptyOrRows(result);

        return data;

    },

    GetResidentByNameLastNameMotherName: async function( name, lastName, motherLastName ){
        const result= await Adapter.Execute(Queries.Residents.GetResidentByNameLastNameMotherName(name, lastName, motherLastName));
        const data = Adapter.EmptyOrRows(result);

        return data;

    }
}


module.exports = ResidentRepository;