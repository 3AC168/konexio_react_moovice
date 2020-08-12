import React from 'react'; 
import Card from './movie/Card';

class PopularBattle extends React.Component { 

    // movieIds: [];

    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            currentPage: 1,    
            movieIds:[]       
        };
        const movieIds = JSON.parse(localStorage.getItem('movieIds'));
        if (movieIds === null) {
            this.movieIds = [];
        } else {
            this.movieIds = movieIds
        }
        console.log('this.movieIds', this.movieIds);
        this.movieIds = [];
        this.onClickMovie = this.onClickMovie.bind(this);
    }

    componentDidMount() {
        const url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=71ec704e7ba9b86c4840374f4ec0e67a';
        //console.log('popular#componentDidMount', url);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log('data', data);
                
                const movies = data.results;  //destructuration
                console.log(movies);                
                //this.setState({
                //    movies: data.results 
                //});
                this.setState({
                    movies     //quand la variable est équal à la clè, on peut se permettre de ne pas mettre de la valeur
                })
            });
    }

    //componentWillMount() {
    //    Api.getPopularMovies()
    //        .then((movies) => {
    //            this.setState({
    //                movies
    //            });
    //        });          
    //}

    onClickMovie(movieId){
        console.log('PopularBattle#onClickMovie');
        console.log('PopularBattle#onClickMovie movieId', movieId);  

        this.setState({           
            currentPage: this.state.currentPage + 1
        })

        //if (this.movieIds.indexOf(movieId) === -1) {
        if (this.movieIds.includes(movieId) === false) {
            console.log('#2');
            this.movieIds.push(movieId);
            localStorage.setItem('movieIds', JSON.stringify(this.movieId));
        }         
    }
    

    render() {
        const{
            movies,
            currentPage
        } = this.state;
        const nbElements = 2;
        const movieStartingIndex = (currentPage - 1) * nbElements;
        const movie1 = movies[movieStartingIndex];
        const movie2 = movies[movieStartingIndex + 1];

        console.log('cpm/PopularBattle#render movies', movies);
        console.log('movie1', movie1);

        console.log('#1');
        if (movies.length === 0) {    //destructuration if (this.state.movies.length === 0)
            console.log('#2');
            return (
                <div>
                    <p>Loading...</p>
                </div>
            );
        }
        
        console.log('#3');
        console.log('#render movieStartingIndex + 1', movieStartingIndex + 1);
        console.log('#render movies.length - 1', movies.length - 1);
        console.log('#render movies.length + 1 > movies.length - 1', movies.length + 1 > movies.length - 1);
        if (movieStartingIndex + 1 > movies.length - 1) {
            console.log('#4');
            return (
                <p>There is no more movie today</p>
            )
        }
        
        console.log('#5');
        return(
            <div className="container">
                <h2>PopularBattle</h2>
                <div className="row">        
                    <div className="col-6">           
                        <Card               //movie={movie} //equivalent {...movie} ES6:Spread
                            {...movie1} 
                        onClick={this.onClickMovie}/> 
                    </div>
                    <div>                        
                        <Card               //id est unique
                            {...movie2}  
                        />                            
                    </div>                      
                </div>
            </div>
        );
    }
}

export default PopularBattle; 

