import { useState, useRef } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {Categories, Header, FormComponent } from '../components/'
import Footer from '../components/Footer'
import CategoriesPlaceholder from '../components/CategoriesPlaceholder';


const FormPage: NextPage = ({}) => {
    const [userMessage, setUserMessage] = useState('')

    /* This "fields" variable is an array of objects, and must follow the established list, as well as the established syntax. 
    For text fields: {type: 'text', name: 'your text input name', displayLabel: 'Your display label', required: true/false, errorMessage: 'Your desired error message', length: your desired length}.
        All fields will accept text/strings except required(boolean) and length(number).
    For radio form elements: {type: 'radio', name: 'Your radio name', displayLabel: 'Your display label', options: ['Option 1','Option 2','Option 3'], required: false, errorMessage: 'Your error message'}.
        All fields will accpet text/strings except required(boolean) and options(takes a single array of quoted values (comma delimited) to be looped over/displayed as radio button options). 
    For select lists:  {type: 'select', name: 'Your list name', displayLabel: 'Your display label', options: ['option1','option2','option3','option4'], required: true, errorMessage: 'Your error message'}. 
        All fields will accept text/strings except the options(takes a single array of quoted values (comma delimited) to be looped over/displayed as select menu options).
    For check box fields: {type: 'checkbox', name: 'Your checkbox name', displayLabel: 'Your label name', options: ['blue','red','green','black'], required: true, errorMessage: 'Your error message'}.
          All fields will accept text/strings except the options(takes a single array of quoted values (comma delimited) to be looped over/displayed as checkbox menu options).       
    */  
      const fields = [{type: 'text', name: 'name', displayLabel: 'Name', required: true, errorMessage: 'Please correct your error', length: 50 },
      {type: 'radio', name: 'mf', displayLabel: 'Pets', options: ['dog','cat','goldfish'], required: false, errorMessage: 'Please select M or F', radioOptions:'[M],[F]' },
      {type: 'select', name: 'ampm', displayLabel: 'Select an option', options: ['option1','option2','option3','option4'], required: true, errorMessage: 'Please select an option'},
      {type: 'checkbox', name: 'chkbox', displayLabel: 'Colors', options: ['blue','red','green','black'], required: true, errorMessage: 'Please select a color'}
    ];

      //Text will appear on the submit button
      const submitLabel = 'Submit Form';

      //Copy and paste your desired icon from iconify
      const submitButtonIcon = '';

      //This text will appear on your form's title
      const formTitle = 'Form Title Test';

      //This method is where your submit action goes when user clicks submit button
      const onSubmitValue = 'onSubmitForm()';

  return (
    <div className="container px-10 mx-auto mb-8">

      <Head>
        <title>cfsnap.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='grid grid-cols-1 gap-12 md:grid-cols-12'>
        <div className='col-span-1 sm:col-span-8'>
            
          <div className='p-0 pb-12 mb-8 bg-white rounded-lg shadow-lg md:p-4'> 
            <h3 className="text-3xl font-semibold cursor-pointer">Form Component Demo</h3>
          </div>

          <div className='p-0 pb-12 mb-8 bg-white rounded-lg shadow-lg md:p-4'>
          <div className="container">
            <div className="showcase-form card">
                <form>
                <div className='grid grid-cols-2 pb-2'>    {/* style={{border: 'thin solid gray'}} */}
                    <div className='pr-3 text-right'>
                        <label htmlFor="type">Choose a field: </label>
                    </div>
                    <div className='pl-3'>
                        <select name="type" id="type" style={{border: 'thin solid silver', borderRadius: '5px'}}>
                            <option value="text">Radio</option>
                            <option value="radio">Text</option>
                            <option value="select">Select</option>
                            <option value="checkbox">Checkbox</option>
                        </select>
                    </div>
                </div>    
                <div className='grid grid-cols-2 pb-2'>
                    <div className='pr-3 text-right'>
                        <label htmlFor="displayLabel">Label: </label>
                    </div>
                    <div className='pl-3'>
                        <input type="text" id="displayLabel" name="displayLabel" style={{border: 'thin solid silver', borderRadius: '5px'}} />
                    </div>
                </div>
                <div className='grid grid-cols-2 pb-2'>
                    <div className='pr-3 text-right'>
                        <label htmlFor="name">Name: </label>
                    </div>
                    <div className='pl-3'>
                        <input type="text" id="name" name="name" style={{border: 'thin solid silver', borderRadius: '5px'}} />
                    </div>
                </div>
                <div className='grid grid-cols-2 pb-2'>
                    <div className='pr-3 text-right'>
                            Required: 
                        </div>
                        <div className='pl-3'>
                            <input type="radio" id="Y" name="required" value="Y" /><label htmlFor="Y">Y &nbsp; </label>
                            <input type="radio" id="N" name="required" value="N" /><label htmlFor="N">N</label>
                        </div>
                </div>
                <div className='grid grid-cols-2 pb-2'>        
                    <div className='pr-3 text-right'>
                            <label htmlFor="options">Options: </label>
                        </div>
                        <div className='pl-3'>
                            <input type="text" id="options" name="options" style={{border: 'thin solid silver', borderRadius: '5px'}} /><br /><br />
                        </div>
                </div>
                <div className='grid place-items-center'>
                        <button 
                            className='w-1/5'
                            type="button"
                            style={{borderRadius: '5px', backgroundColor: 'teal', color: 'white', padding: '5px'}}>Add Form Field</button>
                </div>            
                   
                    {/* <div>
                    Zoo Animals:<br />&lt;div&gt;<br />&lt;input type="radio" id="elephant" name="zooAnimals"  value="elephant"/&gt;&lt;label htmlFor="elephant"&gt; &lt;/label&gt;<br />&lt;/div&gt;<br /><br />
                    &lt;div&gt;<br />&lt;input type="radio" id="giraffe" name="zooAnimals" value="giraffe"/&gt;&lt;label htmlFor="giraffe"&gt; &lt;/label&gt;&lt;/div&gt;<br /><br />
                    &lt;div&gt;<br />&lt;input type="radio" id="tiger" name="zooAnimals"  value="tiger"/&gt;&lt;label htmlFor="tiger"&gt; &lt;/label&gt;&lt;/div&gt;<br /><br />
                    </div> */}
                
                </form>
               

                <div className='grid grid-cols-2 pt-4 pb-2 text-slate-300'>        
                    <div className='pr-3 text-right'>
                        <label htmlFor="options">Colors: </label>
                    </div>
                    <div className='pl-3'>
                        <select name="type" id="type" style={{border: 'thin solid silver', borderRadius: '5px'}}>
                            <option value="text">Cyan</option>
                            <option value="radio">Magenta</option>
                            <option value="select">Yellow</option>
                            <option value="checkbox">Black</option>
                        </select>
                    </div>
                </div> 
                <div className='grid grid-cols-1 pt-4 pb-2 text-slate-300'> 
                    &lt;div className='grid grid-cols-2 pt-4 pb-2 text-slate-300'&gt;        
                    &lt;div className='pr-3 text-right'&gt;
                    &lt;label htmlFor="options"&gt;Colors: &lt;/label&gt;
                        &lt;/div&gt;
                        &lt;div className='pl-3'&gt;
                        &lt;select name="type" id="type" style=border: 'thin solid silver', borderRadius: '5px'&gt;
                        &lt;option value="text"&gt;Cyan&lt;/option&gt;
                        &lt;option value="radio"&gt;Magenta&lt;/option&gt;
                        &lt;option value="select"&gt;Yellow&lt;/option&gt;
                        &lt;&lt;option value="checkbox"&gt;Black&lt;/option&gt;
                        &lt;/select&gt;
                    &lt;/div&gt;
                    &lt;/div&gt; 
                </div>
                    {userMessage && <h2 className='p-2 text-center'>{userMessage}</h2>}
                    <FormComponent 
                        fields = {fields}
                        submitLabel = {submitLabel}
                        submitButtonIcon = {submitButtonIcon}
                        formTitle = {formTitle}
                        onSubmitValue = {onSubmitValue}/> 
                </div>
            </div> 
          </div>
          
        </div>
        <div className='col-span-1 sm:col-span-4'>
            <div className='relative sm:sticky top-8'>
              <CategoriesPlaceholder />
              {/* <PostWidget /> */}
            </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default FormPage
