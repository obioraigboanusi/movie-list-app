import React, { ReactNode, useEffect } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };
        document.addEventListener("keydown", handleEscape);

        return () => document.removeEventListener("keydown", handleEscape);
    }, []);

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                    &times;
                </button>
                {children}
            </div>
        </div>,
        document.getElementById("modal") as HTMLElement
    );
};

export default Modal;
