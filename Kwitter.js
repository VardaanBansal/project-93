function addUsebase()
{
    user_name = document.getElementById("user_name").value;
    fire.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}