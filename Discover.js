import React from 'react';
import Card from './movie/Card';  

class Discover extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
          movies: [],            
      };
    }

  componentDidMount(){
      const url = 'http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2020-08-03&primary_release_date.lte=2020-08-10&api_key=71ec704e7ba9b86c4840374f4ec0e67a';
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
      if (movies.length === 0) {    //destructuration if (this.state.movies.length === 0)
          return (
              <div>
                  <p>Loading...</p>
              </div>
          );
      }
  
      return(
        <div className="container">
            <h2>This week</h2>
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
export default Discover;