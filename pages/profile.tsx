import { Flex, Heading, Image } from '@chakra-ui/core';
import React from 'react';

import Layout from '../components/Layout';
import { useFetchUser } from '../utils/user';

export default function Profile(): React.ReactElement {
	const { user, loading } = useFetchUser();
	console.log('User:', user);

	return (
		<Layout user={user}>
			{loading && <p>Loading profile...</p>}

			{!loading && user && (
				<Flex justify="center" align="center" flexGrow={2}>
					<Flex
						maxW="1440px"
						mx="auto"
						flexDir="column"
						align="center"
						justify="center"
						backgroundColor="white"
						shadow="md"
						p={16}
						minW="15rem"
						minH="15rem"
						borderRadius="sm"
					>
						<Image src={`${user.picture}`} borderRadius="50%" mb={6}></Image>
						<Heading as="h1" size="md" mb={1}>
							{user.name}
						</Heading>
						<Heading as="h4" fontWeight="500" size="sm">
							{user.email}
						</Heading>
					</Flex>
				</Flex>
			)}
		</Layout>
	);
}
