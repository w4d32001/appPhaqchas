'use client'
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import InGroup from "@/components/InGroup/InGroup";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "", general: "" });
  const router = useRouter();

  const validateInputs = (): boolean => {
    const newErrors = { email: "", password: "", general: "" };

    if (!email.trim()) {
      newErrors.email = "El correo electrónico es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Por favor, ingresa un correo válido.";
    }

    if (!password.trim()) {
      newErrors.password = "La contraseña es obligatoria.";
    } else if (password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres.";
    }

    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateInputs()) return;

    try {
      const response = await fetch("http://127.0.0.1:8000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrors((prev) => ({
          ...prev,
          general: errorData.message || "Error al iniciar sesión",
        }));
        return;
      }

      const data = await response.json();
      console.log(data)
      localStorage.setItem("token", data.access_token); 
      router.push("/"); 
      try {
        const userDataResponse = await fetch("http://127.0.0.1:8000/api/auth/me", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${data.access_token}`,
          },
        });
      
        if (!userDataResponse.ok) {
          const errorText = await userDataResponse.text();
          console.error('Error detallado:', errorText);
          throw new Error('Error al obtener los datos del usuario');
        }
      
        const userData = await userDataResponse.json();
        console.log(userData);
      
      } catch (error: any) {
        console.error("Error al obtener los datos del usuario:", error.message);
        alert(`Error: ${error.message}`);
      }
      
      
  
      
    } catch (err) {
      setErrors((prev) => ({
        ...prev,
        general: "Error de red, intenta nuevamente.",
      }));
    }
  };

  return (
    <div className="bg-custom-gradient h-svh overflow-y-hidden">
      <div className="h-full grid grid-cols-1 lg:grid-cols-3 p-4 ">
        <div className="text-white w-full px-8 py-10 gap-10 flex flex-col items-center col-span-1">
          <h2 className="uppercase text-3xl">Phaqchas</h2>
          <span className="text-center font-sans">
            Inicia sesión para la disponibilidad de horarios deportes,
            promociones y más noticias
          </span>
          <div className="w-full flex flex-col gap-y-10">
            <form onSubmit={handleLogin}>
              <div className="flex flex-col gap-4">
                <InGroup
                  type="email"
                  name="email"
                  placeholder="ejemplo@gmail.com"
                  label="Correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <span className="text-red-600 text-sm">{errors.email}</span>
                )}
                <InGroup
                  type="password"
                  name="password"
                  placeholder="*********"
                  label="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && (
                  <span className="text-red-600 text-sm">{errors.password}</span>
                )}
                {errors.general && (
                  <span className="text-red-600 text-sm">{errors.general}</span>
                )}
                <button
                  type="submit"
                  className="bg-[#162D3A] text-white py-3 rounded-xl hover:bg-[#162D3A]/60 transition-colors"
                >
                  Iniciar sesión
                </button>
              </div>
            </form>
            <div className="flex flex-col gap-4 w-full">
              <span className="text-center text-xl flex items-center px-8">
                <hr className="w-1/3" /> <span className="w-1/3">o</span>{" "}
                <hr className="w-1/3" />
              </span>
              <span className="text-center">
                ¿No tienes cuenta aún?{" "}
                <Link href="../auth/register" className="text-blue-600">
                  Regístrate
                </Link>
              </span>
            </div>
          </div>
        </div>
        <div className="hidden lg:block h-screen col-span-2">
          <img
            src="/assets/voley1.jpg"
            alt=""
            className="h-[calc(100vh-32px)] w-full object-cover rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}
