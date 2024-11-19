import { Outlet } from 'react-router-dom'
import Navigation from '../components/navigation/Navigation'
import Footer from '../components/footer/Footer'

const Wrapper = () => {
    return <>
        <Navigation />
        <Outlet />
        <Footer />
    </>
}

export default Wrapper