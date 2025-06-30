import { useState } from 'react'
import QrCodeGenetator from "./components/QrCodeComponent"

function App() {
  const [value, setValue] = useState("")
  const [input, setInput] = useState("")


  function HandleSubmitInput(e) {
    e.preventDefault()
    setValue(input)

  }

  function HandleDownload(){

  }


   return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-200 relative">

      <h1 className="absolute top-8 text-2xl font-semibold text-gray-800">
        Simple QR Code Generator
      </h1>

    
      <div className="h-64 flex flex-col items-center justify-center mb-4 space-y-4">
        {value !== "" && (
          <>
            <QrCodeGenetator value={value} />

           
            <button
              onClick={HandleDownload}
              className="bg-green-500 text-white rounded px-4 py-2 hover:bg-green-600"
            >
              Download QR Code
            </button>
          </>
        )}
      </div>

      <form
        onSubmit={HandleSubmitInput}
        className="flex space-x-2"
      >
        <input
          type="text"
          placeholder="Enter link here"
          className="border border-gray-300 rounded px-4 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
        >
          Generate QR
        </button>
      </form>
    </div>
  );
}
export default App
