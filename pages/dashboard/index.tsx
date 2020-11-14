import { Flex, Heading } from '@chakra-ui/core';
import React from 'react';
import Layout from '../../components/Layout';
import { useFetchUser } from '../../utils/user';

function Index() {
	const { user } = useFetchUser();
	return (
		<Layout user={user}>
			<Flex flexDir="column" justify="center" align="flex-start">
				<Heading size="md" as="h1" mt={12}>
					Net Worth
				</Heading>
			</Flex>
		</Layout>
	);
}

export default Index;
