import React from 'react';

const TableBodyRow = ( props ) => {
    return(
        <tr>
            <td>
                { props.character.name }
            </td>
            <td>
                { props.character.job }
            </td>
            <td>
                <button onClick={ () => props.onDelete( props.index ) }>
                    Delete
                </button>
            </td>
        </tr>
    );
}

export default TableBodyRow;