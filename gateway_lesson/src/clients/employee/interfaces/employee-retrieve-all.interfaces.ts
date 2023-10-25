export declare interface EmployeeRetrieveAllRequest {
    code: string
    language: string
}

export declare interface EmployeeRetrieveAllResponse {
    id: string
    name: string
    jobs: EmployeeRetrieveAllJobResponse[]
}

export declare interface EmployeeRetrieveAllJobResponse {
    id: string
    title: string
}
