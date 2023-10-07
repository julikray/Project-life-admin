import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

const CreateChapter = () => {
  const [chapNO, setChapNO] = useState("");
  const [chapName, setChapName] = useState("");
  const [verse, setVerse] = useState("");
  const [english, setEnglish] = useState("");
  const [explanation, setExplanation] = useState("");
  const [summary, setSummary] = useState("");
  const [summaryImg, setSummaryImg] = useState("");
  const [arrVR, setArrVR] = useState([]);

  const addVerse = async (e) => {
    e.preventDefault();
   await setArrVR((oldarray) => [
      ...oldarray,
      {
        verse,
        english,
        explanation,
      },
    ]);
    setVerse('')
    setEnglish('')
    setExplanation('')
    toast.success('Added verse successfully', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };
  const handleSubmitt = (e) => {
    try {
      fetch("https://pink-extinct-basket-clam.cyclic.app/api/create-chapter", {
        method: "post",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          chapterCount: chapNO,
          chapterName: chapName,
          verses: arrVR,
          summary: summary,
          summaryImage: summaryImg,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setArrVR([])
            toast.success(data.message, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
              setChapNO('')
              setChapName('')
              setSummary('')
              setSummaryImg('')
          }
          else{
            toast.error(data, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
              setChapNO('')
              setChapName('')
              setSummary('')
              setSummaryImg('')
          }
        });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
    <ToastContainer/>
      <div className="box">
        <div className="login">
          <h2>Create-Chapter</h2>
          <form className="LoginForm">
            <div className="Div1">
              <label>Chapter Number</label>
              <input
                type="text"
                required
                value={chapNO}
                onChange={(e) => setChapNO(e.target.value)}
              />
            </div>
            <div className="Div1">
              <label>Chapter Name</label>
              <input
                type="text"
                required
                value={chapName}
                onChange={(e) => setChapName(e.target.value)}
              />
            </div>

            <h2>Verses and Verses Detailes</h2>
              <div className="Div1">
                <label>Verse</label>
                <input
                  type="text"
                  required
                  value={verse}
                  onChange={(e) => setVerse(e.target.value)}
                />
              </div>
              <div className="Div1">
                <label>English</label>
                <input
                  type="text"
                  required
                  value={english}
                  onChange={(e) => setEnglish(e.target.value)}
                />
              </div>
              <div className="Div1">
                <label>Explaination</label>
                <input
                  type="text"
                  required
                  value={explanation}
                  onChange={(e) => setExplanation(e.target.value)}
                />
              </div>
            <button onClick={addVerse}>Add</button>
            <div className="Div1">
              <label>Summary</label>
              <input
                type="text"
                required
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
              />
            </div>
            <div className="Div1">
              <label>Summary Image </label>
              <input
                type="text"
                required
                value={summaryImg}
                onChange={(e) => setSummaryImg(e.target.value)}
              />
            </div>
          </form>
          <button onClick={handleSubmitt}>Submit</button>
        </div>
      </div>
    </>
  );
};

export default CreateChapter;
