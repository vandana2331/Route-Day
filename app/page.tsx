export default function Home() {
  return (
    <div className = "min-h-screen bg-gray-100 flex justify-center items-center">
      <div className = "bg-white p-8 rounded-lg shadow w-96">
        <h1 className = "text-3xl font-bold mb-6"> 
          Route Day
          </h1>
        <p> Smart scheduling for field workers</p>

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