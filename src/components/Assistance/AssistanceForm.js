import { Alert, AlertTitle, Autocomplete, Button, Container, Grid, Link, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './AssistanceForm.css'
import { depts, representatives, getRepresentativesFromDept, getRepresentativeThatIsOnReunion } from './AssistanceList'

export const AssistanceForm = () => {

	const [selectedDept, setSelectedDept] = useState(null);
	const [representatives, setRepresentative] = useState(null);
	const [selectedRepresentative, setSelectedRepresentative] = useState(null);
	const [assist, setAssist] = useState(false);
	const [name, setName] = useState('');

	const handleDeptChange = (value) => {
		setSelectedRepresentative(null);
		setSelectedDept(value);

		if (value) {
			if (value.hasRepresentative) {
				setName(getRepresentativeThatIsOnReunion(value.id));
				setAssist(true);
			} else {
				setAssist(false);
				setRepresentative(getRepresentativesFromDept(value.id));
			}
		}
	};

	const handleRepChange = (value) => {
		setSelectedRepresentative(value);
	}

	const handleRetirement = () => {
		// TODO PATCH TO RESET ASSIST STATE
		setAssist(false);
		setRepresentative(getRepresentativesFromDept(selectedDept.id));
	}
	return (
		<Container className='form animate__animated animate__fadeIn'>
			<Box className='form-header'>
				<h3>Registro de <span>asistencia</span></h3>
			</Box>
			<Grid container className='form-title'>
				<Grid item xs={12} md={12} className='form-info'>
					<h4>Registre su asistencia seleccionando su dependencia y nombre.</h4>
				</Grid>
				<Grid container className='form-body'>
					<form>
						<Grid item xs={12} md={12} className='form-options'>
							<Autocomplete
								id="depts"
								options={depts}
								className='form-selector animate__animated animate__fadeInDown'
								fullWidth
								size='small'
								renderInput={params => (
									<TextField {...params} label="Departamento" variant="outlined" fullWidth size='small' className='animate__animated animate__fadeInDown' />
								)}
								getOptionLabel={option => option.name}
								value={selectedDept}
								onChange={(e, newDept) => handleDeptChange(newDept)}
							/>
							{
								representatives && !assist &&
								<Autocomplete
									id="reps"
									options={representatives}
									className='form-selector animate__animated animate__fadeInDown'
									fullWidth
									size='small'
									renderInput={params => (
										<TextField {...params} label="Representantes del departamento" variant="outlined" fullWidth />
									)}
									getOptionLabel={option => option.name}
									value={selectedRepresentative}
									onChange={(e, newRep) => handleRepChange(newRep)}
								/>
								||
								assist &&
								(
									<Alert severity='info' className='animate__animated animate__headShake'>
										<AlertTitle><b>{name}</b> está en la reunión actualmente.</AlertTitle>
										Si desea entrar a la reunión, solicite a <b>{name}</b> que se retire.
										<br /> <br />
										<Button color='secondary' variant='outlined' size='small' onClick={handleRetirement}>He solicitado su retiro</Button>
									</Alert>
								)
							}
							<br />
							<Button
								variant='contained'
								className='form-button'
								fullWidth
							>
								Registrar
							</Button>
							<NavLink to='/list' className='form-link'>
								<Button
									variant='contained'
									className='form-button'
									fullWidth
								>
									Ver lista
								</Button>
							</NavLink>

						</Grid>
					</form>
				</Grid>
			</Grid>
		</Container>
	)
}
