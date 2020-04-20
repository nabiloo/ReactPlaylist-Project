import React from "react";
import SongListItem from "./components/SongListItem";

const ShowPlayListComponent = ({ songList }) => {

    console.log("this from showplatlistcomonent", songList)


    const songListItemComponents = songList.map(songItem => {
        return <SongListItem
            key={songItem.id}
            songTitle={songItem.song}
            songArtist={songItem.artist}
            songGenre={songItem.genre}
            songRating={songItem.rating}

            className='list-item' />
    })



    return (
        <ul className="ShowPlayListComponent">

            <nav>
                <div>Song</div>
                <div>Artist</div>
                <div>Genre</div>
                <div>Rating</div>
            </nav>

            {songListItemComponents}
        </ul>
    )
}



export default ShowPlayListComponent


