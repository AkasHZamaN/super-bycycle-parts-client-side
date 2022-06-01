import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='mx-12 my-12'>
                <h1 className='font-bold'>How will you improve the performance of a React Application?</h1>
                <small>1. Keeping component state local where necessary. <br />
                       2. Memoizing React components to prevent unnecessary re-renders. <br />
                       3. Code-splitting in React using dynamic import() <br />
                       4. Windowing or list virtualization in React. <br />
                       5. Lazy loading images in React.</small> <br />
            </div>
            <div className='mx-12 my-12'>
                <h1 className='font-bold'>What are the different ways to manage a state in a React application?</h1>
                <small>1. The id of the current item, being viewed. <br />
                       2. Filter parameters. <br />
                       3. Pagination offset and limit. <br />
                       4. Sorting data. <br />
                </small>
            </div>
            <div className='mx-12 my-12 w-4/5'>
                <h1 className='font-bold'>How does prototypical inheritance work?</h1>
                <small>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                </small>
            </div>
            <div className='mx-12 my-12 w-4/5'>
                <h1 className='font-bold'>How will you implement a search to find products by name?</h1>
                <small>Firstly, we import useState from react . Then, we import the Scroll and SearchList components. Next, in the Search function, we use the useState hook to initialise the value of the searchField state with useState("") (an empty string). After this, we use the filter function on the details list received from the parent.
                </small>
            </div>
            <div className='mx-12 my-12 w-4/5'>
                <h1 className='font-bold'>What is a unit test? Why should write unit tests?</h1>
                <small>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                </small>
            </div>
        </div>
    );
};

export default Blog;