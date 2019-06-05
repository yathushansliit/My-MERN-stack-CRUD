import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
  constructor(props) {
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

  componentDidMount() {
      axios.get('http://localhost:4000/business/edit/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                person_first_name: response.data.person_first_name, 
                person_last_name: response.data.person_last_name,
                phone: response.data.phone, 
                city: response.data.city  });
          })
          .catch(function (error) {
              console.log(error);
          })
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

    axios.post('http://localhost:4000/business/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/index');
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update Business</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Person First Name :  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.person_first_name}
                      onChange={this.onChangePersonFirstName}
                      />
                </div>
                <div className="form-group">
                    <label>Person Last Name : </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.person_last_name}
                      onChange={this.onChangeLastName}
                      />
                </div>
                <div className="form-group">
                    <label>Phone : </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.phone}
                      onChange={this.onChangePhone}
                      />
                </div>
                <div className="form-group">
                    <label>City : </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.city}
                      onChange={this.onChangeCity}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Update Business" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}