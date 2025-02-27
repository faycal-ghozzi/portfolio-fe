import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import useTranslations from '../hooks/useTranslations';
import styles from '../../public/styles/Carousel.module.css'

export default function Carousel() {
    const t = useTranslations();

    const pages = [
        { id: 1, content: t.welcome },
        { id: 2, content: t.experience },
        { id: 3, content: t.education },
        { id: 4, content: t.certifications },
        { id: 5, content: t.projects },
        { id: 6, content: t.contact },
    ];

    const [pageIndex, setPageIndex] = useState(0);

    const handleNext = () => {
        setPageIndex((prev) => (prev + 1) % pages.length);
    };

    const handlePrev = () => {
        setPageIndex((prev) => (prev - 1 + pages.length) % pages.length);
    };
}