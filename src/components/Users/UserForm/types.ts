export interface IUserData {
    id?: number 
    first_name?: string
    second_name?: string
    age?: number
    email?: string
    position?: string
    handler: (data:object, id:number) => void
}

export interface IOption {
    value: string
    label: string
}