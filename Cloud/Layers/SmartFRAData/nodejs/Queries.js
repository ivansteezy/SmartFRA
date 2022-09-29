export const Queries = {
    GeneralServiceAccess: {

    },

    GuestAccess: {

    },

    Guests: {

    },

    Houses: {

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
        }
    },

    ResidentServiceAccess: {

    },

    Services: {

    }
}
