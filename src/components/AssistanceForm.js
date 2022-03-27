import { Button, Container, Grid, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import './AssistanceForm.css'

export const AssistanceForm = () => {
	return (
		<Grid container className='form-back'>
			<Box className=''>
				<Grid container className='form-header'>
					<Grid item xs={12}>
						<h1>Form title</h1>
					</Grid>
				</Grid>
				<Grid container className='form-body'>
					<Grid item xs={12}>
						<TextField
							id='name'
							label='Name'
							placeholder='Enter your name'
							margin='normal'
							fullWidth
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							id='email'
							label='Email'
							placeholder='Enter your email'
							margin='normal'
							fullWidth
						/>
					</Grid>
					<Grid item xs={12}>
						<Button
							variant='contained'
							color='primary'
							fullWidth
						>
							Submit
						</Button>
					</Grid>
				</Grid>
			</Box>
		</Grid>
	)
}
