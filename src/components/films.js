import React, { Component } from 'react';
import '../App.css';


class Films extends Component {
    constructor(props){
        super (props)
        
        this.state = {
            films: [],
        }
    }
    

    fetchFilms = () =>{
    fetch('https://ghibliapi.herokuapp.com/films')
       .then(res => res.json())
       .then((data) => {
         this.setState({ films: data })
       })
       .catch(console.log);
 }
 
   componentDidMount() {
    this.fetchFilms();
   } 
   render () {
    return (
        <div className='backgroundColorFilms'>
            <header className='filmList'>
            </header>
            <div className="fluid-contrainer">
                <center><h1 className='textWhite' >Film List</h1></center>
                <div className="row">
                    {this.state.films.map((film) => (
                        <div className="col-6 d-flex align-items-stretch ">
                            <div className="card, backgroundColor, border border-light">
                                <div className="card-body">
                                    <h5 className="card-title textWhite">{film.title}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{film.description}</h6>
                                    <p className="card-text, textWhite">{film.director}</p>
                                    <p className="card-text, textWhite">{film.release_date}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};
}


export default Films;