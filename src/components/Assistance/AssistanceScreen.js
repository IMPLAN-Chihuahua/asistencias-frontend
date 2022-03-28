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
import { NavLink } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import debounce from 'lodash.debounce';


import './Assistance.css'

export default function AssistanceScreen() {

    const allReps = getRepresentativesThatAreOnReunion();
    const [reps, setReps] = React.useState(getRepresentativesThatAreOnReunion())
    const [filter, setFilter] = React.useState("")
    
    React.useEffect(() => {
        if(filter == ""){
            setReps(getRepresentativesThatAreOnReunion());
        }else{
            setReps(allReps.filter(reps => reps.name.toUpperCase().includes(filter.toUpperCase())));
        }
    }, [filter])
    

    const handleInput = (e) => {
        setFilter(e.target.value)
    }
    
    const debounceHandleInput = React.useMemo( () => 
        debounce(handleInput,300),[]);
    


    return (
        <Container className='animate__animated animate__fadeIn'>
            <Box className='as-content--search'>
            <NavLink to="/">
                <button className='as-btn--search'>
                    <ArrowBackIcon/>
                </button>
                </NavLink>
            
            <Input className='as-input--search' placeholder='Buscar...' onChange={debounceHandleInput}>
            </Input>
            </Box>
            
            <List className='as-list'>
                {(reps.length > 0)
                ?
                reps.map((rep, index) => (<Person {...rep} key={index} />))
                :<p style={{color:'gray', textAlign:'center'}}>No se encontro información</p>
                }
            </List>
        </Container>
    );
}

export const Person = ({ name, date, deptName }) => {
    return (
        <>
            <ListItem alignItems="flex-start" className='as-listItem'>
                <ListItemAvatar>
                    <Avatar>
                        <PersonIcon />
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
                                {`Representante de: ${deptName}. Activo en la reunión desde`}
                            </Typography>
                            {` — ${date}`}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </>
    );
}