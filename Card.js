import React from 'react';
import Button from '../core/Button'

class Card extends React.Component {
    
    render() {
        const {   
            id,     
            poster_path,
            title,  
            overview,     
            onClick    
        } = this.props;
        //const src = 'https://image.tmdb.org/t/p/w300/' + this.props.poster_path; 
        //const src = `https://image.tmdb.org/t/p/w300/${this.props.poster_path}`;
        const src = `https://image.tmdb.org/t/p/w300/${poster_path}`; //destructuration ${this.props.poster_path};
        const description = overview;
        //console.log('this.props', this.props);
        return (
            <div className='col-6'>
                <Button 
                    onClick= {() =>{
                        onClick(id)}
                    }>                
                <img className="img-fluid" src={src} alt={`Movie ${title}`}/>             
                <div>
                    <b>{title}</b>                
                    <p>{description}</p>
                </div> 
                </Button>               
            </div>
        );
    }
}

export default Card; 

/*Concaténation : en utilisant méthode avec ${}, il faut utiliser la touche ‘alt gr’ + touche ‘7’ ‘7’ (2 fois) => pour afficher ` ` qui n’est pas le même que ‘ ‘ pour coder)*/