const Queries = require("../Access/Queries");
const Adapter = require('../Access/DatabaseAdapter');

const ResidentRepository =
{
    GetAllResidents: async function() {
        const result = await Adapter.Execute(Queries.Residents.GetAllResidents());
        const data = Adapter.EmptyOrRows(result);

        return data;
    }
}

module.exports = ResidentRepository;