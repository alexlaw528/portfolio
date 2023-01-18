import axios from "axios";

exports.handler = async function(event) {
  const service_id = process.env.REACT_APP_SERVICE_ID;
  const template_id = process.env.REACT_APP_TEMPLATE_ID;
  const api_key = process.env.REACT_APP_API_KEY;
  const private_key = process.env.REACT_APP_PRIVATE_KEY;
  let statusCode = 404;
  let emailResponse = '';

  const {user_name, user_email, user_phone, message} = JSON.parse(event.body);

  const emailFormData = {
    service_id: service_id,
    template_id: template_id,
    user_id: api_key,
    template_params: {
      user_name,
      user_email,
      user_phone,
      message
    },
    accessToken: private_key
    // accessToken: badKey
  }

 await axios
    .post('https://api.emailjs.com/api/v1.0/email/send', emailFormData)
    .then((response) => {
      console.log('response', response)
      return response.status
    })
    .then((status) => {
      if (status === 200) {
        statusCode = status;
        emailResponse = "Email successfully sent";
      } else {
        statusCode = 500;
        emailResponse = "Error sending email";
      }
    })
    .catch((err) => {
      statusCode = 500;
      emailResponse = err;
    })

  // Lambda function return 
  return {
    statusCode,
    body: emailResponse
  }
}