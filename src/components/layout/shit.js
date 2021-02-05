import '../../styles/style.scss'
import Navbar from '../navbar/Navbar'

const Shit = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

export default Shit
