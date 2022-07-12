import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { CheckCircleOutlined } from '@mui/icons-material'

const ListItemComp = ({ text, prefix }) => {
    return (
        <>
            <ListItem>
                <ListItemIcon>
                    <CheckCircleOutlined style={{ color: 'var(--light-green)' }} />
                </ListItemIcon>
                <ListItemText primary={prefix !== null ? prefix : text} secondary={prefix !== null && text ? text : null} />
            </ListItem>
        </>
    )
}

export default ListItemComp