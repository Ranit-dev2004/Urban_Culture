import React, { useState } from 'react';
import Splashscreen from './app/splashscreens/splashscreen';
import Splashscreen1 from './app/splashscreens/splashscreen1';
import Splashscreen2 from './app/splashscreens/splashscreen2';
import Splashscreen3 from './app/splashscreens/splashscreen3';
import Signin from './app/Auth/signin';
import Signup from './app/Auth/signup';

const Navigation = () => {
    const [currentScreen, setCurrentScreen] = useState(1);

    const handleNext = () => {
        setCurrentScreen((prev) => prev + 1);
    };

    const handlePrevious = () => {
        setCurrentScreen((prev) => prev - 1);
    };

    const handleSkip = (target) => {
        setCurrentScreen(target);
    };

    switch (currentScreen) {
        case 1:
            return <Splashscreen onNext={handleNext} />;
        case 2:
            return <Splashscreen1 onNext={handleNext} onSkip={() => handleSkip('signin')} />;
        case 3:
            return <Splashscreen2 onNext={handleNext} onPrevious={handlePrevious} onSkip={() => handleSkip('signin')} />;
        case 4:
            return <Splashscreen3 onPrevious={handlePrevious} onSkip={() => handleSkip('signin')} />;
        case 'signin':
            return <Signin onNext={() => handleSkip('signup')} />;
        case 'signup':
            return <Signup />;
        default:
            return <Splashscreen onNext={handleNext} />;
    }
};

export default Navigation;
