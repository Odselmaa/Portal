const TokenGenerator = require('uuid-token-generator');
var nodemailer = require('nodemailer');



function get_token() {
    const tokgen = new TokenGenerator(256, TokenGenerator.BASE58);
    return tokgen.generate()
}

module.exports = {
    
    send_email: function (url, email, callback) {
        token = get_token()

        var body = `Hello from StudentPortal,
To complete the email verification process, click the following link:
${url}${token}
This link will be expired after 5 days.
`
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'odselmaa.dorj@gmail.com',
                pass: '9e5-QQF-SZh-KLK'
            }
        });

        var mailOptions = {
            from: 'odselmaa.dorj@gmail.com',
            to: email,
            subject: 'Confirm your email',
            text: body
        };

        transporter.sendMail(mailOptions, function (error, info) {
            callback(error, info, token)
            
        });
    }

}