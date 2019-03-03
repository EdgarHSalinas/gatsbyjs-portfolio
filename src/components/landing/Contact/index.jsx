import React from 'react'
import { Container } from 'Common'
import contact from 'Static/illustrations/startup-life.svg'
import { Wrapper, Details, Thumbnail } from './styles'
import ContactForm from './ContactForm'

export const Contact = () => (
	<Wrapper as={Container} id="contact">
		<Details>
			<ContactForm />
		</Details>
		<Thumbnail>
			<img src={contact} alt="I’m Edgar and I’m a Full Stack Software Dev!" />
		</Thumbnail>
	</Wrapper>
)
