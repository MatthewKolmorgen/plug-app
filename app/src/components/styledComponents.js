import styled from 'styled-components';

// Header Div

export const Header = styled.div`
	display: flex;
	align-items: center;
	margin: 15px;
	img {
		width: 50px;
		height: 50px;
		border-radius: 30%;
	}
	div {
		display: flex;
		flex-direction: column;
		margin: 15px;
		p {
			color: green;
			margin-top: 5px;
		}
	}
`;

// Media Cards

export const Media = styled.div`
	background-color: #f4f7fb;
	display: flex;
	flex-direction: row;
	overflow: scroll;
	padding: 15px;
	.media {
		margin-right: 8px;
		padding-right: 5px;
		height: 235px;
		img {
			height: 185px;
			width: 108px;
			opacity: 0.6;
		}
		#play {
			color: white;
			position: relative;
			bottom: 95px;
			left: 40px;
			font-size: 1.5em;
			opacity: 1;
		}
	}
`;

// Buttons

export const Button = styled.div`
	display: flex;
	width: 110px;
	justify-content: space-between;
	position: relative;
	bottom: 20px;
	button {
		height: 35px;
		width: 70px;
		border: solid #cddee6 1px;
		border-radius: 5px;
		background-color: white;
		color: gray;
		font-size: 1em;
		cursor: pointer;
		a {
			color: gray;
			:hover {
				color: blue;
			}
		}
		:hover {
			color: blue;
		}
	}
`;

// PayPer Color

export const PayPer = styled.p`
	color: green;
`;

// Plugs

export const Plugs = styled.h2`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 20px;
`;
