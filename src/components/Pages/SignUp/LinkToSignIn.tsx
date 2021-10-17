import React from 'react';
import { Link } from 'react-router-dom';

interface ILinkToSignIn {
    text: string;
}

const LinkToSignIn: React.FC<ILinkToSignIn> = ({text}) => {
    return (
        <Link to="/signin">{text}</Link>
    );
};

export default LinkToSignIn;