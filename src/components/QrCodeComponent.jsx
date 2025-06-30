import { useState } from 'react'

import QRCode from "react-qr-code"

function QrCodeComponent(props) {
    const {value} = props;
    console.log(value)

    return (
        <>
            <QRCode
                value={value}

            />
        </>
    )
}

export default QrCodeComponent