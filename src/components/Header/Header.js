import { Box, Image } from '@chakra-ui/react';
import logo from '../../assets/logo.png';

const Header = () => {
    return (
        <Box bg="#E8112D" height="100px" p={2} color="white">
            <Image src={logo} alt="Logo" />
        </Box>
    );
}

export default Header;