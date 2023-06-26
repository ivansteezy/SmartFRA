const Queries = require("../Access/Queries");
const Adapter = require('../Access/DatabaseAdapter');

const ResidentServiceAccessRepository =
{
    GetAllResidentServiceAccess: async function() {
        const result = await Adapter.Execute(Queries.ResidentServiceAccess.GetAllResidentServiceAccess());
        const data = Adapter.EmptyOrRows(result);

        return data;
    }
}

module.exports = ResidentServiceAccessRepository;