# devRev

## Generating Personal Access Token (PAT)
1. Sign in to your devrev.ai account.
2. Navigate to the settings or profile section.
3. Look for the API Access or Developer Settings.
4. Generate a new Personal Access Token (PAT) with the required permissions.

## Code Snippets

### Get User Info
```javascript
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
```
### Create new work item
```javascript
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
