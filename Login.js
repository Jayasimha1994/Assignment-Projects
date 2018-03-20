function validate()
{
    var path = document.login1;
    if (path.name.value.length == 0) { alert('provide username'); return;}
    if (path.password.value.length == 0) { alert('provide password'); return; }
    if (path.name.value == 'bizruntime')
    {
        if (path.password.value == 'Jay@123')
        {
            window.location = 'Success.html';
        }
    }
    else {
        alert('provide valid inputs');
    }
}