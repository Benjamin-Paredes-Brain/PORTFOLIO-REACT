import { useForm } from '@formspree/react';
import { useState, useRef } from 'react';
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';

export const Contact = () => {
    const [state, handleSubmit] = useForm('xbjvznqd');
    const [showAlert, setShowAlert] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const formRef = useRef(null);

    const handleFormSubmit = async (event) => {
        const isSuccess = await handleSubmit(event);
        setIsSuccess(isSuccess);
        setShowAlert(true);
        formRef.current.reset();
    };

    const showAlertMessage = () => {
        if (!isSuccess) {
            Swal.fire({
                title: 'SUBMITTED FORM',
                icon: 'success',
                confirmButtonText: 'ACCEPT',
                allowOutsideClick: false
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = '/contact';
                }
            });
        } else {
            Swal.fire({
                title: 'ERROR TO SUBMIT FORM',
                icon: 'error',
                confirmButtonText: 'OK',
                allowOutsideClick: false
            });
        }
    };

    return (
        <div className="contact_container" id="contact">
            <h1 className="title">CONTACT</h1>
            <div className="main_form_container">
                <form className="form_container" onSubmit={handleFormSubmit}>
                    <label htmlFor="name" className="label_form">Name:</label>
                    <input type="text" id="name" name="name" className="inputs_form" placeholder="Example: Benjamin Brain" required />
                    <label htmlFor="email" className="label_form">Email:</label>
                    <input type="email" id="email" name="email" className="inputs_form" placeholder="Example: name@email.com" required />
                    <label htmlFor="message" className="label_form">Message:</label>
                    <textarea id="message" name="message" required className="inputs_form"></textarea>
                    <button type="submit" className="button_form" disabled={state.submitting}>Send</button>
                </form>
                {showAlert && showAlertMessage()}
            </div>
        </div>
    )
}
