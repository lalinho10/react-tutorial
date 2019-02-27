import React, { Component } from 'react';
import './App.css';

import Table from './table/Table';

class App extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            characters: [
                { 'name': 'Elena', 'job': 'Azafata' },
                { 'name': 'Luis', 'job': 'Piloto aviador' },
                { 'name': 'Paola', 'job': 'Clavadista' },
                { 'name': 'Daniel', 'job': 'Conductor' }
            ]
        };
    }

    handleDelete = ( index ) => {
        const { characters } = this.state;

        this.setState({
            characters: characters.filter( ( character, i ) => {
                return i !== index;
            })
        });
    }

    handleAdd = ( character ) => {
        this.setState({ characters: [ ...this.state.characters, character] });
    }

    render() {
        return (
            <div className="container">
                <Table characterData={ this.state.characters }
                       onDelete={ ( index ) => this.handleDelete( index ) }
                       onAdd={ ( character ) => this.handleAdd( character ) }
                />
            </div>
        );
    }
}

export default App;