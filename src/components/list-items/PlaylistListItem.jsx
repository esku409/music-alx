import { getYearFromDate } from '../../utils/formatters';
import { Link } from 'react-router-dom';

const PlaylistListItem = ({ id, title, imgSrc, creationDate }) => {
    const createdYear = getYearFromDate(creationDate);

    return (
        <li className='playlist-item'>
            <Link to={ `playlist/${ id }` }>
                <img src={ imgSrc } alt='playlist-img' />

                <div className='playlist-details'>
                    <strong>{ title }</strong>
                    <small>{ createdYear }</small>
                </div>
            </Link>
        </li>
    );
};

export default PlaylistListItem;