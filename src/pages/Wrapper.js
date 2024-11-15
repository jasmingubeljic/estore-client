import { Outlet } from 'react-router-dom'
import Navigation from '../components/navigation/Navigation'

const Wrapper = () => {
    return <>
        <Navigation />
        <Outlet />
    </>
}

export default Wrapper