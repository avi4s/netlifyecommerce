import { fetchApi } from "../Api";
import { PRODUCT_ERROR, PRODUCT_SUCCESS } from "../Types";

const ProductSuccess = (res) => {
  return {
    type: PRODUCT_SUCCESS,
    payload: res,
  };
};
const ProductError = (error) => {
  return {
    type: PRODUCT_ERROR,
    error: error,
  };
};
const ProductActionHandler = () => {
  return async (dispatch) => {
    try {
      const jsonData = await fetchApi();
      dispatch(ProductSuccess(jsonData));
    } catch (error) {
      dispatch(ProductError(error.message));
    }
  };
};

export { ProductSuccess, ProductError, ProductActionHandler };
