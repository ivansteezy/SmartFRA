const Queries = require("../Access/Queries");
const Adapter = require('../Access/DatabaseAdapter');

const ResidentEventsRepository =
{
    GetAllResidentEventsRepository: async function() {
        const result = await Adapter.Execute(Queries.ResidentEvents.GetAllResidentEvents());
        const data = Adapter.EmptyOrRows(result);

        return data;
    }
}

module.exports = ResidentEventsRepository;