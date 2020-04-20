
import React from "react"
import FromComponent from "./FormComponent"
import ShowPlayListComponent from "./ShowPlayListComponent"

class Container extends React.Component {
    constructor() {
        super()
        this.state = {
            songList: [
                {
                    id: 1,
                    song: "Beautiful Day",
                    artist: "U2",
                    genre: "Rock",
                    rating: 5
                }

            ]
        }

    }







    render() {

        const addSong = (inputValue) => {
            const newSong = {
                id: this.state.songList.length + 1,
                song: inputValue.song.value,
                artist: inputValue.artist.value,
                genre: inputValue.genre.value,
                rating: inputValue.rating.value
            }
            this.setState({ songList: this.state.songList.concat(newSong) })
            postData(newSong)
        }


        const postData = async function (newTask) {
            const apiUrl = "https://wincacademydatabase.firebaseio.com/nabil/tasks.json";
            try {
                return await fetch(apiUrl, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newTask)
                })
            } catch (error) {
                console.log(error);
            }
        };



        return (
            <div>
                <h1>ReactPlaylist-Project</h1>
                <FromComponent addSong={addSong} songItems={this.state.songList} />
                <ShowPlayListComponent songList={this.state.songList} />
            </div>
        )
    }
}


export default Container




