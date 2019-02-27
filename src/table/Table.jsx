import React, { Component } from 'react';

import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableFooter from './TableFooter';

class Table extends Component {
    render() {
        const { characterData } = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody characterData={ characterData }
                           onDelete={ ( index ) => this.props.onDelete( index ) }
                />
                <TableFooter onAdd={ ( character ) => this.props.onAdd( character ) } />
            </table>
        );
    }
}

export default Table;