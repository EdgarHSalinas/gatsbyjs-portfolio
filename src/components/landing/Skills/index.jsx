import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'Common'
import dev from 'Static/illustrations/about-me.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Skills = () => (
	<Wrapper id="about">
		<SkillsWrapper as={Container}>
			<Thumbnail>
				<img src={dev} alt="I’m Edgar and I’m a Full Stack Software Dev!" />
			</Thumbnail>
			<Details>
				<h1>About</h1>
				<p>
					I am a Full-stack Software Developer. I have a passion for projects at
					the intersection of Technology and Finance (Fin/Tech).
				</p>
				<p>
					I create APIs both on a monolith or microservice architectures. Use
					React for dynamic frontend views and work best in an agile
					environment. I am always excited to chat about tech, the outdoors, or
					to say hello.
				</p>
				<Button as={AnchorLink} href="#contact">
					Hire me
				</Button>
			</Details>
		</SkillsWrapper>
	</Wrapper>
)
