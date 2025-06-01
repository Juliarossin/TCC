import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, provider, signInWithPopup } from "../../firebase";

const LoginCard = () => {
  const navigate = useNavigate(); // necessário para redirecionar

  // Login com Google
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Usuário logado com Google:", user);
      navigate("/home"); // redireciona após login
    } catch (error) {
      console.error("Erro no login com Google:", error);
    }
  };

  // Login com e-mail e senha (simulado)
  const handleEmailLogin = () => {
    console.log("Login com email/senha realizado!");
    navigate("/home"); // redireciona
  };

  return (
    <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:min-w-4xl">
      {/* Lado esquerdo com imagem */}
      <div
        className="hidden bg-cover lg:block lg:w-1/2"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80')",
        }}
      ></div>

      {/* Formulário de login */}
      <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
        <div className="flex justify-center mx-auto">
          <img
            className="w-auto h-7 sm:h-8"
            src="https://merakiui.com/images/logo.svg"
            alt="Logo"
          />
        </div>

        <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
          Welcome back!
        </p>

        {/* Botão Google */}
        <a
          onClick={handleGoogleLogin}
          className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer"
        >
          <div className="px-4 py-2">
            <svg className="w-6 h-6" viewBox="0 0 40 40">
              {/* ...svg paths aqui */}
            </svg>
          </div>
          <span className="w-5/6 px-4 py-3 font-bold text-center">
            Sign in with Google
          </span>
        </a>

        {/* Divider */}
        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
          <a
            href="#"
            className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
          >
            or login with email
          </a>
          <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
        </div>

        {/* Email e senha */}
        <div className="mt-4">
          <label
            htmlFor="LoggingEmailAddress"
            className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
          >
            Email Address
          </label>
          <input
            id="LoggingEmailAddress"
            type="email"
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div className="mt-4">
          <div className="flex justify-between">
            <label
              htmlFor="loggingPassword"
              className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
            >
              Password
            </label>
            <a
              href="#"
              className="text-xs text-gray-500 dark:text-gray-300 hover:underline"
            >
              Forget Password?
            </a>
          </div>
          <input
            id="loggingPassword"
            type="password"
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Botão Sign In */}
        <div className="mt-6">
          <button
            onClick={handleEmailLogin}
            className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
          >
            Sign In
          </button>
        </div>

        {/* Link para cadastro */}
        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
          <Link
            to="/cadastro"
            className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
          >
            Sign Up
          </Link>
          <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
