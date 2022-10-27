import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Header } from '../components/'
import Footer from '../components/Footer'
import CategoriesPlaceholder from '../components/CategoriesPlaceholder';


const Home: NextPage = () => {
  return (
    <div className="container px-10 mx-auto mb-8">

      <Head>
        <title>cfsnap.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='grid grid-cols-1 gap-12 md:grid-cols-12'>
        <div className='col-span-1 sm:col-span-8'>
          <div className='p-0 pb-12 mb-8 bg-white rounded-lg shadow-lg md:p-4'>
            <div className='grid grid-cols-1 gap-4 align-middle'>
              <div className="inline-block p-0 pb-0 mb-1 align-middle bg-white rounded-lg shadow-lg sm:p-2 ">
                  <p className='p-2 pb-0 mb-0 font-semibold text-center text-md md:text-2xl sm:align-middle'>Dynamic form exercise for Endeavor</p>
                  <p className='pt-4 text-center text-md md:text-2xl sm:align-middle'>
                  <Link href={`/form`}>
                    Go to Form
                  </Link> 
                  </p>
              </div>

              <div className="inline-block p-0 pb-0 mb-1 align-middle bg-white rounded-lg shadow-lg sm:p-2 ">
                  <p className='p-2 pb-0 mb-0 font-semibold text-center text-md md:text-2xl sm:align-middle'>About:</p>
                  <p className='pt-4'>
                  As requested the following code has been furnished to comply with the interview process for Endeavor Business Media. All of the other site links have been disabled.<br /><br />
                  There are 2 principal files: <br />&middot; /pages/form.tsx <br /> &middot; /components/FormComponent.tsx<br /><br />

                  I'd like to request an opportunity to review/demo this code. Please call to arrange a convenient time:<br /> Rich 303-913-7338 <br /><br />

                  The instructions I received: <br />
                  <p className='text-gray-500'>
                  Hello Rich! Good talking with you today! Here is the exercise I promised. Feel free to build it in Vue or React. The main things I'm concerned with are following requirements, clean code, and proper use of Vue/React elements. Please let me know if you have any questions. Obviously the sooner you get something to me the better, but I expect it to take some time to work it in.<br /><br />
 
 Task: Create a WebForm component<br /><br />
  
 The task here is to build the start of a component suite that can be used to dynamically create forms for use on a site. We'll start with a smaller set of requirements but build with the idea that it will likely expand. The general idea is to build a WebForm component that can render a dynamic form and then trigger custom actions on submit based on the component that's including it. Feel free to break any pieces into subcomponents as you see fit, but the entry point will be the WebForm. Also feel free to do what you want with aesthetics to make it look clean and nice. The deliverable is a zip file, github url, or some other means by which I can easily run the app and drop in various uses of the component to test.<br /><br />
  
 WebForm Requirements:<br />
 Needs to initially support any of the following field types<br />
 Text input<br />
 Select box<br />
 Radios/Checkboxes<br />
 Renders fields based on a passed in prop of "fields" that tells it what fields to render, which includes info on field type, display label, and if the field is required or not.<br /><br />
  
 If a required field isn't filled out, it should present a friendly error and display aesthetic that doesn't just rely on html5 requirements indicators. You can decide what this is.<br /><br />
  
 Allows specifying what the submit label text is. Also allows specifying an icon from the free iconify library. If the prop is supplied, it places the icon next to the label inside the submit button for a more enhanced submit button look.<br />
 Allows specifying a form title, that would be rendered consistently on all forms. You can again choose what this looks like.<br /><br />
  
 On submit, the form should execute what the caller requested via @submit handler passed in<br /><br />
                  </p>
                  </p>
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

export default Home

