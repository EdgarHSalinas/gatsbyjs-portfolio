import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Container, Card } from 'Common'
import starIcon from 'Static/icons/star.svg'
import forkIcon from 'Static/icons/fork.svg'
import { Wrapper, Grid, Item, Content, Stats } from './styles'

export const ProjectsT = () => (
	<StaticQuery
		query={graphql`
			{
				github {
					repositoryOwner(login: "EdgarHSalinas") {
						pinnedRepositories(first: 6) {
							edges {
								node {
									id
									name
									url
									description
									repositoryTopics(first: 4) {
										edges {
											node {
												topic {
													name
												}
											}
										}
									}
									stargazers {
										totalCount
									}
									forkCount
								}
							}
						}
					}
				}
			}
		`}
		render={({
			github: {
				repositoryOwner: {
					pinnedRepositories: { edges },
				},
			},
		}) => (
			<Wrapper as={Container} id="projects">
				<h2>Projects</h2>
				<Grid>
					{edges.map(({ node }) => (
						<Item
							key={node.id}
							as="a"
							href={node.url}
							target="_blank"
							rel="noopener noreferrer"
						>
							<Card>
								<Content>
									<h4>{node.name}</h4>
									<p>{node.description}</p>
								</Content>
								<Stats>
									{node.repositoryTopics.edges.map(({ node }) => (
										<div>
											<span>{node.topic.name}</span>
										</div>
									))}
								</Stats>
							</Card>
						</Item>
					))}
				</Grid>
			</Wrapper>
		)}
	/>
)
