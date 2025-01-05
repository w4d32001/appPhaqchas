"use client";
import Link from "next/link";
import React, { useState } from "react";
import InGroup from "@/components/InGroup/InGroup";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

export default function page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [dni, setDni] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const router = useRouter();
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    phone: "",
    dni: "",
    name: "",
    surname: "",
    general: "",
  });

  const validateInputs = (): boolean => {
    const newErrors = {
      email: "",
      password: "",
      phone: "",
      dni: "",
      name: "",
      surname: "",
      general: "",
    };

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

    if (!phone.trim()) {
      newErrors.phone = "El celular es obligatorio.";
    } else if (phone.length < 9) {
      newErrors.phone = "El celular debe tener al menos 9 caracteres.";
    }

    if (dni.trim() && dni.length < 8) {
      newErrors.dni = "El DNI debe tener al menos 8 caracteres si se proporciona.";
    }
  
    if (!name.trim()) {
      newErrors.name = "El nombre es obligatorio.";
    }
  
    if (!surname.trim()) {
      newErrors.surname = "El apellido es obligatorio.";
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateInputs()) return;

    try {
      const response = await fetch("http://127.0.0.1:8000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, phone, dni, name, surname }),
      });

      const data = await response.json();
      if (response.ok) {
        const loginResponse = await fetch("http://127.0.0.1:8000/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        if (!loginResponse.ok) {
          const errorData = await loginResponse.json();
          setErrors((prev) => ({
            ...prev,
            general: errorData.message || "Error al iniciar sesión automáticamente",
          }));
          return;
        }

        const loginData = await loginResponse.json();
        localStorage.setItem("token", loginData.access_token); 

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
  
          localStorage.setItem("user", JSON.stringify(userData));
          toast.success("¡Bienvenido, usuario!");
          router.push("/"); 
          
        
        
        } catch (error: any) {
          console.error("Error al obtener los datos del usuario:", error.message);
          alert(`Error: ${error.message}`);
        }
      } else {
        if (data.errors) {
          setErrors((prev) => ({
            ...prev,
            ...data.errors, 
          }));
          console.log(data)
        } else {
          setErrors((prev) => ({
            ...prev,
            general: data.message || "Error en el registro.",
          }));console.log(data)
        }
      }
    } catch (err) {
      setErrors((prev) => ({
        ...prev,
        general: "Error de red, intenta nuevamente.",
      }));
    }
  };
  return (
    <div className="bg-custom-gradient h-auto overflow-y-hidden">
      <div className=" grid grid-cols-1 lg:grid-cols-3 p-2">
        <div className="text-white min-h-screen w-full px-2 py-4 gap-2 flex flex-col items-center col-span-1 overflow-y-auto">
          <h2 className="uppercase text-3xl">Phaqchas</h2>
          <span className="text-center font-sans text-sm">
          Regístrate para acceder a promociones y más noticias.
          </span>
          <div className="w-full flex flex-col gap-y-10">
            <form action="" onSubmit={handleRegister}>
              <div className="flex flex-col gap-2">
                <div className="flex w-full gap-2 md:flex-row md:gap-4">
                  <div className="w-1/2">
                    <InGroup
                      type="text"
                      name="name"
                      placeholder="Juan"
                      label="Nombre"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && (
                      <span className="text-red-600 text-sm">
                        {errors.name}
                      </span>
                    )}
                  </div>
                  <div className="w-1/2">
                    <InGroup
                      type="text"
                      name="surname"
                      placeholder="Perez"
                      label="Apellido"
                      value={surname}
                      onChange={(e) => setSurname(e.target.value)}
                    />
                    {errors.surname && (
                      <span className="text-red-600 text-sm">
                        {errors.surname}
                      </span>
                    )}
                  </div>
                </div>
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
                  <span className="text-red-600 text-sm">
                    {errors.password}
                  </span>
                )}
                <div className="flex w-full gap-2 md:gap-4">
                  <div className="w-1/2">
                    <InGroup
                      type="text"
                      name="phone"
                      placeholder="987564123"
                      label="Celular"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    {errors.phone && (
                      <span className="text-red-600 text-sm">
                        {errors.phone}
                      </span>
                    )}
                  </div>
                  <div className="w-1/2">
                    <InGroup
                      type="text"
                      name="dni"
                      placeholder="85632147"
                      label="DNI"
                      value={dni}
                      onChange={(e) => setDni(e.target.value)}
                    />
                    {errors.dni && (
                      <span className="text-red-600 text-sm">{errors.dni}</span>
                    )}
                  </div>
                </div>

                <button className="bg-[#162D3A] text-white py-3 rounded-xl hover:bg-[#162D3A]/60 transition-colors mt-4">
                  Registrate
                </button>
              </div>
            </form>
            <div className="flex flex-col gap-4 w-full">
              <span className="text-center text-xl flex items-center px-8">
                <hr className="w-1/3" /> <span className="w-1/3">o</span>{" "}
                <hr className="w-1/3" />
              </span>
              <span className="text-center">
                Ya estas registrado?{" "}
                <Link href="../auth/login" className="text-blue-600">
                  Inicia sesión
                </Link>
              </span>
            </div>
          </div>
        </div>
        <div className="hidden h-auto col-span-2 lg:flex  items-center">
          <img
            src="/assets/voley1.jpg"
            alt=""
            className="h-[calc(100vh-2px)] w-full object-cover rounded-lg shadow-xl"
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
