import Modal from "../modal";

const SubscribeModal = ({children}: {children?: React.ReactNode}) => {
    return (
        <Modal>
            {children}
        </Modal>
    )
}
export default SubscribeModal;