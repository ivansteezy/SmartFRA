const Queries = require("../Access/Queries");
const Adapter = require('../Access/DatabaseAdapter');

const GuestRepository =
{
    GetAllGuests: async function() {
        const result = await Adapter.Execute(Queries.Guests.GetAllGuests());
        const data = Adapter.EmptyOrRows(result);

        return data;
    },

    GetGuestById: async function( idGuest ) {
        const result = await Adapter.Execute(Queries.Guests.GetGuestById(idGuest));
        const data = Adapter.EmptyOrRows(result);

        return data;
    }

}


module.exports = GuestRepository;