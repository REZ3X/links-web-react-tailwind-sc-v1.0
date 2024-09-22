import React from 'react';

function SocialMediaContainer() {
    return (
        <div className='social-media flex flex-row gap-4'>
            <div className='instagram-container'>
                <a target='_blank' href='https://rezex.my.id/'><i class="bi bi-instagram"></i></a>
            </div>
            <div className='facebook-container'>
                <a target='_blank' href='https://rezex.my.id/'><i class="bi bi-facebook"></i></a>
            </div>
            <div className='email-container mt-[-5px]'>
                <a target='_blank' href="https://rezex.my.id/"><i class="bi bi-at"></i></a>
            </div>
            <div className='github-container'>
                <a target='_blank' href="https://rezex.my.id/"><i class="bi bi-github"></i></a>
            </div>
            <div className='linkedin-container'>
                <a target='_blank' href="https://rezex.my.id/"><i class="bi bi-linkedin"></i></a>
            </div>
        </div>
    );
}

export default SocialMediaContainer;