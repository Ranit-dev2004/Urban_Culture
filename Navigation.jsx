import React, { useState } from 'react';
import Splashscreen from './app/splashscreens/splashscreen';
import Splashscreen1 from './app/splashscreens/splashscreen1';
import Splashscreen2 from './app/splashscreens/splashscreen2';
import Splashscreen3 from './app/splashscreens/splashscreen3';
import Signin from './app/Auth/signin';
import Signup from './app/Auth/signup';
import ForgotPassword from './app/Auth/ForgotPassword';
import HomePage from './app/HomePage/HomePage1';
import Search from './app/search/search'
import CollectionDetails from './app/Collections/collectionDetails';

const Navigation = () => {
    const [currentScreen, setCurrentScreen] = useState('splash1');

    const handleNext = (nextScreen) => {
        setCurrentScreen(nextScreen);
    };

    const handlePrevious = (previousScreen) => {
        setCurrentScreen(previousScreen);
    };

    switch (currentScreen) {
        case 'splash1':
            return <Splashscreen onNext={() => handleNext('splash2')} />;
        case 'splash2':
            return <Splashscreen1 onNext={() => handleNext('splash3')} onSkip={() => handleNext('signin')} />;
        case 'splash3':
            return <Splashscreen2 onNext={() => handleNext('splash4')} onPrevious={() => handlePrevious('splash2')} onSkip={() => handleNext('signin')} />;
        case 'splash4':
            return <Splashscreen3 onPrevious={() => handlePrevious('splash3')} onSkip={() => handleNext('signin')} />;
        case 'signin':
            return <Signin onNext={() => handleNext('signup')} onSkip={() => handleNext('forgotPassword')} onPrevious={()=> handleNext('HomePage')} />;
        case 'signup':
            return <Signup onPrevious={() => handleNext('signin')} />;
        case 'forgotPassword':
            return <ForgotPassword onPrevious={() => handleNext('signin')} />;
        case 'HomePage':
            return <HomePage onScreen={()=>handleNext('search')} onCollection={()=>handleNext('collection')}/>;
        case 'search':
            return <Search />;
        case 'collection':
            return <CollectionDetails/>
        default:
            return <Splashscreen onNext={() => handleNext('splash2')} />;
    }
};

export default Navigation;
