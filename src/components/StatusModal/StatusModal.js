import { Box, Button, Modal, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import './StatusModal.css';
export const StatusModal = ({ open, setOpenModal, status }) => {
    const handleClose = () => setOpenModal(false);

    return (
        <>
            {
                status
                && (
                    <Modal open={open} onClose={handleClose}>
                        <>
                            <Box className='modal'>
                                <Typography className="modal-text">La asistencia ha sido registrada, será redireccionado al listado de personas en la reunión.</Typography>
                                <br />
                                <Link to='/list'>
                                    <Button>Close</Button>
                                </Link>
                            </Box>
                        </>
                    </Modal>
                )
                || (
                    <Modal open={open} onClose={handleClose}>
                        <>
                            <Box className='modal'>
                                <Typography className="modal-text">Por favor, seleccione a algún representante.</Typography>
                                <br />
                                <Button onClick={handleClose} variant="outlined">Close</Button>
                            </Box>
                        </>
                    </Modal>
                )
            }

        </>
    )
}