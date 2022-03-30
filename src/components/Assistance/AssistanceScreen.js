import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import { getRepresentativesThatAreOnReunion } from './AssistanceList';
import { Box, Button, Container, Input } from '@mui/material';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import debounce from 'lodash.debounce';
import { useEffect } from 'react';

import './Assistance.css'
import { getRepresentantesThatCheckedIn } from '../../services/representantes';


export default function AssistanceScreen() {
    const repPromise = getRepresentantesThatCheckedIn().then(({ data }) => data);

    const [reps, setReps] = React.useState({ id: 1 })
    const [filter, setFilter] = React.useState("")

    React.useEffect(() => {
        repPromise
            .then(setReps)
            .catch(err => console.error(err))
    }, []);

    React.useEffect(() => {
        if (filter == "") {
            repPromise
                .then(setReps)
                .catch(err => console.error(err))
        } else {
            setReps(reps.filter(reps => reps.name.toUpperCase().includes(filter.toUpperCase())));
        }
    }, [filter])


    const handleInput = (e) => {
        setFilter(e.target.value)
    }

    const debounceHandleInput = React.useMemo(() =>
        debounce(handleInput, 300), []);

    useEffect(() => {
        return () => {
            debounceHandleInput.cancel();
        }
    }, []);

    const navigate = useNavigate();

    const handleReturn = () => {
        navigate('/', { replace: true })
    }

    return (
        <Container className='animate__animated animate__fadeIn'>
            <Box className='as-content--search'>
                <button className='as-btn--search' onClick={handleReturn}>
                    <ArrowBackIcon />
                </button>
                <Input className='as-input--search' placeholder='Buscar...' onChange={debounceHandleInput}>
                </Input>
            </Box>

            <List className='as-list'>
                {(reps.length > 0)
                    ?
                    reps.map((rep, index) => (<Person {...rep} key={index} />))
                    : <p style={{ color: 'gray', textAlign: 'center' }}>No se encontro información</p>
                }
            </List>
        </Container>
    );
}

function stringAvatar(name) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}

function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

export const Person = ({ name, checkInDate, dependenciaName, leftAt }) => {
    const date = new Date(checkInDate);
    const dateLeft = new Date(leftAt);
    return (
        <>
            <ListItem alignItems="flex-start" className='as-listItem'>
                <ListItemAvatar>
                    <Avatar {...stringAvatar(name)}>

                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={name}
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                {`En representación de: ${dependenciaName}. `}
                                <br />
                            </Typography>
                            {` Entrada — ${date.toLocaleTimeString()}`}
                            {
                                leftAt ? ` - Salida — ${dateLeft.toLocaleTimeString()}` : ' '
                            }
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </>
    );
}