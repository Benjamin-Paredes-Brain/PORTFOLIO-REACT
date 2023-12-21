import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';
import { LangContext } from "../Context/LangContext.jsx";
import { useContext } from "react";

export const Contact = () => {
    const form = useRef();
    const { t } = useContext(LangContext);

    const apiEmailService = import.meta.env.VITE_EMAIL_SERVICE
    const apiEmailTemplate = import.meta.env.VITE_EMAIL_TEMPLATE
    const apiEmailKey = import.meta.env.VITE_EMAIL_KEY



    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(apiEmailService, apiEmailTemplate, form.current, apiEmailKey)
            .then(() => {
                Swal.fire({
                    title: t("contactAlertSuccess"),
                    icon: 'success',
                    confirmButtonText: 'OK',
                    allowOutsideClick: false
                })
                form.current.reset()
            }, (error) => {
                Swal.fire({
                    title: t("contactAlertError"),
                    icon: 'error',
                    confirmButtonText: 'OK',
                    allowOutsideClick: false
                })
            });
    };

    return (
        <div className="contact_container" id="contact">
            <h1 className="title">{t("titleSectionContact")}</h1>
            <div className="main_form_container">
                <form className="form_container" ref={form} onSubmit={sendEmail}>
                    <label htmlFor="name" className="label_form">{t("contactLabelName")}</label>
                    <input type="text" id="name" name="name" className="inputs_form" placeholder={t("contactPlaceholderName")} required />
                    <label htmlFor="email" className="label_form">{t("contactLabelEmail")}</label>
                    <input type="email" id="email" name="email" className="inputs_form" placeholder={t("contactPlaceholderEmail")} required />
                    <label htmlFor="message" className="label_form">{t("contactLabelMessage")}</label>
                    <textarea id="message" name="message" required className="inputs_form"></textarea>
                    <button className="inputs_form" style={{ cursor: "pointer" }}>{t("contactButton")}</button>
                </form>
            </div>
        </div>
    )
}
