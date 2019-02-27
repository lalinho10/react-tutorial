import React from 'react';
import TableBodyRow from './TableBodyRow';

const TableBody = ( props ) => {
    const rows = props.characterData.map( ( character, index ) => {
        return (
            <TableBodyRow key={ index }
                          index={ index }
                          character={ character }
                          onDelete={ () => props.onDelete( index ) } />
        );
    });

    return (
        <tbody>
            { rows }
        </tbody>
    );
}

export default TableBody;