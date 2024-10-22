import React from 'react';
import SearchButton from "./SearchButton.tsx";
import BackToTopButton from "./BackToTopButton.tsx";

const MobileMenuBox = () => {
    return (
        <div className="fixed bottom-20 right-2 flex flex-col gap-2">
            <SearchButton />
            <BackToTopButton />
        </div>
    );
};

export default MobileMenuBox;