import { Heading } from '@chakra-ui/core';
import React from 'react';
import Layout from '../components/Layout';
import { useFetchUser } from '../utils/user';

function Feedback() {
	const { user } = useFetchUser();
	return (
		<Layout user={user}>
			<Heading mt={12} as="h1" size="md">
				Feedback
			</Heading>
		</Layout>
	);
}

export default Feedback;
