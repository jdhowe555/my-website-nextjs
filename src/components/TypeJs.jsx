import React from 'react';
import Typed from 'typed.js';

export default function TypeJs({strings = [],
                                typeSpeed = 50,
                                backSpeed = 50,
                                backDelay = 1000,
                                startDelay = 1000,
                                loop = true}) {
    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: strings,
            typeSpeed: typeSpeed,
            backSpeed: backSpeed,
            backDelay: backDelay,
            startDelay: startDelay,
            loop: loop
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, [strings, typeSpeed, backSpeed, backDelay, startDelay, loop]);

    return (
        <span ref={el} />
    );
}