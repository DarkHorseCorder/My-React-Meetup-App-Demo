import { useContext } from 'react';

import FavoritesContext from '../store/fovorites-context';
import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage() {
    const favoritesCtx = useContext(FavoritesContext);

    let content;

    if (favoritesCtx.totalFavorites === 0) {
        content = <p>You have no favorite meetup</p>
    } else {
        content = <MeetupList meetups={favoritesCtx.favorites} />
    }

    return (
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>
    );
}

export default FavoritesPage;
