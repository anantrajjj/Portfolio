import emailjs from 'emailjs-com';


export const sendEmail = (templateParams) => {
  return emailjs.send(
    'service_twb4pf3', // Updated to your service ID
    'template_l0djvbs',
    templateParams,
    '_CDOpBaPuQOfJhG9X'
  );
};

