import * as firebase from 'firebase';

class ServiceAPI {
    constructor() {
        this.syncData();
    }

    state = {
        user: {}
    };
   
    syncData = () => {
        // sync data with local when re-open app
    }

    getUserData = () => {
        if (firebase.auth().currentUser === null) {
            return {};
        }
        let userData = {
            displayName,
            uid,
            email,
            emailVerified
        } = firebase.auth().currentUser;

        return userData;
    }

    updateNickname = (nick) => {
        if (firebase.auth().currentUser !== null) {
            firebase.auth().currentUser.updateProfile({
                displayName: nick
            }).then(function () {
                console.log('Updated');
            }, function (error) {
                console.log('Error happened', error);
            });
        }
    }

    login = (data) => {
        let {
            email,
            password
        } = data;
        console.log('loggin in automatically');
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(console.log('all done'))
            .catch(function (error) {
                console.log(error);
            });
    }

    createAccount = (data) => {
        let {
            email,
            password,
            nickname
        } = data;
        console.log('loggin in with new account');
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(function (error) {
                console.log(error);
            })
            .finally(() => {
                this.updateNickname(nickname)
            });
    }

    // not used atm
    setupLogin = () => {
        var state = this.state;
        // call api or something
        // token will be stored in state
        firebase.auth().signInAnonymously().catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });

        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                var isAnonymous = user.isAnonymous;
                var uid = user.uid;
                state.user = {
                    isAnonymous,
                    uid,
                    isLoggedIn: true
                };
            } else {
                state.user = {
                    isLoggedIn: false
                };
            }
            // ...
        });
    }

    logout = () => {

    }

    onLoggedOut = (callback) => {
        // listener will run callback function when user logged out
    }

    getUser = () => state.user;
}

export default new ServiceAPI();
