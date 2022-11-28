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
        }
    },

    ResidentAccess: {

    },

    ResidentEvents: {

    },

    Residents: {
        GetResidentById: (id) => {
            const query = `SELECT * FROM Resident WHERE idResidents = ${id}`
            return query;
        },
        GetResidentByNameLastNameMotherName: (name, lastName, motherLastName) => {
            const query = `SELECT * FROM Resident WHERE residentName = '${name}' AND lastName = '${lastName}' AND motherLastName = '${motherLastName}'`;
            return query;
        },
        InsertResident: (resident) => {
            const query = `INSERT INTO Resdient(residentName, lastName, motherLastName, age, idHouse, plates, telephone, faceModel) ` +
                          `VALUES('${resident.residentName}', '${resident.lastName}', '${resident.motherLastName}', '${resident.age}', '${resident.idHouse}', '${resident.plates}', '${resident.telephone}', '${resident.faceModel}')`;
            return query;
        },
        GetAllResidents: () => {
            const query = `SELECT * FROM Residents`;
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