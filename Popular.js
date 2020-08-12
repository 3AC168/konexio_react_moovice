import React from 'react';
import Card from './movie/Card'; 

class Popular extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            movies: [],            
        };
    }

    componentDidMount(){
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
    

    render() {
        const{
            movies
        } = this.state;
        //console.log()
        if (movies.length === 0) {    //destructuration if (this.state.movies.length === 0)
            return (
                <div>
                    <p>Loading...</p>
                </div>
            );
        }
        
        return(
            <div className="container">
                <h2>Popular</h2>
                <div className="row">        
                      {movies.map((movie) => {       //destructuration {this.state.movies.map((movie))}
                          //console.log('movie', movie);                          
                          return (                              
                                <Card
                                    key={movie.id} //id est unique
                                    //posterPath={movie.poster_Path} =>
                                    //title={movie.title} =>
                                    //movie={movie} //equivalent {...movie} ES6:Spread
                                    {...movie}  // plus rapid, les 3 fonctionnent
                                />                              
                            );
                        })}
                  
                </div>
            </div>
        );
    }
}

export default Popular; 