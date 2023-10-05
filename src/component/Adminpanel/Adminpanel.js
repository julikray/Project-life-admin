import React, { useState } from 'react';
import './Adminpanel.css'

function Adminpanel() {
  const [isCreateMode, setIsCreateMode] = useState(false);
  const [chapterCount,setChapterCount] = useState('');
  const [chapterName, setChapterName] = useState('');
  const [verse, setVerse] = useState('');
  const [summary, setSummary] = useState('');
  const [verseno, setVerseno] = useState('');
  const [isUpdateMode, setIsUpdateMode] = useState(false);

  const handleCreateClick = () => {
    setIsCreateMode(true);
    setIsUpdateMode(false)
  };

  const handleUpdateClick = () => {
    setIsCreateMode(false);
    setIsUpdateMode(true)
    //  update logic here
  };

  const handleCreateSubmit = () => {
    // Send the data to the backend for storage here
 

    fetch('/api/create-chapter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(chapterCount,chapterName , verse , summary),
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

  const handleUpdateSubmit = () => {
        // Send the updated data to the backend for storage here
    
        fetch('/api/update-chapter', {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({chapterCount, chapterName , verse , summary}),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('Data updated on backend:', data);
            setIsUpdateMode(false); 
          })
          .catch((error) => {
            console.error('Error updating data on backend:', error);
          });
      };
    
     
  return (
    <div className='bigbox'>
     
      {isCreateMode || isUpdateMode ? (
        <div className="create-form">
          <h2>{isCreateMode ? 'Create Chapter' : 'Update Chapter'}</h2>
          <form>
          <label htmlFor="chapterCount">Chapter No:</label>
            <input
              type="text"
              id="chapterCount"
              value={chapterCount}
              onChange={(e) => setChapterCount(e.target.value)}
            />
            <br />
            <label htmlFor="chapterName">Chapter Name:</label>
            <input
              type="text"
              id="chapterName"
              value={chapterName}
              onChange={(e) => setChapterName(e.target.value)}
            />
            <br />
            <label htmlFor="verseno">Verse No:</label>
            <input
              type="text"
              id="verseno"
              value={verseno}
              onChange={(e) => setVerseno(e.target.value)}
            />
            <br />
            <label htmlFor="verse">Verse :</label>
            <textarea
              id="verse"
              value={verse}
              onChange={(e) => setVerse(e.target.value)}
            ></textarea>
            <br />
           
            <label htmlFor="summary">Summary :</label>
            <textarea
              id="summary"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
            ></textarea>
          </form>
          <button
            onClick={isCreateMode ? handleCreateSubmit : handleUpdateSubmit}
          >
            {isCreateMode ? 'Submit' : 'Update'}
          </button>
        </div>
      ) : (
        <div className='buttondiv'>
           <h1>Welcome to Geeta Adminpanel</h1>
          
          <button onClick={handleCreateClick}>Create</button>
          <button onClick={handleUpdateClick}>Update</button>
          
        </div>
      )}
    </div>
  );
}

export default Adminpanel;

