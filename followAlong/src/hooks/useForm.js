import {useLocalStorage} from './useLocalStorage';

//this rn same as useState
export const useForm = (initialValues) => {
    const [values, setValues] = useLocalStorage('form Values',
    initialValues);

    const handleChanges = e => {
        console.log('You are editing this field:', e.target.name);
        setValues({
        ...values,
        [e.target.name]: e.target.value
        });
    };

    const clearForm = e => {
        e.preventDefault();
        setValues(initialValues);
      };

    return [values, handleChanges, clearForm]
}