import React from "react";

export default function About() {
 
  return (
    <div>
      <div style={{textAlign: 'center'}}>
      <h2 className="title-text" style={{color: "black"}}>File Sharing API.</h2>
      </div>
      <p className="text text-center" style={{color: "black"}}>
        
       This web application will helps to user to upload the files.
      - You can Upload the file using the api.
      - The file can be sent as form data
      - It will Set the expiry time as 5 days
      - Helps to generate the link for the file.
      - Alast display the key and file link
       
      </p>
    </div>
  );
}
