import React, {Component} from 'react';

const initState = {
    username:"",
    email:"",
    password:"",
}
export default class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            ...initState
        }
    }

    submitHandler = (event) => {
        //evita que se recargue la pagina
        event.preventDefault();
        const user = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
        }
        let config = {
            method: 'POST',
            headers:{
                'Content-type':'Application/json'
            },
            body:JSON.stringify(this.state),
        };
        fetch('https://reactcourseapi.herokuapp.com/user/register',config)
            .then(res => res.json())
            .then(data => {
                //localStorage solo guarda string,
                localStorage.setItem('token', data.token)
                this.setState({...initState})
            })
            .catch(err => {
                console.log(err);
            })
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.id]:event.target.value,
        })
    }
    render(){
        return(
        <>
            <h1>Registro</h1>
            <form onSubmit={this.submitHandler}>
                <label>Username: 
                <input type="text" id = "username" onChange={this.changeHandler} value={this.state.username}/>
                </label> 
                <label>Email: 
                <input type="email" id = "email" onChange={this.changeHandler} value={this.state.email}/>
                </label> 
                <label>Password: 
                <input type="password" id = "password" onChange={this.changeHandler} value={this.state.password}/>
                </label> 
                <button type="submit">Ingresar</button>
            </form>
        </>
        )
    }
}