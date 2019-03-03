import React from 'react'
import { Layout, SEO } from 'Common'
import { Intro, Skills, Contact, Projects, ProjectsT } from 'Components/landing'

const IndexPage = () => (
	<Layout>
		<SEO />
		<Intro />
		<Projects />
		<ProjectsT />
		<Skills />
		<Contact />
	</Layout>
)

export default IndexPage
