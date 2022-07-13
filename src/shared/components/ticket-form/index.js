import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
// import ReCAPTCHA from "react-google-recaptcha";

export const DEFAULT_OPERATION_DATA = { status: 'pristine' };

const TicketForm = ({ id, operationCallback }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [occupation, setOccupation] = useState('');
    const [email, setEmail] = useState('');
    const [issuedTicketCounter, setIssuedTicketsCounter] = useState(0);
    const [fetchOperationData, setFetchOperationData] = useState(DEFAULT_OPERATION_DATA);

    async function getTicket(event) {
        event.preventDefault();
        if (issuedTicketCounter < 3) {
            setFetchOperationData({ status: 'pending' });
            fetch('https://matosinhos-tech-ticketing.herokuapp.com/ticket', {
                method: 'POST',
                mode: 'cors',
                crossDomain: true,
                body: JSON.stringify({
                    first_name: firstName,
                    last_name: lastName,
                    occupation,
                    email,
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(data => {
                    if (process.env.NODE_ENV !== 'development') {
                        setIssuedTicketsCounter(issuedTicketCounter + 1);
                        localStorage.setItem('issuedTickets', issuedTicketCounter + 1)
                    }
                    setFetchOperationData(data)
                }).catch(err => err);
        } else {
            setFetchOperationData({ status: 'error', message: 'You cannot issue more tickets.' })
        }
    }

    useEffect(() => {
        if (process.env.NODE_ENV !== 'development') {
            const counter = localStorage.getItem('issuedTickets')

            if (counter) {
                setIssuedTicketsCounter(parseInt(counter))
            }
        }
    }, [])

    useEffect(() => {
        operationCallback(fetchOperationData)
    }, [fetchOperationData.status])

    return (
        <form id={id} class="form" onSubmit={getTicket}
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                padding: '0 0 4rem 1px',
            }}>
            <input
                name="first_name"
                className="getTicketInput"
                placeholder="First Name"
                onChange={(e) => { setFirstName(e.target.value); setFetchOperationData(DEFAULT_OPERATION_DATA); }}
                type="text"
                required />
            <input
                name="last_name"
                className="getTicketInput"
                placeholder="Last Name"
                onChange={(e) => { setLastName(e.target.value); setFetchOperationData(DEFAULT_OPERATION_DATA); }}
                type="text"
                required />
            <input
                name="occupation"
                className="getTicketInput"
                placeholder="Occupation"
                onChange={(e) => { setOccupation(e.target.value); setFetchOperationData(DEFAULT_OPERATION_DATA); }}
                type="text"
                required />
            <input
                name="email"
                className="getTicketInput"
                placeholder="Email"
                onChange={(e) => { setEmail(e.target.value); setFetchOperationData(DEFAULT_OPERATION_DATA); }}
                type="email"
                required />
            <div className="getTicketButton">
                <button type="submit" disabled={fetchOperationData.status !== 'pristine'} form="claim-ticket-form">
                    {fetchOperationData.status === 'pending' ?
                        (<FontAwesomeIcon icon={faSpinner} className="spinner" />) :
                        fetchOperationData.status === 'success' ?
                            'Check your email' :
                            fetchOperationData.status === 'error' ?
                                'Error' :
                                'Claim your ticket'}
                </button>
            </div>
            <div>
                {/* {process.env.NODE_ENV === 'development' &&
                    <ReCAPTCHA
                        sitekey="6LcCB9oeAAAAAFPZUNYwNqQUPIWoNsq5VvvmC5v0"
                        onChange={(e) => console.log(e)}
                        className="getTicketReCaptcha"
                    />
                } */}
            </div>
        </form >
    )
}

export default TicketForm