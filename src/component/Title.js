import {
    Link
} from "react-router-dom";
const Title = () => {

    return (<div className='title'>
        <h1 className='title__text'>
            <a href="/">
                <Link to='/'>
                    Pianisto
                </Link>
            </a>
        </h1>
    </div>)
}

export default Title