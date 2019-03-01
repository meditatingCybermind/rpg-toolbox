import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Bar = styled.div`
    position: absolute;
    left: 0;
    height: 100%;
    width: 3.75rem;
    background-color: black;
`;

const Tool = styled(Link)`
    margin: 0.4375rem;
    padding: 0.625rem;
    height: 1.5625rem;
    width: 1.5625rem;
    background-color: gray;
    border-radius: 50%;
    display: inline-block;
    text-decoration: none;
`;

class Toolbar extends Component {
  render() {
    return (
        <Router>
            <Bar>
                <Tool to="/Roller">R</Tool>
                <Tool to="/Home">H</Tool>
                <Tool to="/">Q</Tool>
                <Tool to="/">Q</Tool>
                <Tool to="/">Q</Tool>
                <Tool to="/">Q</Tool>
                <Tool to="/">Q</Tool>
            </Bar>
        </Router>
    );
  }
}

export default Toolbar;
