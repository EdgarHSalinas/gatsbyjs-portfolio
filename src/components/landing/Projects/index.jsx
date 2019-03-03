import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Container, Card } from 'Common'
import {
	Wrapper,
	Grid,
	Item,
	Content,
	Topic,
	ItemTopic,
	TopicTag,
	TopicPage,
	TopicContent,
	Summary,
	ItemContainer,
} from './styles'

export const Projects = () => (
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
												id
												topic {
													name
												}
												url
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
								<Topic>
									<Summary>
										<TopicContent>
											<ItemTopic>
												<ItemContainer>
													{node.repositoryTopics.edges.map(({ node }) => (
														<TopicTag
															key={node.id}
															as="span"
															href={node.url}
															target="_blank"
															rel="noopener noreferrer"
														>
															<TopicPage>{node.topic.name}</TopicPage>
														</TopicTag>
													))}
												</ItemContainer>
											</ItemTopic>
										</TopicContent>
									</Summary>
								</Topic>
							</Card>
						</Item>
					))}
				</Grid>
			</Wrapper>
		)}
	/>
)
