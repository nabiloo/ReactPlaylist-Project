import React from "react"

const InputField = ({ handleSubmit, songItems }) => {

    const onSubmit = (event) => {
        event.preventDefault()
        const inputValue = event.target
        handleSubmit(inputValue)

    }


    return (
        <div>
            <form className="InputField" onSubmit={onSubmit}>

                <input
                    type="text"
                    name="song"
                    value={songItems.song}
                    placeholder="Song" /><br />

                <input
                    type="text"
                    name="artist"
                    value={songItems.artist}
                    placeholder="Artist" /><br />

                <input
                    type="text"
                    name="genre"
                    value={songItems.genre}
                    placeholder="Genre" /><br />

                <input
                    type="text"
                    name="rating"
                    value={songItems.rating}
                    placeholder="Rating" /><br />


                <button>ADD SONG</button>
            </form>

        </div>
    )
}

export default InputField



