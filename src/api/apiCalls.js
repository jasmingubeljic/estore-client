import { apiUrl } from "../appInfo";

export const logIn = async (email, password, onSuccess, onError) => {
  const data = { email, password };
  try {
    let q = "/login";
    const response = await fetch(apiUrl + q, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // 'Authorization': user.signInUserSession.idToken.jwtToken,
      },
      body: JSON.stringify(data),
    });
    console.log("does this run?");
    const r = await response.json();
    if (response.ok) {
      onSuccess(r.resource);
    } else {
      onError(response);
    }
  } catch (error) {
    onError(error);
  }
};

export const createProduct = async (productForm, onSuccess, onError) => {
  const { title, image, price, isNew, description, category, isHidden } =
    productForm;
  const formData = new FormData();
  formData.append("title", title.value);
  formData.append("image", image.files[0]);
  formData.append("price", price.value);
  formData.append("isNew", isNew.checked);
  formData.append("description", description.value);
  formData.append("category", category.value);
  formData.append("isHidden", isHidden.checked);

  return console.log("formData: ", formData);
  try {
    let q = "/admin/product";
    const response = await fetch(apiUrl + q, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("userAndToken")).token
        }`,
      },
      body: formData,
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
};
export const updateProductById = async (
  id,
  productData,
  onSuccess,
  onError
) => {
  const { title, image, price, isNew, description, category, isHidden } =
    productData;

  const data = new FormData();
  data.append("title", title.value);
  data.append("image", image.files[0]);
  data.append("price", price.value);
  data.append("isNew", isNew.checked);
  data.append("description", description.value);
  data.append("category", category.value);
  data.append("isHidden", isHidden.checked);

  try {
    let q = "/admin/product/" + id;
    const response = await fetch(apiUrl + q, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("userAndToken")).token
        }`,
      },
      body: data,
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
};

export const getProducts = async (onSuccess, onError) => {
  try {
    let q = "/product";
    const response = await fetch(apiUrl + q, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
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
};

export const getProductById = async (id, onSuccess, onError) => {
  try {
    let q = "/product/" + id;

    const response = await fetch(apiUrl + q, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
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
};

export const deleteProduct = async (id, product, onSuccess, onError) => {
  try {
    let q = `/admin/product/${id}`;
    const response = await fetch(apiUrl + q, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("userAndToken")).token
        }`,
      },
      body: JSON.stringify(product),
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
};
