
export abstract class ResidentEndpoints {
    // to do: once database script is created we can write down all the endpoints that represent all the queries that are neccesary.
    public static GetResidentByName: string =  "https://jsonplaceholder.typicode.com";
    public static InsertResident: string =  "http://localhost:3000/resident/ResidentRegistry";
    public static GetResidentById: string = "http://localhost:3000/resident/ResidentById/:id'"
    public static GetAllResidents: string = "http://localhost:3000/resident/AllResidents";
    public static GetResidentByEmail: string = "http://localhost:3000/resident/ResidentByEmail/:email";
    public static GetResidentByNameLastNameMotherName: string = "http://localhost:3000/resident/ResidentByNameLastNameMotherName/:name/:lastName/:motherName";
    public static GetResidentByHouse: string = "http://localhost:3000/resident/ResidentByHouse/:idHouse";
}