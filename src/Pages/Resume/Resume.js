import React from 'react';

const Resume = () => {
  // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("RuhulAmin_Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "SamplePDF.pdf";
        alink.click();
      });
    });
  };

  return (
    <div>
      <center>
        <h3 className="text-3xl">Click on below button to download pdf file</h3>
        <button className="btn btn-primary" onClick={onButtonClick}>
          Download Resume
        </button>
      </center>
    </div>
  );
};

export default Resume;