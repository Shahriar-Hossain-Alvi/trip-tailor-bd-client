import { useSpring, animated } from '@react-spring/web';
import { useEffect, useRef, useState } from 'react';

const OverViewSection = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                    } else {
                        setIsInView(false);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);


    const springs = useSpring({
        from: { opacity: 0, transform: 'translateX(-50px)' },
        to: {
            opacity: isInView || isFocused ? 1 : 0.5,
            transform: isInView || isFocused ? 'translateX(0px)' : 'translateX(-50px)'
        },
        config: { tension: 120, friction: 14 }
    });

    const springs2 = useSpring({
        from: { opacity: 0, transform: 'translateX(50px)' },
        to: {
            opacity: isInView || isFocused ? 1 : 0.5,
            transform: isInView || isFocused ? 'translateX(0px)' : 'translateX(50px)'
        },
        config: { tension: 120, friction: 14 }
    });


    return (
        <div className="mx-1 md:mx-2 overflow-hidden">
            <h2 className="text-xl font-medium text-center mb-8 text-ttPrimary">The videos below will give you a quick overview of our services</h2>

            <div className='grid md:grid-cols-2 gap-5'>
                <animated.div
                    ref={sectionRef}
                    tabIndex="0"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    style={{ ...springs, outline: 'none' }}

                >
                    <div>
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/JLjvEYMBGzQ?si=AMmPm-YUAyDBm3eZ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </animated.div>

                <animated.div
                    ref={sectionRef}
                    tabIndex="0"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    style={{ ...springs2, outline: 'none' }}

                >
                    <div>
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/Z44fFqBQQtg?si=fLk8YDKezKXmf3z8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </animated.div>
            </div>
        </div>

    );
};

export default OverViewSection;