const Queries = require("../Access/Queries");
const Adapter = require('../Access/DatabaseAdapter');

const GeneralServiceAccessRepository =
{
    GetAllGeneralServiceAccess: async function() {
        const result = await Adapter.Execute(Queries.GeneralServiceAccess.GetAllGeneralServiceAccess());
        const data = Adapter.EmptyOrRows(result);

        return data;
    }
}


module.exports = GeneralServiceAccessRepository;