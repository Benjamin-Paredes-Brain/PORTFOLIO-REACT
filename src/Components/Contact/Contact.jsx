import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_e1bngrm', 'template_l7inrv4', form.current, 'XPZETJEvtYAR4w2Ct')
            .then(() => {
                Swal.fire({
                    title: 'FORM SUBMITTED CORRECTLY',
                    icon: 'success',
                    confirmButtonText: 'ACCEPT',
                    allowOutsideClick: false
                })
                form.current.reset()
            }, (error) => {
                Swal.fire({
                    title: 'THERE WAS AN ERROR WHEN SENDING THE FORM',
                    icon: 'error',
                    confirmButtonText: 'ACCEPT',
                    allowOutsideClick: false
                })
            });
    };

    return (
        <div className="contact_container" id="contact">
            <h1 className="title">CONTACT</h1>
            <div className="main_form_container">
                <form className="form_container" ref={form} onSubmit={sendEmail}>
                    <label htmlFor="name" className="label_form">Name:</label>
                    <input type="text" id="name" name="name" className="inputs_form" placeholder="Example: Benjamin Brain" required />
                    <label htmlFor="email" className="label_form">Email:</label>
                    <input type="email" id="email" name="email" className="inputs_form" placeholder="Example: name@email.com" required />
                    <label htmlFor="message" className="label_form">Message:</label>
                    <textarea id="message" name="message" required className="inputs_form"></textarea>
                    <button className="inputs_form" style={{cursor: "pointer"}}>Send</button>
                </form>
            </div>
        </div>
    )
}
