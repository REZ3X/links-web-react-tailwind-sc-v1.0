import React from "react";
import AstolfoImage from "./AstolfoImage";
import Header from "./Header";
import AllLinks from "./AllLinks";
import SocialMediaContainer from "./SocialMediaContainer";
import Footer from "./Footer";

function MainBody() {
    return (
        <div className="main-body absolute top-36 left-0 right-0 items-center flex justify-center flex-col gap-2 bg-[#2f252c] relative z-5 rounded-3xl">
            <AstolfoImage />
            <Header />
            <AllLinks />
            <SocialMediaContainer />
            <Footer />
        </div>
    );
}

export default MainBody;