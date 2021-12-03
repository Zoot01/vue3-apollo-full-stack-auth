export interface userInterface {
    email: string
    exp: number
    firstName: string
    iat: number
    lastName: string
    tokenVersion: number
    userID: string
    phoneNumber: string
}

export interface RootStoreInterface {
    user: userInterface | null
    isLoggedIn: boolean
    accessToken: string | null
}
