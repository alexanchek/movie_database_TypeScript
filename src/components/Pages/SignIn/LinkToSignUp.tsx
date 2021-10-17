import React from 'react';
import { Link } from 'react-router-dom';

interface ILinkToSignUp {
    text: string;
}

const LinkToSignUp: React.FC<ILinkToSignUp> = ({text}) => {
    return (
        <Link to="/signup">{text}</Link>
    );
};

export default LinkToSignUp;