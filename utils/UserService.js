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
        const {
            displayName,
            uid,
            email,
            emailVerified
        } = firebase.auth().currentUser;

        return {
            displayName,
            uid,
            email,
            emailVerified
        };
    }

    updateNickname = (nick) => {
        if (firebase.auth().currentUser !== null) {
            firebase.auth().currentUser.updateProfile({
                displayName: nick
            }).then(() => {
                console.log('Updated');
            }, (error) => {
                console.log('Error happened', error);
            });
        }
    }

    login = (data) => {
        const {
            email,
            password
        } = data;
        console.log('loggin in automatically');
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(console.log('all done'))
            .catch((error) => {
                console.log(error);
            });
    }

    createAccount = (data) => {
        const {
            email,
            password,
            nickname
        } = data;
        console.log('loggin in with new account');
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                this.updateNickname(nickname);
            });
    }

    logout = () => {
        firebase.auth().signOut()
            .then(() => {
                // Sign-out successful.
                console.log('successfully logged out');
            })
            .catch(e => console.log(e));
    }

    onLoggedOut = () => {
        // listener will run callback function when user logged out
    }

    getUser = () => this.state.user;
}

export default new ServiceAPI();
