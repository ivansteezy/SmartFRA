const Queries = require("../Access/Queries");
const Adapter = require('../Access/DatabaseAdapter');

const ServicesRepository =
{
    GetAllServices: async function() {
        const result = await Adapter.Execute(Queries.Services.GetAllServices());
        const data = Adapter.EmptyOrRows(result);

        return data;
    },

    InsertService: async function( service ) {
        const result = await Adapter.Execute(Queries.Services.InsertService(service));
        const data = Adapter.EmptyOrRows(result);

        return data;
    }
}


module.exports = ServicesRepository;