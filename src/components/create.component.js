import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
    constructor(props){
        super(props);
        this.onChangePersonFirstName=this.onChangePersonFirstName.bind(this);
        this.onChangeLastName=this.onChangeLastName.bind(this);
        this.onChangePhone=this.onChangePhone.bind(this);
        this.onChangeCity=this.onChangeCity.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state={
            person_first_name:'',
            person_last_name:'',
            phone:'',
            city:''
        }        
    }

    onChangePersonFirstName(e){
        this.setState({
            person_first_name:e.target.value
        });
    }

    onChangeLastName(e){
        this.setState({
            person_last_name:e.target.value
        });
    }

    onChangePhone(e){
        this.setState({
            phone:e.target.value
        });
    }

    onChangeCity(e){
        this.setState({
            city:e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        console.log(`The values are ${this.state.person_first_name}, ${this.state.person_last_name}, ${this.state.phone}, and ${this.state.city}`)
        const obj ={
            person_first_name: this.state.person_first_name,
            person_last_name: this.state.person_last_name,
            phone: this.state.phone,
            city: this.state.city
        };

        axios.post('http://localhost:4000/business/add', obj)
        .then(res => console.log(res.data));
        
        this.setState({
            person_first_name:'',
            person_last_name:'',
            phone:'',
            city:''
        })
    }
    render() {
        return (
            <div style={{margin:10}}>
                <h3>Add New Business</h3>
                <form onSubmit = {this.onSubmit}>
                    <div className="form-group">
                        <label> Person First Name :</label>
                        <input type="text" placeholder="First Name" value={this.state.person_first_name}
                            onChange={this.onChangePersonFirstName} className="form-control"/> 
                    </div>
                    <div className="form-group">
                        <label> Person Last Name :</label>
                        <input type="text" placeholder="Last Name" value={this.state.person_last_name}
                      onChange={this.onChangeLastName} className="form-control"/> 
                    </div>
                    <div className="form-group">
                        <label> Phone Number :</label>
                        <input type="text" placeholder="Phone Number" value={this.state.phone}
                      onChange={this.onChangePhone} className="form-control"/> 
                    </div>
                    <div className="form-group">
                        <label>City :</label>
                        <input type="text" placeholder="City" value={this.state.city}
                      onChange={this.onChangeCity} className="form-control"/> 
                    </div>
                    <div className="form-group">                        
                        <input type="submit"  value ="Register Business" className="btn btn-primary"/> 
                    </div>
                </form>
            </div>
        )
    }
}