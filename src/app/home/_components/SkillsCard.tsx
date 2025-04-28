/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */
"use client"
import { LucideIcon } from 'lucide-react';
import Image from 'next/image';
import React, { FC, Fragment } from 'react';

interface Props {
    src?: string;
    alt?: string;
    name: string;
    className?: string;
    Icon ?:LucideIcon
};

const SkillsCard: FC<Props> = (props) => {
    return (
        <Fragment>
            <div style={{
                backgroundColor: " rgba(255, 255, 255, 0.05)",
                border: " 1px solid var(--border)",
                borderRadius: '0.5rem',
                padding: 'var(--spacing-lg)',
                textAlign: 'center',
                transition: 'transform 0.3s, border-color 0.3s'
            }}>
                {(props.src && props.alt) && (
                    <Image
                        src={props.src}
                        alt={props.alt}
                        width={64}
                        height={64}
                        className={`skill-card-icon ${props.className ?? ""}`}
                    />
                )}
                {
                    props.Icon && (  <props.Icon />  )
                }
                <h4>{props.name}</h4>
            </div>
        </Fragment>
    )
};

export default SkillsCard;