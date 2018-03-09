import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'
import firebase from 'firebase'

//Components
//import Form from './form'
const Form = styled.form`
    input {
        font-size: 24px;
    }
`


const FormDB = firebase.database().ref('Forms')

class App extends Component {
    constructor() {
        super()
        this.state = {
            forms: {}
        }

        this.handleCreateForm = this.handleCreateForm.bind(this)
    }

    componentDidMount() {
        FormDB.on('value', snap => {
            const forms = snap.val()
            this.setState(forms)
        })
    }

    handleCreateForm(e)  {
        e.preventDefault()
        const title = e.target.title.value
        const description = e.target.description.value

        const form = {
            title,
            description
        }

        const newKey = FormDB.push().key
        const updates = {}
        updates[newKey] = form
        return FormDB.update(updates)
    }

    render() {
        return (
            <div className="App">
                <Form onSubmit={this.handleCreateForm}>
                    <input type="text" name="title" placeholder="title"/>
                    <input type="text" name="description" placeholder="description"/>
                    <input type="submit" value="Create form"/>
                </Form>
            </div>
        );
    }
}

export default App;
