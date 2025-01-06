import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import './App.css'
function App() {
  const[posts,setPosts] = useState([])
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/')
    .then(respose =>{
      if(respose.status ==200){
        setPosts(respose.data)
      }
    })
    .catch(error =>{
      console.log(13, error);
      
    })
  },[])
  return (
    <div>
      {
        posts.length>0 && posts.map((posts,index)=>{
          return(
            <div key={index} className='api-1'>
               <div className="api1__wrapper">
               <h2 className='id'>{posts.id}</h2>
                <h3 className='title'>{posts.title}</h3>
                <p className='body'>{posts.body}</p>
               </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default App

// 4-api
// import axios from 'axios'
// import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'

// function App() {
//   const[poke,setPoke] = useState([])
//   useEffect(()=>{
//     axios.get('https://pokeapi.co/api/v2/pokemon/')
//     .then(responese=>{
//       if(responese.status == 200){
//         setPoke(responese.data.results)
//       }
//       console.log(55,responese);
      
//     })
//     .catch(error=>{
//       console.log(55,error);
      
//     })
//   },[])
//   return (
//     <div>
//       {
//         poke.length>0 && poke.map((poke,index)=>{
//           return(
//             <div>
//                 <div className="img">
//                   <img src={poke.url} alt="" />
//                 </div>
//                 <h3>{poke.name}</h3>
//             </div>
//           )
//         })
//       }
//     </div>
//   )
// }

// export default App

// fORMALAR //
// 1-forma //
// import React, { useState } from 'react';
// import './App.css'
// function App() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [show, setShow] = useState(false);
//   const [data, setData] = useState([]);

//   const validateEmail = (email) => {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
//   };

//   function handleKirish(e) {
//     e.preventDefault();

    // if (!validateEmail(email)) {
    //   alert('Iltimos, to\'g\'ri email manzilini kiriting.');
    //   return;
    // }

//     let user = {
//       email: email,
//       password: password,
//     };

//     let copied = [...data];
//     copied.push(user);
//     setData(copied);

//     console.log(user);
//   }

//   return (
//     <div>
//       <form className='form__wrapper'>
//         <h2>Email va Parolingizni kiriting</h2>
//         <input
//         className='input1'
//           type="email"
//           placeholder="Emailingizni kiriting..."
//           value={email}
//           onChange={(e) => {
//             setEmail(e.target.value);
            
//           }}
//         />
//        <div className="password">
//        <input
//        className='input2'
//           type={show ? 'text' : 'password'}
//           placeholder="Parolingizni kiriting..."
//           value={password}
//           onChange={(e) => {
//             setPassword(e.target.value);
//           }}
//         />
//         <button
//         className='button1'
//           type="button"
//           onClick={() => {
//             setShow(!show);
//           }}
//         >
//           Show
//         </button>
//        </div>
//         <button
//         className='button2'
//         type="submit" onClick={handleKirish}>
//           Kirish
//         </button>
//       </form>
//     </div>
//   );
// }

// export default App;


// 2-forma //

// import React, { useState } from 'react';

// function ContactForm() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [errors, setErrors] = useState({ name: '', email: '', message: '' });

//   const validateForm = () => {
//     let formErrors = { name: '', email: '', message: '' };
//     let isValid = true;

//     if (!name) {
//       formErrors.name = 'Ismingizni kiriting.';
//       isValid = false;
//     }

//     if (!email) {
//       formErrors.email = 'Emailingizni kiriting.';
//       isValid = false;
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       formErrors.email = 'Iltimos, to\'g\'ri email manzilini kiriting.';
//       isValid = false;
//     }

//     if (!message) {
//       formErrors.message = 'Xabaringizni kiriting.';
//       isValid = false;
//     }

//     setErrors(formErrors);
//     return isValid;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       console.log({ name, email, message });
//       alert('Rahmat! Xabaringiz qabul qilindi.');
//       setName('');
//       setEmail('');
//       setMessage('');
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="text"
//             placeholder="Ismingizni kiriting"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
//         </div>
//         <div>
//           <input
//             type="email"
//             placeholder="Emailingizni kiriting"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
//         </div>
//         <div>
//           <textarea
//             placeholder="Xabaringizni kiriting"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//           />
//           {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
//         </div>
//         <button type="submit">Yuborish</button>
//       </form>
//     </div>
//   );
// }

// export default ContactForm;
