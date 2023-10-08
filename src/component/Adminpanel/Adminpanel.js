// import React, { useState } from 'react';
// import './Adminpanel.css'

// function Adminpanel() {
//   const [isCreateMode, setIsCreateMode] = useState(false);
//   const [chapterCount, setChapterCount] = useState('');
//   const [chapterName, setChapterName] = useState('');
//   const [verse, setVerse] = useState('');
//   const [summary, setSummary] = useState('');
//   const [isUpdateMode, setIsUpdateMode] = useState(false);

//   const handleCreateClick = () => {
//     setIsCreateMode(true);
//     setIsUpdateMode(false)
//   };

//   const handleUpdateClick = () => {
//     setIsCreateMode(false);
//     setIsUpdateMode(true)
//     //  update logic here
//   };



//   const handleCreateSubmit = () => {
//     // Send the data to the backend for storage here


//     fetch('/api/create-chapter', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(chapterCount, chapterName, verse, summary),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         // Handle the response from the server if needed
//         console.log('Data sent to backend:', data);
//         setIsCreateMode(false); // Close the form after successful submission
//       })
//       .catch((error) => {
//         console.error('Error sending data to backend:', error);
//       });
//   };

//   const handleUpdateSubmit = () => {
//     // Send the updated data to the backend for storage here

//     fetch('/api/update-chapter', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ chapterCount, chapterName, verse, summary }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('Data updated on backend:', data);
//         setIsUpdateMode(false);
//       })
//       .catch((error) => {
//         console.error('Error updating data on backend:', error);
//       });
//   };


//   return (
//     <div className='bigbox'>

//       {isCreateMode || isUpdateMode ? (
//         <div className="create-form">
//           <h2>{isCreateMode ? 'Create Chapter' : 'Update Chapter'}</h2>
//           <form>
//             <label htmlFor="chapterCount">Chapter No:</label>
//             <input
//               type="text"
//               id="chapterCount"
//               value={chapterCount}
//               onChange={(e) => setChapterCount(e.target.value)}
//             />
//             <br />
//             <label htmlFor="chapterName">Chapter Name:</label>
//             <input
//               type="text"
//               id="chapterName"
//               value={chapterName}
//               onChange={(e) => setChapterName(e.target.value)}
//             />
//             <br />
//             <label htmlFor="verse">Verse :</label>
//             <textarea
//               id="verse"
//               value={verse}
//               onChange={(e) => setVerse(e.target.value)}
//             ></textarea>
//             <br />
//             <br />
//             <label htmlFor="summaryimg">Summary Image :</label>
//             <input
//               type="text"
//               id="summaryimg"
//               value={chapterName}
//               onChange={(e) => setChapterName(e.target.value)}
//             />

//             <label htmlFor="summary">Summary :</label>
//             <textarea
//               id="summary"
//               value={summary}
//               onChange={(e) => setSummary(e.target.value)}
//             ></textarea>

//           </form>
//           <button
//             onClick={isCreateMode ? handleCreateSubmit : handleUpdateSubmit}
//           >
//             {isCreateMode ? 'Submit' : 'Update'}
//           </button>
//         </div>
//       ) : (
//         <div className='buttondiv'>
//           <h1>Welcome to Geeta Adminpanel</h1>

//           <button onClick={handleCreateClick}>Create</button>
//           <button onClick={handleUpdateClick}>Update</button>

//         </div>
//       )}
//     </div>
//   );
// }

// export default Adminpanel;







import React, { useState, useEffect } from 'react';
import './Adminpanel.css'

