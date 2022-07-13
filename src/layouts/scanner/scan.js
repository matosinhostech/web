import React, { useEffect, useCallback, useState } from "react"
// import QrReader from 'modern-react-qr-reader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

import "./styles.scss"

const DEFAULT_OPERATION_DATA = { status: 'pristine' };
const TICKET_KEYS = ['first_name', 'last_name', 'occupation', 'email'];

const windowGlobal = typeof window !== 'undefined' && window;

const Scan = () => {
  const [ticket, setTicket] = useState(null);
  const [fetchOperationData, setFetchOperationData] = useState(DEFAULT_OPERATION_DATA);

  const previewStyle = {
    height: '55vh',
    maxWidth: '100vw',
  }

  function handleScan(data) {
    if (data) {
      try {
        const scan = JSON.parse(data);
        if (TICKET_KEYS.every(key => scan.hasOwnProperty(key))) {
          setTicket(scan)
          validateTicket(scan)
        } else {
          setFetchOperationData({ status: 'error', message: 'Failed to parse ticket' })
        }
      } catch (e) {
        setFetchOperationData({ status: 'error', message: 'Failed to parse ticket' })
      }
    }
  }

  function handleError(err) {
    alert(err)
  }

  const parseTicket = useCallback((ticket) => {
    if (fetchOperationData.status !== 'pending') {
      return fetchOperationData.status === 'success' ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0 2rem', textAlign: 'left' }}>
          <FontAwesomeIcon icon={faCheckCircle} style={{ fontSize: '2rem', paddingRight: '1rem' }} />
          <div style={{ fontSize: '0.8rem' }}>
            <div><b>Name: </b>{ticket.first_name} {ticket.last_name}</div>
            <div><b>Occupation: </b>{ticket.occupation}</div>
            <div style={{ fontSize: '0.5rem' }}>{fetchOperationData.message}</div>
          </div>
        </div>
      ) : fetchOperationData.status === 'error' ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0 2rem', textAlign: 'left' }}>
          <FontAwesomeIcon icon={faTimesCircle} style={{ fontSize: '2rem', paddingRight: '1rem' }} />
          <div style={{ fontSize: '0.8rem' }}>
            {fetchOperationData.message}
          </div>
        </div>
      ) : (
        <>
          Ready to scan
        </>
      )
    }
  }, [fetchOperationData.status])

  async function validateTicket(ticket) {
    setFetchOperationData({ status: 'pending' });
    fetch('https://matosinhos-tech-ticketing.herokuapp.com/validate', {
      method: 'POST',
      mode: 'cors',
      crossDomain: true,
      body: JSON.stringify({
        id: ticket.id,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        setFetchOperationData(data)
      }).catch(err => console.log(err));
  }

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') {
      const scanAccess = localStorage.getItem('scanAccess')

      if (scanAccess !== 'active') {
        const password = prompt("Enter scanner password:");

        if ('matech22' !== password && windowGlobal) {
          windowGlobal.location.href = '/';
        } else {
          localStorage.setItem('scanAccess', 'active')
        }
      }
    }
  }, [windowGlobal]);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        {/* <QrReader
          delay={4000}
          style={previewStyle}
          facingMode={"environment"}
          onError={handleError}
          onScan={handleScan}
        /> */}
        <div style={{ width: '100%', textAlign: 'center', paddingTop: '5rem' }}>
          {fetchOperationData.status === 'pristine' ? 'Ready to scan' : parseTicket(ticket)}
        </div>
      </div>
    </>
  )
};

export default Scan
