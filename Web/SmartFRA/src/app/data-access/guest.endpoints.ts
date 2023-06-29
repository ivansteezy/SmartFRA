
export abstract class GuestEndpoints {
    // to do: once database script is created we can write down all the endpoints that represent all the queries that are neccesary.
    public static GetAllGuests: string = "http://localhost:3000/guest/AllGuests";
    public static GetGuestById: string = "http://localhost:3000/guest/GuestById/:idGuest";
    public static InsertGuest: string = "http://localhost:3000/guest/GuestRegistry";
    public static GetAllVisits: string = "http://localhost:3000/guest/AllVisits";
}