const Queries = {
    GeneralServiceAccess: {

    },

    GuestAccess: {

    },

    Guests: {

    },

    Houses: {
        GetAllHouses: () => {
            const query = `SELECT * FROM Houses`
            return query;
        },

        GetHouseByResident: (idResidents) => {
            const query = `SELECT h.idHouse, h.address, h.numberHouse FROM houses h, residents r WHERE r.idResidents = ${idResidents} AND r.idHouse = h.idHouse`
            return query;
            //h.idHouse, h.address, h.numberHouse, r.idResidents
        },
        
    },

    ResidentAccess: {
        GetAllResidentAccess: () => {
            const query = `SELECT  r.residentName, a.acessTime, a.exitTime FROM residentAccess a, Residents r WHERE a.idResident = r.idResidents`;
            return query;
        }

    },

    ResidentEvents: {

    },

    Residents: {
        GetResidentById: (id) => {
            const query = `SELECT * FROM Residents WHERE idResidents = ${id}`
            return query;
        },
        GetResidentByNameLastNameMotherName: (name, lastName, motherLastName) => {
            const query = `SELECT * FROM Residents WHERE residentName = '${name}' AND lastName = '${lastName}' AND motherLastName = '${motherLastName}'`;
            return query;
        },
        InsertResident: (resident) => {
            const query = `INSERT INTO Residents(residentName, lastName, motherLastName, age, idHouse, plates, telephone, faceModel) ` +
                          `VALUES('${resident.residentName}', '${resident.lastName}', '${resident.motherLastName}', '${resident.age}', '${resident.idHouse}', '${resident.plates}', '${resident.telephone}', '${resident.faceModel}')`;
            return query;
        },
        GetAllResidents: () => {
            const query = `SELECT * FROM Residents`;
            return query;
        },
        GetResidentByEmail: (email) => {
            const query = `SELECT * FROM Residents WHERE email = ${email}`
            return query;
        },
        GetResidentByHouse: (idHouse) => {
            const query = `SELECT * FROM Residents WHERE idHouse = ${idHouse}`
            return query;
        }
    },

    ResidentServiceAccess: {

    },

    Services: {
        GetAllServices: () => {
            const query = `SELECT * FROM Services'`;
            return query;
        },

        InsertService: (serviceName) => {
            const query = `INSERT INTO Services(serviceName) VALUES(${serviceName})'`;
            return query;
        },

        DeleteService: (idService) => {
            const query = `DELETE FROM Services WHERE id = ${idService}`;
            return query;
        }
    }
}

module.exports = Queries;