import { Link } from 'react-router-dom'
import { HomeOutlined, AddAPhotoOutlined } from '@material-ui/icons'
import { useMedia } from '../Posts/post/styles'

const Navbar = () => {
    const media = useMedia()
    return (
        <nav className="flex flex-jc-sb flex-ai-c">
            <div className="logo">
                <h3>RJ</h3>
            </div>
            <ul className="flex flex-jc-sb flex-ai-c">
                <Link className="space-li  flex flex-ai-c" to="/">
                    <HomeOutlined fontSize={media ? 'large' : 'default'} />
                    {!media ? 'Home' : ''}
                </Link>
                <Link className="space-li  flex flex-ai-c" to="/add">
                    <AddAPhotoOutlined fontSize={media ? 'large' : 'default'} />
                    {!media ? 'New Post' : ''}
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar
