const Queries = require("../Access/Queries");
const Adapter = require('../Access/DatabaseAdapter');

const ResidentServiceAccessRepository =
{
    GetAllResidentServiceAccess: async function() {
        const result = await Adapter.Execute(Queries.ResidentServiceAccess.GetAllResidentServiceAccess());
        const data = Adapter.EmptyOrRows(result);

        return data;
    },

    InsertResidentServiceAccess: async function( residentserviceaccess ){
        const result= await Adapter.Execute(Queries.ResidentServiceAccess.InsertResidentServiceAccess(residentserviceaccess));
        const data = Adapter.EmptyOrRows(result);

        return data;

    },

    UpdateExitTime: async function( exitTime, ResidentId ){
        const result= await Adapter.Execute(Queries.ResidentServiceAccess.UpdateExitTime(exitTime, ResidentId));
        const data = Adapter.EmptyOrRows(result);

        return data;

    },
}

module.exports = ResidentServiceAccessRepository;