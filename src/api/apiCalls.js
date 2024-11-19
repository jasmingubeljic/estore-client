// here we will define all apis for the app
export const getApiUrl = () => {
  return 'http://localhost:3001'
};

export const logIn = async (email, password, onSuccess, onError) => {   
    const data = { email, password }
    try {
        let q = '/login'
        const response = await fetch(getApiUrl()+q, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                // 'Authorization': user.signInUserSession.idToken.jwtToken,
            },
            body: JSON.stringify(data)
        });
        console.log('does this run?')
        const r = await response.json();
        if (response.ok) {
            onSuccess(r.resource);
        } else {
            onError(response);
        }
    } catch (error) {
        onError(error);
    }
}

export const createProduct = async (productData, onSuccess, onError) => {   
    const data = JSON.stringify(productData)
    try {
        let q = '/admin/create-product'
        const response = await fetch(getApiUrl()+q, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                // 'Authorization': user.signInUserSession.idToken.jwtToken,
            },
            body: JSON.stringify(data)
        });
        console.log('does this run?')
        const r = await response.json();
        if (response.ok) {
            onSuccess(r.resource);
        } else {
            onError(response);
        }
    } catch (error) {
        onError(error);
    }
}

export const getProducts = async (onSuccess, onError) => {   
    try {
        let q = '/product'
        const response = await fetch(getApiUrl()+q, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        
        const r = await response.json();
        if (response.ok) {
            onSuccess(r);
        } else {
            onError(response);
        }
    } catch (error) {
        onError(error);
    }
}

export const getProductById = async (id, onSuccess, onError) => {
    try {
        let q = '/product/' + id
        
        const response = await fetch(getApiUrl() + q, {
            method: 'GET', 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        
        const r = await response.json();
        if (response.ok) {
            onSuccess(r);
        } else {
            onError(response);
        }

    } catch (error) {
        onError(error)
    }
}

export const deleteProduct = async (product, onSuccess, onError) => {
    try {
        let q = '/admin/product'
        const response = await fetch(getApiUrl() + q, {
            method: 'DELETE', 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });
        
        const r = await response.json();
        if (response.ok) {
            onSuccess(r);
        } else {
            onError(response);
        }

    } catch (error) {
        onError(error)
    }
}