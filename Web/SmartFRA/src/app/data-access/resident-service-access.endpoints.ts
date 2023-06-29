
export abstract class ResidentServiceAccessEndpoints {
    // to do: once database script is created we can write down all the endpoints that represent all the queries that are neccesary.
    public static GetAllResidentServiceAccess: string = "http://localhost:3000/resident-service-access/AllResidentServiceAccess";
    public static InsertResidentServiceAccess: string = "http://localhost:3000/resident-service-access/ResidentServiceAccessRegistry";
    public static UpdateExitTime: string =  "http://localhost:3000/resident-service-access/UpdateExitTime/:exitTime/:ResidentId";
}