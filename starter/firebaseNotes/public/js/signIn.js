
const signInButton = document.querySelector("#signInButton");

signInButton.addEventListener('click', (e) => {
    const provider = new firebase.auth.GoogleAuthProvider();
    
    // The following connection code was taken from https://firebase.google.com/docs/auth/web/google-signin#web-v8_4:
    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...

            console.log(user);
            window.location = "writeNote.html";
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...

            console.log("THINGS BROKE!");
            console.log(errorCode);
            console.log(errorMessage);
  });
    
    console.log("Sign in function called");
})