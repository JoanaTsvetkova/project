import { useState } from 'react';

export const useForm = (initialValues, onSubmitHandler) => {
   

   

    return {
        values,
        changeHandler,
    };
};