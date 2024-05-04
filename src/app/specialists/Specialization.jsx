import React, { useState } from 'react';
import { Box, Grid, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import OTextField from '../../components/OTextField';
import Specialists from './Specialists';
import DoctorProfile from '../profile/DoctorProfile';

const StyledGrid = styled(Grid)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const ContainerContent = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    width: '120vh',
    height: '70vh',
    padding: '5vh',
    flexDirection: 'column',
});

const SyledButton = styled(Button)({
    backgroundColor: '#ffffff',
    color: '#2373a0',
    border: '4px solid #2373a0',
    borderRadius: '15px',
    minWidth: '400px',
    minHeight: '100px',
    display: 'flex',
    flexDirection: 'column'
});

const StyledTypography = styled(Typography)({
    color: '#2373a0',
    padding: '5px',
    fontWeight: 'bold',
});

const Specialization = () => {
    const [searchValue, setSearchValue] = useState('');
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [isSearching, setIsSearching] = useState(false);
    const [filterValue, setFilterValue] = useState('');

    const handleSearch = (value) => {
        setSearchValue(value);
        setIsSearching(value !== '');
        console.log(localStorage.getItem('token'));

        setFilterValue(value);
    };

    const handleDoctorSelect = (doctorData) => {
        setSelectedDoctor(doctorData);
        setIsSearching(false); // Ocultar la lista de especialistas cuando se selecciona un doctor
    };

    const handleReturn = () => {
        setSelectedDoctor(null); // Limpiar el doctor seleccionado al volver
        setIsSearching(filterValue !== '');
    };

    return (
        <ContainerContent>
            <Box>
                <StyledGrid item xs={12} md={12}>
                    <OTextField
                        topLabel="Buscar Especialista"
                        width="100%"
                        inputType="search"
                        name="search"
                        required
                        id="search"
                        autoComplete="search"
                        autoFocus
                        value={searchValue}
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                </StyledGrid>
            </Box>
            {(isSearching || selectedDoctor) ? null : (
                <Grid container spacing={6} sx={{ marginTop: '3vh' }}>
                    <StyledGrid item xs={6} md={6}>
                        <SyledButton onClick={() => handleSearch('Dermatologia')}>
                            <StyledTypography>Dermatologia</StyledTypography>
                            <img
                                alt='Dermatologia'
                                src={'/assets/ICONDermatologia.png'}
                                width={50}
                                height={50}
                            />
                        </SyledButton>
                    </StyledGrid>
                    <StyledGrid item xs={6} md={6}>
                        <SyledButton onClick={() => handleSearch('Geriatria')}>
                            <StyledTypography>Geriatria</StyledTypography>
                            <img
                                alt='Geriatria'
                                src={'/assets/ICONGeriatria.png'}
                                width={50}
                                height={50}
                            />
                        </SyledButton>
                    </StyledGrid>

                    <StyledGrid item xs={6} md={6}>
                        <SyledButton onClick={() => handleSearch('Medicina General')}>
                            <StyledTypography>Medicina General</StyledTypography>
                            <img
                                alt='Medicina General'
                                src={'/assets/ICONMedGeneral.png'}
                                width={50}
                                height={50}
                            />
                        </SyledButton>
                    </StyledGrid>

                    <StyledGrid item xs={6} md={6}>
                        <SyledButton onClick={() => handleSearch('Medicina Interna')}>
                            <StyledTypography>Medicina Interna</StyledTypography>
                            <img
                                alt='Medicina Interna'
                                src={'/assets/ICONMedInterna.png'}
                                width={50}
                                height={50}
                            />
                        </SyledButton>
                    </StyledGrid>

                    <StyledGrid item xs={6} md={6}>
                        <SyledButton onClick={() => handleSearch('Pediatria')}>
                            <StyledTypography>Pediatria</StyledTypography>
                            <img
                                alt='Pediatria'
                                src={'/assets/ICONPediatria.png'}
                                width={50}
                                height={50}
                            />
                        </SyledButton>
                    </StyledGrid>

                    <StyledGrid item xs={6} md={6}>
                        <SyledButton onClick={() => handleSearch('Psiquiatria')}>
                            <StyledTypography>Psiquiatria</StyledTypography>
                            <img
                                alt='Psiquiatria'
                                src={'/assets/ICONPsiquiatria.png'}
                                width={50}
                                height={50}
                            />
                        </SyledButton>
                    </StyledGrid>


                </Grid>
            )}
            {isSearching && (
                <Specialists searchValue={searchValue} onDoctorSelect={handleDoctorSelect} />
            )}
            {selectedDoctor && (
                <DoctorProfile doctorData={selectedDoctor} onReturn={handleReturn} />
            )}
        </ContainerContent>
    );
};

export default Specialization;
