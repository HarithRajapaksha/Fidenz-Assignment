import { useEffect } from "react";

function Login() {

  useEffect(() => {
    window.location.href = "http://localhost:6060/login";
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <p className="text-xl text-gray-700 dark:text-gray-200">
        Redirecting to login...
      </p>
    </div>
  );
}

export default Login;
