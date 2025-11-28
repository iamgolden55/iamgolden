"use client";

import { useEffect, useRef } from 'react';
import styles from './Services.module.css';

export default function Services() {
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollLeft = 0;
        }
    }, []);

    const services = [
        {
            title: 'Design',
            description: 'Tailored interfaces shaped with clarity and care.',
            features: [
                'Custom layout and responsive design',
                'Design system and UI consistency',
                'Figma file delivery and preview link',
            ],
            price: '+ 150€',
        },
        {
            title: 'Development',
            description: 'Fast, scalable front-end built for long-term growth.',
            features: [
                'Clean, maintainable front-end code',
                'SEO-ready structure and performance',
                'Hosting setup and deployment',
            ],
            price: '+ 350€',
            highlight: true,
        },
        {
            title: 'Branding',
            description: 'Visual identity shaped to speak with clarity and intention.',
            features: [
                'Logo design and typography system',
                'Color palette and usage guide',
                'Brand manual in PDF format',
            ],
            price: '+ 250€',
        },
    ];

    return (
        <section className={styles.services}>
            <div className={styles.container} ref={containerRef}>
                {services.map((service, index) => (
                    <div key={index} className={`${styles.card} ${service.highlight ? styles.highlight : ''}`}>
                        <h3 className={styles.title}>{service.title}</h3>
                        <p className={styles.description}>{service.description}</p>
                        <ul className={styles.features}>
                            {service.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                            ))}
                        </ul>
                        <div className={styles.footer}>
                            <span>Need extra rounds?</span>
                            <span className={styles.price}>{service.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
