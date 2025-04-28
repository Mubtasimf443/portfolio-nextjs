/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import Heading2 from '@/components/element/Heading2';
import SubHeading from '@/components/element/SubHeading';
import React, { FC, Fragment } from 'react';

interface Props {

};

const page: FC<Props> = ({ }) => {
    return (
        <Fragment>
            <section className='text-center container' >
                <Heading2 >Blogs</Heading2>
                <SubHeading>This are the Blogs Written By Muhammad Mubtasim</SubHeading>
            </section>

        </Fragment>
    )
};

export default page;