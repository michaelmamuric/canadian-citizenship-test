import { Box, Image } from '@chakra-ui/react';
import logo from '../../assets/logo.png';

const Header = () => {
    return (
        <Box bg="#E8112D" height="100px" color="white" paddingLeft="5%" paddingTop={2} paddingBottom={2}>
            <Image src={logo} alt="Logo" />
        </Box>
    );
}

export default Header;