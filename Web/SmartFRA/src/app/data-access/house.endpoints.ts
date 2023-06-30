
export abstract class HouseEndpoints {
    // to do: once database script is created we can write down all the endpoints that represent all the queries that are neccesary.
    public static GetAllHouses: string = "http://localhost:3000/house/AllHouses";
    public static GetHouseByResident: string = "http://localhost:3000/house/HouseByResident/:idResidents";
    public static InsertHouse: string = "http://localhost:3000/house/HouseRegistry";
}