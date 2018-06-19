import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom';

export default class ClassList extends Component {
  constructor() {
    super()
    this.state = {
      students: []
    }
  }

  componentDidMount(){
    console.log(this.props.match)
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`).then((result) => {
      let newArr = result.data
      this.setState({
        students: newArr
      })
      console.log(newArr)
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    console.log(this.state.students)
    let studentArr = this.state.students.slice();
    let newArr = [];
    if(this.state.students){
      studentArr.forEach((val, i) => {
        let student = <Link to={`/student/${val.id}`} key={i}>
            <h3>{val.first_name} {val.last_name}</h3>
          </Link>
        newArr.push(student)
      })
    }
    
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {newArr}

      </div>
    )
  }
}