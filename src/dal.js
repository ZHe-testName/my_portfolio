import emailjs from 'emailjs-com';
 
export const Dal = {
    sendEmailFunc: (values) => {
        const serviceId = 'my_prtfolio_service';
        const templateId = 'template_ninja_portfolio';
        const userId = 'user_PN1UtxxZmvfpNdfJkk6dh';

        emailjs.send(serviceId, templateId, values, userId)
            .then(res => console.log(res), err => console.log(err));
        }
};