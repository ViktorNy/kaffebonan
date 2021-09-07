import { Button } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { CSSProperties } from 'react';
import { Link } from 'react-router-dom';

export const ConfirmationPage = () => {
    return (
        <div style={rootStyle}>
            <CheckCircleIcon />
            Thank you for your purchase, your order is on the way.
            <Link to='/'>
                <Button>
                    Return To Start Page
                </Button>
            </Link>
        </div>
    )
}

const rootStyle: CSSProperties = {
    marginTop: "5rem"
}