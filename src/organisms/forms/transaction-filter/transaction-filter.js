import React from 'react';
import Form from '../../../molecules/form/form';
const TransactionFilter = (props) => {
    const {
        className,
        ...otherProps
    } = props
    
    const TransactionFilterInputs = [
        {'type' : 'dropdown', 'name': 'filtertransactionitem','placeholder' : 'Select transaction Item' },
        {'type' : 'dropdown', 'name': 'filtertransactiontype','placeholder' : 'Select transaction type' },
        {'type' : 'date', 'name': 'filterdatefrom','placeholder' : 'Select transaction date' },
        {'type' : 'date', 'name': 'filterdateto','placeholder' : 'Select transaction date' }
    ];

    const getFormData = (formData) =>{
        console.log('formdata',formData);   
        const data = JSON.stringify(formData);
        console.log('data',data);
    }
    return (
        <>
            <Form {...otherProps} 
            formInputs = {TransactionFilterInputs} 
            buttonText = 'Filter' 
            clearBtnText = 'Clear'
            getFormData = {getFormData}/>
        </>
    );
};

export default TransactionFilter;