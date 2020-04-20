
import React from "react"
import InputField from "./components/InputField"

const FromComponent = ({ addSong, songItems }) => {

    return (
        <div className="FromComponent">
            <InputField handleSubmit={addSong} songItems={songItems} />
        </div>
    )
}

export default FromComponent

