import { useState } from 'react';


const useFlip = () => {
    const [flipped, setFlipped] = useState(false);

    const toggle = () => {
        setFlipped(flip => !flip);
    }

    return [flipped, toggle];
};


export default useFlip;