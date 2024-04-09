import ListGroup from 'react-bootstrap/ListGroup';
import React from 'react';
import { Link } from 'react-router-dom';
export default function SideBar(){
    return(
        <>
        <ListGroup className='listStyle'>
            <ListGroup.Item action  variant="dark" aria-current="page" href='/'>All</ListGroup.Item>
            <ListGroup.Item action  variant="dark" href='/fullStackDevelopment'>Full Stack Development</ListGroup.Item>
            <ListGroup.Item action  variant="dark"  href='/dataScience'> Data Science</ListGroup.Item>
            <ListGroup.Item action variant='dark' href='/cyberSecurity'>Cyber Security</ListGroup.Item>
            <ListGroup.Item action variant='dark' aria-disabled="true" href='/career'>Carrer</ListGroup.Item>
        </ListGroup>
        </>
    )
}