const Queries = require("../Access/Queries");
const Adapter = require('../Access/DatabaseAdapter');

const ResidentEventsRepository =
{
    GetAllResidentEventsRepository: async function() {
        const result = await Adapter.Execute(Queries.ResidentEvents.GetAllResidentEvents());
        const data = Adapter.EmptyOrRows(result);

        return data;
    },

    InsertResidentEvent: async function( residentevent ){
        const result= await Adapter.Execute(Queries.ResidentEvents.InsertResidentEvent(residentevent));
        const data = Adapter.EmptyOrRows(result);

        return data;

    },
}

module.exports = ResidentEventsRepository;