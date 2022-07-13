import React from 'react'

import CookieNotice from 'react-cookienotice'
import './styles.css'

const CookieBanner = () => <CookieNotice cookieTextLabel='We use Google Analytics to monitor and improve the performance of the website.' acceptButtonLabel="Dismiss" />

export default CookieBanner