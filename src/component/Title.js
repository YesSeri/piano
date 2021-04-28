import {
    Link
} from "react-router-dom";
const Title = () => {

    return (<div className='title'>
        <h1 className='title__text'>
            <Link to='/'>
                Pianisto
            </Link>
        </h1>
    </div>)
}

export default Title