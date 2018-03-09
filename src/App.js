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
        this.handleFormChange = this.handleFormChange.bind(this)
    }

    componentDidMount() {
        FormDB.on('value', snap => {
            const forms = snap.val()
            this.setState({...this.state, forms})
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

    handleFormChange(e, key) {
        const name = e.target.name
        const value = e.target.value
        const updates = {}
        updates[name] = value
        FormDB.child(key).update(updates)
        /*
        const title = e.target.title.value
        const description = e.target.description.value
        console.log(title, description)
        */
    }

    render() {
        return (
            <div className="App">
                <Form onSubmit={this.handleCreateForm}>
                    <input type="text" name="title" placeholder="title"/>
                    <input type="text" name="description" placeholder="description"/>
                    <input type="submit" value="Create form"/>
                </Form>

                {Object.keys(this.state.forms).map(key => {
                    const form = this.state.forms[key]
                    return(
                        <Form key={key} onChange={event => this.handleFormChange(event, key)}>
                            <input type="text" name="title" value={form.title} />
                            <input type="text" name="description" value={form.description}/>
                            <input type="submit"/>
                        </Form>
                    )
                })}
            </div>
        );
    }
}

export default App;
