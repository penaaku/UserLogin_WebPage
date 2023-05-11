import "./App.css";
import image from "./assets/images.jpg";

function App() {
  return (
    <div class="container flex align-items-center justify-content-center w-screen h-screen bg-bluegray-300">
      <div class="card">
        <div class="flex justify-content-center  ">
          <img src={image} style={{ width: "100px" }} />
        </div>
        <h2 class="m-1 mb-4 flex justify-content-center text-800">User Login</h2>
        <div class="username mb-3">
          <label>Username</label>
          <input type="text" placeholder="username@gmail.com" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full mt-2" />
        </div>
        <div class="password">
          <label>Password</label>
          <input type="password" placeholder="password" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full mt-2" />
        </div>
        <div class="flex justify-content-between mt-3">
          <div>
            <input type="checkbox" class="mr-2" />
            <label class="text-sm">Remember me</label>
          </div>
          <div>
            <label class="text-sm font-italic text-700 cursor-pointer">Forgot Password?</label>
          </div>
        </div>
        <button
          type="button"
          class="text-white bg-primary-500 border-primary-500 px-3 py-2 text-base border-1 border-solid border-round cursor-pointer transition-all transition-duration-200 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700 mt-4"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default App;
