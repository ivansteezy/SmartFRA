const Queries = require("../Access/Queries");
const Adapter = require('../Access/DatabaseAdapter');

const ResidentAccessRepository =
{
    GetAllResidentAccess: async function() {
        const result = await Adapter.Execute(Queries.ResidentAccess.GetAllResidentAccess());
        const data = Adapter.EmptyOrRows(result);

        return data;
    }

}


module.exports = ResidentAccessRepository;