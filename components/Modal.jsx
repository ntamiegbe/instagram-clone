import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import { Dialog, Transition } from '@headlessui/react'

const Modal = () => {

    const [open, setOpen] = useRecoilState(modalState)

    return (
        <div>
            {open && (
                <p>I am open</p>
            )}
        </div>
    )
}

export default Modal