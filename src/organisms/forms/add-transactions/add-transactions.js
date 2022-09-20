import React from 'react';
import Form from '../../../molecules/form/form';
const AddTransactions = (props) => {
    const {
        className,
        ...otherProps
    } = props

    const transactionTypeOptions = [
        {'name' :'Negative / Expense / Borrow' , 'value': 'negative'},
        {'name' :'Positive / Income / Return' , 'value': 'positive'}
    ];
    
    const addTransactionsInputs = [
        {'type' : 'dropdown', 'name': 'addtransactionitem','placeholder' : 'Select Item' },
        {'type' : 'dropdown', 'name': 'addtransactiontype','placeholder' : 'Select type', 'listOptions' : transactionTypeOptions },
        {'type' : 'date', 'name': 'addtransactiondate','placeholder' : 'Select transaction date' },
        {'type' : 'number', 'name': 'addtransactionamount','placeholder' : 'Enter amount' },
        {'type' : 'textarea', 'name': 'addtransactioncomment','placeholder' : 'Enter Comment' }
    ];

    const getFormData = (formData) =>{
        console.log('formdata',formData);   
        const data = JSON.stringify(formData);
        console.log('data',data);
    }
    return (
        <>
            <Form {...otherProps}
             formInputs = {addTransactionsInputs}
              buttonText = 'Submit'
              clearBtnText = 'Clear' getFormData = {getFormData}/>
        </>
    );
};

export default AddTransactions;