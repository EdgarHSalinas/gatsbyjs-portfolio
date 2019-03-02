import React from 'react'
import { Link } from 'gatsby'
import { Container } from 'Common'
import NavbarLinks from '../NavbarLinks'
import { Wrapper } from './styles'

const Navbar = () => (
	<Wrapper as={Container}>
		<Link to="/">Edgar Salinas</Link>
		<NavbarLinks desktop />
	</Wrapper>
)

export default Navbar
