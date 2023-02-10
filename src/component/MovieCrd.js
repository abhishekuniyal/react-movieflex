import React from 'react'

export default function MovieCrd({ movie }) {
    return (

        <div className='container'>
            <div className='movie'>
                <p>{movie.Year}</p>
            </div>
            <div>
                <img src={movie.Poster} />
            </div>

            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>

        </div>

    )
}
