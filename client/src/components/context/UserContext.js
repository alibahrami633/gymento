import React from "react"

export const UserContext = React.createContext({})

export default (props) => {
    const [userState, setUserState] = React.useState(null)

    return <UserContext.Provider value={{ userState, setUserState }} {...props} />
}