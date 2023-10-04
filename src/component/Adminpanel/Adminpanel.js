// import React from 'react'
// import './Adminpanel.css';

// function Adminpanel() {

//   return (
//     <div className='box'>
//     <div className='login'>
//       <h2>Login</h2>
//       <form >
//         <div className='Div1'>
//           <label>Email  </label>
//           <input
//             type="email"
//             placeholder="Enter your email"
//           />
//         </div>
//         <div className='Div1'>
//           <label>Password  </label>
//           <input
//             type="password"
//             placeholder="Enter your password"
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//     </div>

//   )
// }

// export default Adminpanel





// import React, { useState } from 'react';
// import './Adminpanel.css';
// import { useNavigate} from 'react-router-dom';

// function Adminpanel() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
  
//     const data = {
//       email: email,
//       password: password,
//     };
  
//     try {
//       const response = await fetch('https://www.mecallapi.com/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data),
//       });
  
//       if (response.ok) {
//         navigate('/home');
//       } else {
//         console.error('Login failed');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

// return (
//   <div className='box'>
//     <div className='login'>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <div className='Div1'>
//           <label>Email</label>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}

//           />
//         </div>
//         <div className='Div1'>
//           <label>Password</label>
//           <input
//             type="password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}

//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   </div>
// );
// }

// export default Adminpanel;





import React, { useState } from 'react';

function Adminpanel() {
  const [isCreateMode, setIsCreateMode] = useState(false);
  const [chapterName, setChapterName] = useState('');
  const [verse, setVerse] = useState('');
  const [summary, setSummary] = useState('');

  const handleCreateClick = () => {
    setIsCreateMode(true);
  };

  const handleUpdateClick = () => {
    //  update logic here
  };

  const handleCreateSubmit = () => {
    // Send the data to the backend for storage here
    const chapterData = {
      chapterName,
      verse,
      summary,
    };

    fetch('/api/createChapter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(chapterData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server if needed
        console.log('Data sent to backend:', data);
        setIsCreateMode(false); // Close the form after successful submission
      })
      .catch((error) => {
        console.error('Error sending data to backend:', error);
      });
  };

  return (
    <div>
      {isCreateMode ? (
        <div className="create-form">
          <h2>Create Chapter</h2>
          <form>
            <label htmlFor="chapterName">Chapter Name:</label>
            <input
              type="text"
              id="chapterName"
              value={chapterName}
              onChange={(e) => setChapterName(e.target.value)}
            />
            <br />
            <label htmlFor="verse">Verse:</label>
            <input
              type="text"
              id="verse"
              value={verse}
              onChange={(e) => setVerse(e.target.value)}
            />
            <br />
            <label htmlFor="summary">Summary:</label>
            <textarea
              id="summary"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
            ></textarea>
          </form>
          <button onClick={handleCreateSubmit}>Submit</button>
        </div>
      ) : (
        <div>
          <button onClick={handleCreateClick}>Create</button>
          <button onClick={handleUpdateClick}>Update</button>
        </div>
      )}
    </div>
  );
}

export default Adminpanel;