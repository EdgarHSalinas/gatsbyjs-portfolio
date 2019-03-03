import styled from 'styled-components'

export const Wrapper = styled.div`
	padding: 2rem 0;
`

export const Grid = styled.div`
	display: grid;
	align-items: center;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: 8fr;
	gap: 1.2rem 1.2rem;

	@media (max-width: 960px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 680px) {
		grid-template-columns: 1fr;
	}
`

export const Item = styled.div`
	width: 100%;
	height: 100%;
	overflow: hidden;
	box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);

	h4 {
		color: #212121;
	}

	p {
		color: #707070;
	}
`

export const Content = styled.div`
	padding: 1rem 0;
`

export const Topic = styled.div`
	display: inline-block;
	margin-bottom: 8px;
`

export const Summary = styled.div`
	list-style: none;
	display: list-item;
	box-sizing: border-box;
`
export const TopicContent = styled.div`
	display: block;
`

export const ItemTopic = styled.div`
	margin-bottom: 4px;
	float: left;
`

export const ItemContainer = styled.div`
	align-items: baseline;
	display: inline-block;

	flex-wrap: wrap;
`

export const TopicTag = styled.div`
	background-color: #f1f8ff;
	border-radius: 3px;
	display: inline-block;
	margin-right: 0.5rem;
	padding: 0.3em 0.9em;

	white-space: nowrap;
`
export const TopicPage = styled.div`
	color: #0366d6;
	text-decoration: none;
`
