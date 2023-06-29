
export abstract class GuestAccessEndpoints {
    // to do: once database script is created we can write down all the endpoints that represent all the queries that are neccesary.
    public static GetAllGuestAccess: string = "http://localhost:3000/guest-access/AllGeneralServiceAccess";
    public static InsertGuestAccess: string =  "http://localhost:3000/guest-access/GuestAccessRegistry";
    public static UpdateExitTime: string =  "http://localhost:3000/guest-access/UpdateExitTime/:exitTime/:idGuest";

}