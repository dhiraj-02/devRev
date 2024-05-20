const axios = require('axios');
const token = 'eyJhbGciOiJSUzI1NiIsImlzcyI6Imh0dHBzOi8vYXV0aC10b2tlbi5kZXZyZXYuYWkvIiwia2lkIjoic3RzX2tpZF9yc2EiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiamFudXMiXSwiYXpwIjoiZG9uOmlkZW50aXR5OmR2cnYtdXMtMTpkZXZvLzEzZjM3OHhheXk6ZGV2dS8xIiwiZXhwIjoxNzQ3NzE2MzQzLCJodHRwOi8vZGV2cmV2LmFpL2F1dGgwX3VpZCI6ImRvbjppZGVudGl0eTpkdnJ2LXVzLTE6ZGV2by9zdXBlcjphdXRoMF91c2VyL29pZGN8cGFzc3dvcmRsZXNzfGVtYWlsfDY2NGFjZjljM2RkZDMzYmJiN2MzNDU2YyIsImh0dHA6Ly9kZXZyZXYuYWkvYXV0aDBfdXNlcl9pZCI6Im9pZGN8cGFzc3dvcmRsZXNzfGVtYWlsfDY2NGFjZjljM2RkZDMzYmJiN2MzNDU2YyIsImh0dHA6Ly9kZXZyZXYuYWkvZGV2b19kb24iOiJkb246aWRlbnRpdHk6ZHZydi11cy0xOmRldm8vMTNmMzc4eGF5eSIsImh0dHA6Ly9kZXZyZXYuYWkvZGV2b2lkIjoiREVWLTEzZjM3OHhheXkiLCJodHRwOi8vZGV2cmV2LmFpL2RldnVpZCI6IkRFVlUtMSIsImh0dHA6Ly9kZXZyZXYuYWkvZGlzcGxheW5hbWUiOiIwMWZlMjBiY3MxMTciLCJodHRwOi8vZGV2cmV2LmFpL2VtYWlsIjoiMDFmZTIwYmNzMTE3QGtsZXRlY2guYWMuaW4iLCJodHRwOi8vZGV2cmV2LmFpL2Z1bGxuYW1lIjoiMDFmZTIwYmNzMTE3QGtsZXRlY2guYWMuaW4iLCJodHRwOi8vZGV2cmV2LmFpL2lzX3ZlcmlmaWVkIjp0cnVlLCJodHRwOi8vZGV2cmV2LmFpL3Rva2VudHlwZSI6InVybjpkZXZyZXY6cGFyYW1zOm9hdXRoOnRva2VuLXR5cGU6cGF0IiwiaWF0IjoxNzE2MTgwMzQzLCJpc3MiOiJodHRwczovL2F1dGgtdG9rZW4uZGV2cmV2LmFpLyIsImp0aSI6ImRvbjppZGVudGl0eTpkdnJ2LXVzLTE6ZGV2by8xM2YzNzh4YXl5OnRva2VuL200cGc1ZnluIiwib3JnX2lkIjoib3JnX0hUUkRLbnRmY3Y3TG1jcm0iLCJzdWIiOiJkb246aWRlbnRpdHk6ZHZydi11cy0xOmRldm8vMTNmMzc4eGF5eTpkZXZ1LzEifQ.bWBhDa9wVUdl1b8btSmmv91GNRnIIgWqW0gAkXcofR8MSnLy2cL7ffcOJXaqaMrAI0zgBmrkASYWZmSbUmSI7lHF0HMgdJ37ApKcmU6FPIujR-EyAthr2pz0jhwfOW2GYecCVDj906M_uL9UpEfsE3Pg0SaO_9V4q1JVTMDKF9ZhOhwF0xXhR5M_Gwcv5oKWyFIgXYvzzCDL4wgAbcaWByqfE-iInC9xdB780_9ji-4Of6pGoiXSYSXz8POriAXkAXxqOEH_T_r7K4SK17nGva-UkXCh8vrawrcejU-sCR71onrKV02TGkiXWR2PsY3OTZASyW_JoDPyYC29U4iUmA'; // Replace <PAT> with your actual personal access token

const getUserInfo = () => {
    return new Promise((resolve, reject) => {
        const url = 'https://api.devrev.ai/dev-users.self';
        axios.get(url, {
            headers: {
              'Authorization': token,
            }
            })
            .then(response => {
              console.log(response.data);
              resolve(response.data);
            })
            .catch(error => {
              reject(error);
            });
    })
}

const createWorkItem = () => {
    return new Promise((resolve, reject) => {
        const url = 'https://api.devrev.ai/works.create';
        axios.post(url, {
            headers: {
              'Authorization': token,
            }, 
            data: {
                "type": "issue",
                "applies_to_part": "feature",
                "owned_by": [
                  "01fe20bcs117@kletech.ac.in"
                ],
                "title": "Create a new work item"
              }
            })
            .then(response => {
              console.log(response.data);
              resolve(response.data);
            })
            .catch(error => {
              reject(error);
            });
    })
}

async function main() {
    try{
        const getUserInfoRes = await getUserInfo();
        const createWorkItemRes = await createWorkItem();
    }
    catch(error){
        console.error(error.message);
    }
}

main();