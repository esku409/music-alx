import { playSong } from '../../redux/features/songsSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SearchResultItem = ({ type, result }) => {
    const router =[];
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { id, name, title, picture_medium, md5_image } = result; 
    
    return (
        <li
            onClick={
                type === 'track'
                    ? () => dispatch(playSong({ playlist: [result], index: 0}))
                    : () => navigate(`/${ type }/${ id }`)
            }
        >
            <img
                src={ picture_medium || `https://e-cdns-images.dzcdn.net/images/artist/${ md5_image }/1000x1000-000000-80-0-0.jpg` }
                alt={ title || name }
            />
            <span className='overflowing-text'>{ name || title }</span>
        </li>
    );
};

export default SearchResultItem;
