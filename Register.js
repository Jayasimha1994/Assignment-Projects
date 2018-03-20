function validate1()
{
    var table;
    var name = document.form1;
    if (name.email.value.length != 0) {
        var pattern = /^[a-zA-Z0-9]+@[\w_]+?\.[a-zA-Z]{2,3}$/;
        var str = document.form1.email.value;
        var value = pattern.exec(str);
        if (str == value) {
        }
        else {
            alert('invalid email address');
            return;
        }
    }
    if (name.password.value.length != 0) {
        var pattern = /^[A-Z]{2}[\W_]{3}[a-zA-Z0-9]*$/;
        var str = document.form1.password.value;
        var value = pattern.exec(str);
        if (str == value) {
        }
        else {
            alert('invalid password');
            return;
        }
    }
    if (name.name.value.length < 5) { alert('name must be have five characters'); return;}
    else if (name.password.value.length == 0) { alert('provide password'); return; }
    else if (name.email.value.length == 0) { alert('provide email'); return; }
    else if (name.mobile.value.length < 10) { alert('provide mobile number'); return; }
    else if (name.mobile.value.length > 10) { alert('provide mobile number'); return; }
    else if (name.address.value.length == 0) { alert('provide address'); return; }
    else if (name.captcha.value !== name.captcha1.value) { alert('provide captcha'); return; }
    else {
        document.form1.reset();
        window.location = 'Success.html';
    }
    var object = {};
    object.name = name.name.value;
    object.password = name.password.value;
    document.getElementById('div1').innerHTML = object.name;
}