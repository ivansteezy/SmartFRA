const Queries = require("../Access/Queries");
const Adapter = require('../Access/DatabaseAdapter');

const GuestAccessRepository =
{
    GetAllGuestAccess: async function() {
        const result = await Adapter.Execute(Queries.GuestAccess.GetAllGuestAccess());
        const data = Adapter.EmptyOrRows(result);

        return data;
    }
}

module.exports = GuestAccessRepository;