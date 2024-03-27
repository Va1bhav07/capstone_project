import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRoutes = () => {
    // code for authentication for protected routes
    //  i.e. components require login of user
    let auth = {'token': true}
    return(
        auth.token ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default ProtectedRoutes