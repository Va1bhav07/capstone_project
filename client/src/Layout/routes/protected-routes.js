import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRoutes = () => {
    // code for authentication for protected routes
    //  i.e. components require login of user
    let auth = {'token': false}
    return(
        auth.token ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default ProtectedRoutes