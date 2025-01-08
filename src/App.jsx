// import React from 'react'
// import { useState } from 'react'
// import { useEffect } from 'react'
// import axios from 'axios'
// import './App.css'
// function App() {
//   const[posts,setPosts] = useState([])
//   useEffect(()=>{
//     axios.get('https://jsonplaceholder.typicode.com/posts/')
//     .then(respose =>{
//       if(respose.status ==200){
//         setPosts(respose.data)
//       }
//     })
//     .catch(error =>{
//       console.log(13, error);
      
//     })
//   },[])
//   return (
//     <div>
//       {
//         posts.length>0 && posts.map((posts,index)=>{
//           return(
//             <div key={index} className='api-1'>
//                <div className="api1__wrapper">
//                <h2 className='id'>{posts.id}</h2>
//                 <h3 className='title'>{posts.title}</h3>
//                 <p className='body'>{posts.body}</p>
//                </div>
//             </div>
//           )
//         })
//       }
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react';
// import axios from 'axios';
// import './App.css'

// function App() {
//   const [city, setCity] = useState('');
//   const [weather, setWeather] = useState(null);
//   const [error, setError] = useState('');

//   const apiKey = 'd998e69f98b0ad820bd8f43273d8701f'; 

//   const getWeather = async () => {
//     try {
//       const response = await axios.get(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=uz`
//       );
//       setWeather(response.data);
//       setError('');
//     } catch (err) {
//       setError('Shahar topilmadi yoki xato yuz berdi.');
//       setWeather(null);
//     }
//   };

//   return (
//     <div>
//       <h1>Ob-havo ma'lumotlari</h1>
//       <input
//         type="text"
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//         placeholder="Shahar nomini kiriting"
//       />
//       <button onClick={getWeather}>Ob-havoni ko'rsatish</button>
//       {error && <p>{error}</p>}
//       {weather && (
//         <div>
//           <h2>{weather.name} uchun ob-havo</h2>
//           <p>Harorat: {weather.main.temp}°C</p>
//           <p>Holati: {weather.weather[0].description}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;



// 4-api
import React, { useState, useEffect } from 'react';
import axios from 'axios';4
import './App.css'

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    loadPokemon();
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const loadPokemon = async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`
      );
      const newPokemon = await Promise.all(
        response.data.results.map(async (p) => {
          const pokeDetails = await axios.get(p.url);
          return {
            name: p.name,
            image: pokeDetails.data.sprites.front_default,
          };
        })
      );
      setPokemon((prev) => [...prev, ...newPokemon]);
      setOffset((prev) => prev + 20);
      if (response.data.next === null) setHasMore(false);
    } catch (error) {
      console.error('Error fetching Pokémon:', error);
    }
    setLoading(false);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    )
      return;
    loadPokemon();
  };

  return (
    <div>
      <h1>Pokémon List</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {pokemon.map((p, index) => (
          <div key={index} style={{ margin: '10px', textAlign: 'center' }}>
            <img src={p.image} alt={p.name} />
            <p>{p.name}</p>
          </div>
        ))}
      </div>
      {loading && <p>Loading...</p>}
      {!hasMore && <p>No more Pokémon to load.</p>}
    </div>
  );
};

export default PokemonList;


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



// import React, { useState } from "react";
// import './App.css'

// const SignUpForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//   });

//   const [passwordError, setPasswordError] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));

//     // Parol tekshiruvi
//     if (name === "password") {
//       if (value.length < 8) {
//         setPasswordError("Parol kamida 8 ta belgidan iborat bo'lishi kerak.");
//       } else {
//         setPasswordError("");
//       }
//     }
//   };

//   const isFormValid =
//     formData.name &&
//     formData.email &&
//     formData.phone &&
//     formData.password.length >= 8;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Ro'yxatdan o'tdingiz!");
//   };

//   return (
//     <div className="max-w-md mx-auto p-4 border rounded shadow-lg">
//       <h2 className="text-2xl font-bold mb-4">Ro'yxatdan o'tish</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Ism:</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             placeholder="Ismingizni kiriting"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             placeholder="Emailingizni kiriting"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Telefon raqami:</label>
//           <input
//             type="tel"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             placeholder="Telefon raqamingizni kiriting"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Parol:</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             placeholder="Parolingizni kiriting"
//             required
//           />
//           {passwordError && (
//             <p className="text-red-500 text-sm mt-1">{passwordError}</p>
//           )}
//         </div>
//         <button
//           type="submit"
//           disabled={!isFormValid}
//           className={`w-full p-2 rounded ${
//             isFormValid
//               ? "bg-blue-500 text-white"
//               : "bg-gray-300 text-gray-500 cursor-not-allowed"
//           }`}
//         >
//           Ro'yxatdan o'tish
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SignUpForm;
