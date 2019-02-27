import React, { Component } from 'react';

class TableFooter extends Component {
    constructor( props ) {
        super( props );

        this.initialState = {
            name: '',
            job: ''
        };

        this.state = this.initialState;

        //this.handleChange = this.handleChange.bind( this );
    }

    handleChange = ( event ) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    handleClick = () => {
        this.props.onAdd( this.state );
        this.setState( this.initialState );
    }

    render() {
        const { name, job } = this.state;

        return (
            <tfoot>
                <tr>
                    <td>
                        <input type="text"
                               name="name"
                               value={ name }
                               placeholder="Nombre"
                               onChange={ this.handleChange } />
                    </td>
                    <td>
                        <input type="text"
                               name="job"
                               value={ job }
                               placeholder="Trabajo"
                               onChange={ this.handleChange } />
                    </td>
                    <td>
                        <button className="accent-button"
                                onClick={ this.handleClick }>
                            Save
                        </button>
                    </td>
                </tr>
            </tfoot>
        );
    }
}

export default TableFooter;