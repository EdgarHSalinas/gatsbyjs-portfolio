import React from 'react'
import { Layout, SEO } from 'Common'
import { Intro, Skills, Contact, Projects, Work } from 'Components/landing'

const IndexPage = () => (
	<Layout>
		<SEO />
		<Intro />
		<Projects />
		<Work />
		<Skills />

		<Contact />
	</Layout>
)

export default IndexPage
