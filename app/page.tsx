export default function Home() {
  return (
    <div className = "min-h-screen bg-gray-100 flex justify-center items-center">
      <div className = "bg-white p-8 rounded-lg shadow w-96">
        <h1 className = "text-3xl font-bold mb-6"> 
          Route Day
          </h1>
        <p className = "text-3xl font-bold mb-2"> Smart scheduling for field workers</p>
        <label className = "text-gray-500 mb-2"> 
          I am a ...
        </label>

        <select className = "border rounded-full p-2 w-full mb-5">

          <option> Worker</option>
          <option> Customer</option>

        </select>

        <label className = "block mb-2 font-medium"> 
          Name
        </label>

        <input
          type = "text"
          placeholder = "Enter Name"
          className = "border p-2 w-full mb-4"
          />

          <button className = "bg-black text-white p-2 w-full rounded">
            Continue
          </button>
      </div>
    </div>
  );
}