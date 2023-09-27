import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getDatabase, onValue, push, ref, set } from 'firebase/database';
import { app } from './firebaseconfig';

const auth = getAuth(app);
const db = getDatabase(app);

export let fbSignUp=(body)=>{
    return new Promise((resolve,reject)=>{
        if(!body.email || !body.password){
            reject("Email and Password is Required")
        }else{
            createUserWithEmailAndPassword(auth,body.email,body.password).then(res=>{
                let id = res.user.uid

                body.id = id
                const referece = ref(db,`users/${id}`)
                set(referece,body).then(user=>{
                    resolve("User Created Succefully")
                }).catch(error=>{
                    reject(error)
                })

            }).catch(err=>{
                reject(err)
            })
        }
    })
};

export let fbLogin=(body)=>{
    return new Promise((resolve,reject)=>{
        if(!body.email || !body.password){
            reject("Email and Password is Required")
        }else{
            signInWithEmailAndPassword(auth,body.email,body.password).then(res=>{
                let id = res.user.uid

                const referece = ref(db,`users/${id}`)

                onValue(referece,(data)=>{
                    if(data.exists()){
                        resolve(data.val())
                    }else{
                        reject("No Data Found")
                    }
                } )

            }).catch(err=>{
                reject(err)
            })
        }
    })
};

export let fbAuth = () => {
    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const uid = user.uid;
                resolve(user);
                // ...
            } else {
                reject("No User is Logged in");
                // User is signed out
                // ...
            }
        });
    });
};

export let fbLogOut = () => {
    return new Promise((resolve, reject) => {
        signOut(auth).then((res) => {
            // Sign-out successful.
            resolve(res);
        }).catch((err) => {
            // An error happened.
            reject(err);
        });

    });
};

export let questionsAdd = (nodeName, body, id) => {
    return new Promise((resolve, reject) => {
        const Id = push(ref(db, `${nodeName}/`)).key;

        body.id = Id;

        const reference = ref(db, `${nodeName}/${Id}`);
        set(reference, body).then(res => {
            resolve("Data Send Successfully");
        }).catch(err => {
            reject(err);
        });
    });
};

export let questionGet = (nodeName, id) => {
    return new Promise((resolve, reject) => {
        const reference = ref(db, `${nodeName}/${id ? id : ''}`);
        onValue(reference, (data) => {
            if (data.exists()) {
                resolve(Object.values(data.val()));
            } else {
                reject('No Data Found');
            }
        });
    });
};


export const fbDelete = () => {};
export const fbEdit = () => {};
export const fbGetById = () => {};


