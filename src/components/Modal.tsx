import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
interface ModalProps {
    onClose: () => void;
    children: React.ReactNode;
}

const Modal = ({ onClose, children }: ModalProps) => {

    const handleClose = () => {
        onClose();
    };

    return (
        <>
            <div className="modal-overlay p-3">
                <div>
                    <button className="close-button float-right" onClick={handleClose}>
                        <CloseOutlinedIcon />
                    </button>
                    {children}
                </div>
            </div>

        </>
    );
};

export default Modal;
