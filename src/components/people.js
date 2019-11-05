import React, { Component } from 'react';
import '../App.css';


class People extends Component {
    constructor(props){
        super (props)
        
        this.state = {
            people: [],
        }
    }
    

    fetchFilms = () =>{
    fetch('https://ghibliapi.herokuapp.com/people')
       .then(res => res.json())
       .then((data) => {
         this.setState({ people: data })
       })
       .catch(console.log);
 }
 
   componentDidMount() {
    this.fetchFilms();
   } 
   render () {
    return (
        <div className='backgroundColorPeople'>
            <header className='peopleList'>
            </header>
            <div className="fluid-contrainer">
                <center><h1 className='textGrey' >People List</h1></center>
                <div className="row">
                    {this.state.people.map((people) => (
                        <div className="col-6 d-flex align-items-stretch ">
                            <div className="card, backgroundColor, border border-light">
                                <div className="card-body">
                                    <h5 className="card-title textGrey">{people.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{people.age}</h6>
                                    <p className="card-text, textGrey">{people.species}</p>
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


export default People;