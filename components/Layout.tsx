import { Container, Flex } from '@chakra-ui/core';
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Head from 'next/head';

function Layout({ user, children }) {
	return (
		<Flex flexDir="column" maxW="1400px" minH="100vh" mx="auto">
			<Flex flexGrow={2} flexDir="column">
				<Header user={user} />
				{children}
			</Flex>
			<Footer />
		</Flex>
	);
}

export default Layout;
