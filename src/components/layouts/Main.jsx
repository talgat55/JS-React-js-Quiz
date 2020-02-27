import React from 'react';


const Main = ({children, titleSection, sectionContent}) => {

    return (
        <>
            <div className="main-container">
                <div className="main-container__body">
                    <div className="main-container__title">
                        {titleSection}
                    </div>
                    <div className="main-container__content">
                        {children}
                    </div>
                </div>
                <div className="main-container__aside">
                    {sectionContent}
                </div>
            </div>
        </>
    );
};

export default Main;