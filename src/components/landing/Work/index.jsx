import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'Common'

// import dev from 'Static/illustrations/skills.svg'
import { Wrapper, SkillsWrapper, Details } from './styles'

export const Work = () => (
	<Wrapper id="work">
		<SkillsWrapper as={Container}>
			<Details>
				<h1>Work</h1>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry’s standard dummy.
				</p>
				<Button as={AnchorLink} href="#contact">
					Hire me
				</Button>
			</Details>
		</SkillsWrapper>
	</Wrapper>
)
