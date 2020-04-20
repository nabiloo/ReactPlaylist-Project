import React from "react"

const SongListItem = ({ songTitle, songArtist, songGenre, songRating }) => {

    return (
        <main className="SongListItem">
            <div>{songTitle}</div>
            <div>{songArtist}</div>
            <div>{songGenre}</div>
            <div>{songRating}</div>
        </main>
    )
}



export default SongListItem


