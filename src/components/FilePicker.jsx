import React from 'react'
function App() {
const fileInputRef  = React.useRef();

function handleFileUpload(){
    if(fileInputRef.current){
        fileInputRef.current.click();
    }
    
}
  return (
    <div id="app">
      <p>Please select an image</p>
      <p>
        <input ref={fileInputRef } data-testid="file-picker" type="file" accept="image/*" />
        <button onClick={handleFileUpload}>Pick Image</button>
      </p>
    </div>
  );
}

export default App;