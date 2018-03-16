import React from 'react';
import Link from 'next/link';
import { centered_box } from '../styles/styles';

const errorPage = () => (
    <div>
        <h1>Oops something goes wrong!</h1>
        <p>Go to <Link href="/"><a>Go To Main Page</a></Link> </p>
        <style jsx>{centered_box}</style>
    </div>
);

export default errorPage;
