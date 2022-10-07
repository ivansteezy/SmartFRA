
export interface House {
    idEvent: number
    fkIdResident: number
    eventName: string
    startTime: Date
    endTime: Date
    state: number
    accessNumber: number
}