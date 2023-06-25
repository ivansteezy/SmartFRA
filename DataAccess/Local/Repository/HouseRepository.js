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
    },

    InsertHouse: async function(house) {
        const resultHouse = await Adapter.Execute(Queries.Houses.GetHouseByHouseNumber(house.numberHouse));
        const houseData = Adapter.EmptyOrRows(resultHouse);

        if (houseData.length !== 0)
        {
            console.log('The house provided already exists in database');
            return this.GetHouseError(400, "This house already exists");
        }
        else
        {
            const resultInsertHopuse = await Adapter.Execute(Queries.Houses.InsertHouse(house));
            const instertHouseData = Adapter.EmptyOrRows(resultInsertHopuse);
            
            console.log('Post the house successfully');
            return instertHouseData;
        }
    },

    GetHouseError: function(errorCode, reason) {
        const errorResponse = {
            errorCode: errorCode,
            reason: reason
        };

        return errorResponse;
    }
}


module.exports = HouseRepository;