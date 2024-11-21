import { apiUrl } from '../appInfo'

export const logIn = async (email, password, onSuccess, onError) => {   
    const data = { email, password }
    try {
        let q = '/login'
        const response = await fetch(apiUrl+q, {
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
    const { title, image, price, description, category } = productData
        
        const data = new FormData()
        data.append('title', title.value)
        data.append('image', image.files[0])
        data.append('price', price.value)
        data.append('description', description.value)
        data.append('category', category.value)
        
    try {
        let q = '/admin/product'
        const response = await fetch(apiUrl+q, {
            method: 'POST',
            body: data
        });
        const r = await response.json();
        if (response.ok) {
            onSuccess(r);
        } else {
            onError(r);
        }
    } catch (error) {
        onError(error);
    }
}
export const updateProductById = async (id, productData, onSuccess, onError) => {   
    const { title, image, price, description, category } = productData
        
        const data = new FormData()
        data.append('title', title.value)
        data.append('image', image.files[0])
        data.append('price', price.value)
        data.append('description', description.value)
        data.append('category', category.value)
        
    try {
        let q = '/admin/product/'+id
        const response = await fetch(apiUrl+q, {
            method: 'PUT',
            body: data
        });
        const r = await response.json();
        if (response.ok) {
            onSuccess(r);
        } else {
            onError(r);
        }
    } catch (error) {
        onError(error);
    }
}

export const getProducts = async (onSuccess, onError) => {   
    try {
        let q = '/product'
        const response = await fetch(apiUrl+q, {
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
        
        const response = await fetch(apiUrl + q, {
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
        const response = await fetch(apiUrl + q, {
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