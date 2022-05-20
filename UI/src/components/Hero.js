import React from 'react'; 
// import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ReactPlayer from 'react-player';
import heroVideoTwo from './heroVideoTwo.mp4';

// const useStyles = makeStyles(theme => ({
//     root: {
//         width: '100%',
//         height: '80vh',
//         position: 'relative',
//         '& video': {
//             objectFit: 'cover',
//         },
//     },
//     overlay: {
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100%',
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     },
//     title: {
//         paddingBottom: theme.spacing(4),
//     },
// }));

const HeroSection = () => {

    // const classes = useStyles();

    return (
        <section>
            <ReactPlayer
                url={heroVideoTwo}
                playing
                loop
                muted
                width="100%"
                height="100%"
            />
            <div>
                <Box
                    height="100%"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    color="#fff"
                >
                    <Button color='primary' variant='contained'>
                        Play
                    </Button>
                </Box>
            </div>
        </section>

    );
};


export default HeroSection;