import {useContext, useEffect, useState} from 'react';
import Link from 'next/link';

const Header = () => {
    const [categories, setCategories] = useState([]);

    return (
      <div className='container px-10 mx-auto mb-8'>
        <div className='inline-block w-full py-8 border-b border-blue-900'>
            <div className='block md:float-left '>
                <Link href='/'>
                    <span className='text-5xl font-bold text-blue-900 cursor-pointer'>
                        cfsnap
                    </span>
                </Link>
            </div>
            <div className='block md:float-left md:contents'>
                {/* {categories.map((category) => (
                    <Link key={category.name} href={`/category/${category.slug}`}>
                       <span className='mt-2 ml-4 font-semibold text-white align-middle cursor-pointer md:float-right'>
                            {category.name}
                        </span> 
                    </Link>
                ))} */}
               
                    <span className='mt-2 ml-4 font-semibold text-blue-900 align-middle cursor-pointer md:float-right'>
                        Contact
                    </span> 
                
                    <span className='mt-2 ml-4 font-semibold text-blue-900 align-middle cursor-pointer md:float-right'>
                        Portfolio
                    </span> 
                
                    <span className='mt-2 ml-4 font-semibold text-blue-900 align-middle cursor-pointer md:float-right'>
                        CSS
                    </span> 
                
                    <span className='mt-2 ml-4 font-semibold text-blue-900 align-middle cursor-pointer md:float-right'>
                        Next.js
                    </span> 
                
                    <span className='mt-2 ml-4 font-semibold text-blue-900 align-middle cursor-pointer md:float-right'>
                        React
                    </span> 
             
                
                    <span className='mt-2 ml-4 font-semibold text-blue-900 align-middle cursor-pointer md:float-right'>
                    Blog
                    </span> 
             
            </div>
        </div>
      </div>
    )
  }
  
  export default Header

  //drop-shadow-lg shadow-black  style={{ color: 'white', 'WebkitTextStrokeWidth': .2, 'WebkitTextStrokeColor': 'navy' }}