import React, { useEffect, useState } from "react";
import { ToastContainer , toast } from "react-toastify";
const UpdateChapter = () => {
  useEffect(() => {
    try {
      fetch("https://pink-extinct-basket-clam.cyclic.app/api/chapter", {
        method: "get",
        headers: { "Content-type": "application/json" },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            console.log(data.success, data.data);
            setRecivedData(data.data);
          }
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const [chapNO, setChapNO] = useState();
  const [chapName, setChapName] = useState("");
  const [verse, setVerse] = useState("");
  const [english, setEnglish] = useState("");
  const [explanation, setExplanation] = useState("");
  const [summary, setSummary] = useState("");
  const [summaryImg, setSummaryImg] = useState("");
  const [recivedData, setRecivedData] = useState([]);
  const [verseNo, setVerseNo] = useState();
  const [recivedVerse, setRecivedVerse] = useState([]);

  const updateVerse = (e) => {
    e.preventDefault();
    recivedVerse.splice(verseNo, 1, {
      verse,
      english,
      explanation,
    });
    toast.success("Verse is added to queue. You need to click on update button to perfome the action ", {
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

  const handleChapterOption = (e) => {
    setChapNO(recivedData[e.target.value].chapterCount);
    // console.log(recivedData[e.target.value].chapterCount)
    setChapName(recivedData[e.target.value].chapterName);
    setSummary(recivedData[e.target.value].summary);
    setSummaryImg(recivedData[e.target.value].summaryImage);
    setRecivedVerse(recivedData[e.target.value].verses);
  };
  const handleVerseOption = (e) => {
    setVerse(recivedVerse[e.target.value].verse);
    setEnglish(recivedVerse[e.target.value].english);
    setExplanation(recivedVerse[e.target.value].explanation);
    setVerseNo(e.target.value);
  };
  const handleSubmitt = (e) => {
    e.preventDefault();
    try {
      fetch("https://pink-extinct-basket-clam.cyclic.app/api/update-chapter", {
        method: "post",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          chapterCount: chapNO,
          chapterName: chapName,
          verses: recivedVerse,
          summary: summary,
          summaryImage: summaryImg,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            toast.success("Successfully Updated the Chapter", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
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
          <h2>Update-Chapter</h2>
          <form className="LoginForm">
            <div className="Div1">
              <label>Chapter Number</label>
              <select
                name="chapterNo"
                id=""
                onChange={(e) => handleChapterOption(e)}
              >
                {recivedData.map((items, index) => {
                  return (
                    <option key={index} value={index}>
                      {index + 1}
                    </option>
                  );
                })}
              </select>
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
              <label>Verse No.</label>
              <select
                name="verseNo"
                id=""
                onChange={(e) => handleVerseOption(e)}
              >
                {recivedVerse.map((item, index) => {
                  return (
                    <option key={index} value={index}>
                      {index + 1}
                    </option>
                  );
                })}
              </select>
            </div>
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
            <button onClick={updateVerse}>Update-Verse</button>
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
          <button onClick={handleSubmitt}>Update</button>
        </div>
      </div>
    </>
  );
};

export default UpdateChapter;
