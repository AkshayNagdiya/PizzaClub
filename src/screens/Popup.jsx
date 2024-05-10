import React from 'react'

const styles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    }
};

function Modal({ children, onClose }) {
    return (
        <div style={styles.overlay} className='fixed top-0 left-0 right-0 bottom-0 sm:top-0   sm:left-0 sm:right-0 sm:bottom-0 flex justify-center items-center rounded-lg z-20 '>
            <div className='bg-white w-[70%] top-8 sm:top-0 sm:mt-[70px] sm:p-[15px] rounded-lg relative sm:w-[80%] sm:max-w-[500px] ' >
                {children}
                <button className='sm:absolute sm:top-[18px] sm:right-6 bg-transparent border-none font-medium text-red-500 cursor-pointer ' onClick={onClose}>X</button>
            </div>
        </div>
    );
}



export default Modal;