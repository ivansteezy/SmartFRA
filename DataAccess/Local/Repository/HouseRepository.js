const Queries = require("../Access/Queries");
const Adapter = require('../Access/DatabaseAdapter');

const HouseRepository =
{
    GetAllHouses: async function() {
        const result = await Adapter.Execute(Queries.Houses.GetAllHouses());
        const data = Adapter.EmptyOrRows(result);

        return data;
    },

    GetHouseByResident: async function( idResidents ) {
        const result = await Adapter.Execute(Queries.Houses.GetHouseByResident(idResidents));
        const data = Adapter.EmptyOrRows(result);

        return data;
    }

}


module.exports = HouseRepository;