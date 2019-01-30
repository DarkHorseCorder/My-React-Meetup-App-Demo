import { useContext } from 'react';
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import FavoritesContext from '../../store/fovorites-context';

function MainNavigation() {
    const favoritesCtx = useContext(FavoritesContext);

    return (
    <header className={classes.header}>
        <div className={classes.logo}>Welcome To My Meetup App</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Meetups</Link>
                </li>
                <li>
                    <Link to='/new-meetup'>Add New Meetup</Link>
                </li>
                <li>
                    <Link to='/favorites'>
                        My Favorites
                        <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
    );
}

export default MainNavigation;