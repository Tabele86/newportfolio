import styled from 'styled-components';
import { Link } from 'gatsby';

export const TitleWrap = styled.div`
	margin: auto 0;
	flex: 0 1 36px;

	@media (max-width: 768px) and (orientation: landscape) {
		flex: 0 1 25px;
	}
`;
export const NavItem = styled(Link)`
  text-decoration: none;
  color: white;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: rgb(180, 232, 72);
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    border-color: rgb(180, 232, 72);
	color: rgb(180, 232, 72);
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`;

export const Navigation = styled.nav`
	height: 10vh;
	display: flex;
	background-color: black;
	position: relative;
	justify-content: space-between;
	text-transform: uppercase;
	border-bottom: 2px solid #33333320;
	margin: 0 auto;
	padding: 0 5vw;
	z-index: 2;
	align-self: center;

	@media (max-width: 768px) {
		display: flex;
		flex: column;
		position: sticky;
		height: 8vh;
		top: 0;
		left: 0;
		right: 0;
		left: 0;
	}
`;

export const Toggle = styled.div`
	display: none;
	height: 100%;
	cursor: pointer;
	padding: 0 10vw;

	@media (max-width: 768px) {
		display: flex;
	}
`;

export const NavBox = styled.div`
	display: flex;
	height: 100%;
	justify-content: flex-end;
	align-items: center;

	@media (max-width: 768px) {
		flex-direction: column;
		position: fixed;
		width: 100%;
		justify-content: flex-start;
		padding-top: 10vh;
		background-color: black;
		transition: all 0.3s ease-in;
		top: 8vh;
		left: ${(props) => (props.open ? '-100%' : '0')};
	}
`;

export const Hamburger = styled.div`
	background-color: white;
	width: 30px;
	height: 3px;
	transition: all .3s linear;
	align-self: center;
	position: relative;
	transform: ${(props) => (props.open ? 'rotate(-45deg)' : 'inherit')};

	::before,
	::after {
		width: 30px;
		height: 3px;
		background-color: white;
		content: "";
		position: absolute;
		transition: all 0.3s linear;
	}

	::before {
		transform: ${(props) => (props.open ? 'rotate(-90deg) translate(-10px, 0px)' : 'rotate(0deg)')};
		top: -10px;
	}

	::after {
		opacity: ${(props) => (props.open ? '0' : '1')};
		transform: ${(props) => (props.open ? 'rotate(90deg) ' : 'rotate(0deg)')};
		top: 10px;
	}
`;
