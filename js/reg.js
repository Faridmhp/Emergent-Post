registration();


function registration() {
    let form = document.getElementById("reg-form");
    let userInput = document.getElementById("user-input-new");
    let emailInput = document.getElementById("email-input-new");
    let passInput = document.getElementById("pass-input-new");
    let passConfirm = document.getElementById("pass-input-confirm");
    let ageCheck = document.getElementById("age-confirm");
    let tosCheck = document.getElementById("tos-input-confirm");

    let pass_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    let user_expression = /^[A-Za-z]+$/;
    let email_expression = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;


    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!userInput.value) {
            alert('Please enter your name');
        }
        else if (!user_expression.test(userInput.value)) {
            alert('Use only alphabet characters for your Username');
        }
        else if (userInput.value.length < 3) {
            alert("Name length should be more than 2");
        }
        else if (!passInput.value) {
            alert('Please enter your Password');
        }

        else if (!pass_expression.test(passInput.value)) {
            alert('Your Password needs to contains at least 1 upper case letter AND 1 number and 1 of the following special characters ( / * - + ! @# $ ^ & * ).');
        }
        else if (!passConfirm.value) {
            alert('Confirm your Password');
        }
        else if (passInput.value != passConfirm.value) {
            alert('Your Passwords did not Match');
        }
		else if(passInput.value.length < 8)
		{
			alert ('8 or more characters rquires for your Password');
		}
        else if(!emailInput.value)
		{
			alert('Please enter your Email');
		}
		else if (!email_expression.test(emailInput.value))
		{
			alert('Invalid Email');
		}
        else {
            alert('Registration Complited')
        }
    });

}