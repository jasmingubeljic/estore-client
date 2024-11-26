import { Outlet } from 'react-router-dom'
import Navigation from '../components/navigation/Navigation'
import Footer from '../components/footer/Footer'

const Wrapper = () => {
    return (
        <div>
            <Navigation />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Wrapper