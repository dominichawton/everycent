import '../styles/globals.css';
import { ChakraProvider, theme, extendTheme, Box } from '@chakra-ui/core';

import { colors, radii, fonts } from '../theme';

const customTheme = extendTheme({ colors, radii, fonts });

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={customTheme}>
			<Box backgroundColor="#f9f9f9">
				<Component {...pageProps} />
			</Box>
		</ChakraProvider>
	);
}

export default MyApp;
