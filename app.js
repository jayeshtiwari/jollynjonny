document.querySelector('.contact-form').addEventListener('submit', submitForm);
        function submitForm(e) {
            e.preventDefault();
            let contactInfo = {
                name: document.querySelector('.name').value,
                email: document.querySelector('.email').value,
                query: document.querySelector('.query').value
            }
            console.log(contactInfo);
            //saveContactInfo(contactInfo);
            document.querySelector('.contact-form').reset();
            sendEmail(contactInfo);
        }
        function sendEmail(contactInfo) {
            Email.send({
                Host: 'smtp.gmail.com',
                Username: 'jollytiwari93@gmail.com',
                Password: 'bapnagroktenetji',
                To: 'jollytiwari93@gmail.com',
                From: contactInfo.email,
                Subject: `${contactInfo.name} sent you a mail.`,
                Body: `Name: ${contactInfo.name} <br/> Email: ${contactInfo.email} <br/> Query: ${contactInfo.query}`
            }).then(message => alert("Your mail has been sent Succesfully"));
        }