function Adminpanel() {
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [createData, setCreateData] = useState({
    chapterno: '',
    chaptername: '',
    photoUrl: '',
    verse: '',
    summary: '',
    verses: [],
  });




  const toggleCreateModal = () => {
    setShowCreateModal(!showCreateModal);
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setCreateData({
      ...createData,
      [id]: value,
    });
  };

  const handleAddVerse = () => {
    const newVerse = createData.verse;
    if (newVerse.trim() !== '') {
      setCreateData({
        ...createData,
        verses: [...createData.verses, newVerse],
        verse: '',
      });
    }
  };

  const handleCreate = (event) => {
    event.preventDefault();

    // send it to a server or perform any other required action)

    console.log(createData);

    setCreateData({
      chapterno: '',
      chaptername: '',
      photoUrl: '',
      verse: '',
      summary: '',
      verses: [],
    });

    setShowCreateModal(false);
  };


  const [chapterNumbers, setChapterNumbers] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState('');
  const [chapterDetails, setChapterDetails] = useState({
    chaptername: '',
    verse: '',
    summary: '',
  });

  useEffect(() => {
    // Simulated data for chapter numbers
    const chapters = Array.from({ length: 18 }, (_, index) => (index + 1).toString());
    setChapterNumbers(chapters);
  }, []);

  const handleUpdate = () => {
    // Handle update logic here (e.g., send updated data to a server or perform any other required action)

    console.log('Updated Data:', createData);

    // Reset createData state after updating


    // Close the update form
    setShowUpdateForm(false);
  };
  const fetchChapterDetails = (selectedChapter) => {
    // Simulated data fetching, replace with actual API call
    const chapterData = {
      chaptername: `Chapter ${selectedChapter} Name`,
      verse: `Verse ${selectedChapter}`,
      summary: `Summary of Chapter ${selectedChapter}`,
    };
    setChapterDetails(chapterData);
  };
  const toggleUpdateForm = () => {
    setShowUpdateForm(!showUpdateForm);
    // Close the create modal when switching to the update form
    setShowCreateModal(false);
  };

  const handleVerseClick = (verseNumber) => {
    // Fetch and display a specific verse when clicked
    const verseData = {
      chaptername: createData.chaptername, // Replace with your actual data source
      verse: `Verse ${verseNumber}`,
      summary: `Summary of Verse ${verseNumber}`,
    };
    setChapterDetails(verseData);
  };

  return (
    <div>
      <div className='buttondiv'>
        <h1>Welcome to Geeta Adminpanel</h1>
        <button onClick={toggleCreateModal}>Create</button>
        <button onClick={toggleUpdateForm} >Update</button>
      </div>

      {showCreateModal && (

        <div className='create-form'>
          <h2>Create Form</h2>
          <form onSubmit={handleCreate}>
            <div>
              <label htmlFor='chapterno'>Chapter No:</label>
              <input
                type='text'
                id='chapterno'
                value={createData.chapterno}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor='chaptername'>Chapter Name:</label>
              <input
                type='text'
                id='chaptername'
                value={createData.chaptername}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor='photoUrl'>Summary Image :</label>
              <input
                type='text'
                id='photoUrl'
                value={createData.photoUrl}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor='verse'>Verse:</label>
              <input
                type='text'
                id='verse'
                value={createData.verse}
                onChange={handleInputChange}
              />
              <button type='button' onClick={handleAddVerse}>
                Add Verse
              </button>
            </div>
            <div>
              <label htmlFor='summary'>Summary:</label>
              <input
                type='text'
                id='summary'
                value={createData.summary}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <strong>Verses:</strong>
              <ul>
                {createData.verses.map((verse, index) => (
                  <li key={index}>{verse}</li>
                ))}
              </ul>
            </div>
            <button type='submit'>Create</button>
          </form>
        </div>

      )}

      {showUpdateForm && (

        <div className='create-form '>
          <h2>Update Form</h2>
          <form onSubmit={handleUpdate}>
            <div>
              <label htmlFor='chapterno'>Chapter No:</label>
              <select
                id='chapterno'
                value={selectedChapter}
                onChange={(e) => {
                  setSelectedChapter(e.target.value);
                  fetchChapterDetails(e.target.value);
                }}
              >
                <option value=''>Select a Chapter</option>
                {chapterNumbers.map((chapterNumber) => (
                  <option key={chapterNumber} value={chapterNumber}>
                    Chapter {chapterNumber}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor='chaptername'>Chapter Name:</label>
              <input
                type='text'
                id='chaptername'
                value={chapterDetails.chaptername}
                readOnly
              />
            </div>
            <div>
              <label htmlFor='verserno'>Verse No:</label>
              <select
                id='verseno'
              // value={selectedverse}
              // onChange={(e) => {
              //   setSelectedverse(e.target.value);
              //   fetchverseDetails(e.target.value);
              // }}
              >
                <option value=''>Select a Chapter</option>
                {chapterNumbers.map((chapterNumber) => (
                  <option key={chapterNumber} value={chapterNumber}>
                    Chapter {chapterNumber}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor='verse'>Verse:</label>
              <input
                type='text'
                id='verse'
                value={chapterDetails.verse}
                readOnly
              />
            </div>
            <div>
              <label htmlFor='summary'>Summary:</label>
              <input
                type='text'
                id='summary'
                value={chapterDetails.summary}
                readOnly
              />
            </div>
            <button type='submit'>Update</button>
          </form>

        </div>

      )}




    </div>
  )
}



export default Adminpanel;




