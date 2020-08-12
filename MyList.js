import React from 'react';

import Card from './movie/Card';

class MyList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            //movieIds: this.getFromLocalStorage()
        };

        const movieIds = JSON.parse(localStorage.getItem('movieIds'));
        this.movieIds = movieIds;
    }
    
    componentDidMount () {
        //const movieIds = this.getFromLocalStorage;
        //const fetchMovieId = (movieId) => {
        //    fetch(`https://api.themoviedb.org/3/discover/movie/${movieId}?sort_by=popularity.desc&api_key=71ec704e7ba9b86c4840374f4ec0e67a`)
        //    .then(res => res.json()) 
        //    .then((movies) => {
        //        return movies;
        //    }) 
        //} 

        //const promises = this.movieIds.map(movieId => fetchMovieId(movieId));
        Promise.all(this.movieIds.map((movieId) => {
            const url = `https://api.themoviedb.org/3/discover/movie/${movieId}?sort_by=popularity.desc&api_key=71ec704e7ba9b86c4840374f4ec0e67a`;
            return fetch(url)
                .then(res => res.json())
            //    .then((fetchMovieIds) => {
            //        console.log(fetchMovieIds);
        })).then((movies) => {
            this.setState({
                movies
            }); 
        });         
    }


    render() {
        const {
            movies
        } = this.state;
        if (movies.length === 0) {
            return (
                <div>
                    <p>loading...</p>
                </div>
            );
        }
        return(
            <div>
                <h2>MyList</h2>
                <div>
                    {movies.map((movie) => {
                        //console.log('movie', movie);
                        return (
                            <Card 
                            key={movie.id}
                            {...movie}
                            // title={movie.title}
                            // poster_path={movie.poster_path}
                            />
                        )
                    })}
                </div>
            </div>

        );
    }
}

export default MyList; 