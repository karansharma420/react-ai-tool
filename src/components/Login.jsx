import React, { useState } from "react";

const Login = ({
  userName,
  setUserName,
  setIsLoggedIn,
  setShowLoginForm,
  setShowGreeting,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-xl font-bold mb-4 dark:text-white">
          Enter your name
        </h2>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Type your name"
          className="w-full p-2 rounded border mb-4 dark:text-black"
        />
        <div className="flex justify-end gap-2">
          <button
            onClick={() => setShowLoginForm(false)}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              setIsLoggedIn(true);
              setShowLoginForm(false);
              setShowGreeting(true); // ✅ NEW: Trigger greeting right after login
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
