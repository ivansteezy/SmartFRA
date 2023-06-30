
export abstract class ResidentEventEndpoints {
    // to do: once database script is created we can write down all the endpoints that represent all the queries that are neccesary.
    public static GetAllResidentEvents: string = "http://localhost:3000/resident-event/AllResidentEvents";
    public static InsertResidentEvent: string =  "http://localhost:3000/resident-event/ResidentEventRegistry";
    public static UpdateState: string =  "http://localhost:3000/resident-event/UpdateState/:state/:idEvent";
    public static GetEventByResidentId: string = "http://localhost:3000/resident-event/EventByResidentId/:IdResident";
}