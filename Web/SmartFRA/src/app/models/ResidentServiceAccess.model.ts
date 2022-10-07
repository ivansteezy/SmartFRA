
export interface ResidentServiceAccess {
    idServiceAccess: number
    fkIdResident: number
    accessTime: Date
    exitTime: Date
    providerName: string
    phoneNumber: number
    cicNumber: string
}