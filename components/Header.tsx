import { Button, ButtonGroup, chakra, Flex, Heading, Image, Link } from '@chakra-ui/core';
import { useRouter } from 'next/router';
import React from 'react';

function Header({ user }) {
	const router = useRouter();
	return (
		<Flex flexDir="column">
			<Flex justify="space-between" align="center" w="95%" my={8}>
				<Link href={user ? '/dashboard' : '/'} _hover={{ textDecoration: 'none' }}>
					<Heading as="h2" size="lg">
						Every<chakra.span color="green.500">Cent</chakra.span>
					</Heading>
				</Link>
				<Flex>
					{user ? (
						<Flex justify="center" align="center" mr={12}>
							<Link
								ml={8}
								href="/dashboard"
								fontWeight="600"
								color={router.pathname.includes('/dashboard') ? 'gray.900' : 'gray.500'}
							>
								Dashboard
							</Link>
							<Link
								ml={8}
								href="/support"
								fontWeight="600"
								color={router.pathname === '/support' ? 'gray.900' : 'gray.500'}
							>
								Support
							</Link>
							<Link
								ml={8}
								href="/feedback"
								fontWeight="600"
								color={router.pathname === '/feedback' ? 'gray.900' : 'gray.500'}
							>
								Feedback
							</Link>
						</Flex>
					) : (
						<Flex justify="center" align="center" mr={12}>
							<Link ml={8} href="/home">
								Home
							</Link>
							<Link ml={8} href="/about">
								About
							</Link>
							<Link ml={8} href="/contact">
								Contact
							</Link>
						</Flex>
					)}

					{user ? (
						<Flex justify="center" align="center">
							<Link href="/profile" _hover={{ textDecoration: 'none' }}>
								<Image src={user.picture} borderRadius="50%" w="35px"></Image>
							</Link>
							<Link href="/api/logout">
								<Button colorScheme="green" variant="outline" borderRadius="sm" ml={8}>
									Log Out
								</Button>
							</Link>
						</Flex>
					) : (
						<ButtonGroup spacing={4}>
							<Link href="/api/login" _hover={{ textDecoration: 'none' }}>
								<Button colorScheme="green" variant="outline" borderRadius="sm">
									Login
								</Button>
							</Link>

							<Button colorScheme="green" borderRadius="sm">
								Sign Up
							</Button>
						</ButtonGroup>
					)}
				</Flex>
			</Flex>
			{user && (
				<Flex justify="flex-start" align="center" w="95%" borderBottom="1px" borderColor="gray.300">
					<Link
						href="/dashboard"
						mr={8}
						color={router.pathname === '/dashboard' ? 'gray.900' : 'gray.500'}
						fontWeight="600"
						borderBottom={router.pathname === '/dashboard' ? '2px' : '0'}
						pb={2}
					>
						Net Worth
					</Link>
					<Link
						href="/dashboard/assets"
						mr={8}
						color={router.pathname === '/dashboard/assets' ? 'gray.900' : 'gray.500'}
						fontWeight="600"
						borderBottom={router.pathname === '/dashboard/assets' ? '2px' : '0'}
						pb={2}
					>
						Assets
					</Link>
					<Link
						href="/dashboard/liabilities"
						mr={8}
						color={router.pathname === '/dashboard/liabilities' ? 'gray.900' : 'gray.500'}
						fontWeight="600"
						borderBottom={router.pathname === '/dashboard/liabilities' ? '2px' : '0'}
						pb={2}
					>
						Liabilities
					</Link>
				</Flex>
			)}
		</Flex>
	);
}

export default Header;
