"use client";
import Link from "next/link";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "@/components/Input/Input";
import { useRegister } from "@/hooks/useRegister";
import MessagesErrors from "@/components/MessagesErrors/MessagesErrors";
import DatePicker from "@/components/DatePicker/DatePicker";

export default function Page() {
  
  const { dni, setDni, name, setName, surname, setSurname, address, setAddress, password, setPassword, errors, handleRegister, birthDate, setBirthDate, phone, setPhone} = useRegister();

  return (
    <div className="bg-custom-gradient h-auto overflow-y-hidden relative">
      <Link href="/" className="absolute py-2 px-8 bg-gray-900 top-1 left-1 text-white hover:bg-gray-950 rounded-full">Inicio</Link>
      <div className=" grid grid-cols-1 lg:grid-cols-3 p-2">
        <div className="text-white min-h-screen w-full px-2 py-4 gap-2 flex flex-col items-center col-span-1 overflow-y-auto">
          <h2 className="uppercase text-3xl">Phaqchas</h2>
          <span className="text-center font-sans text-sm">
            Regístrate para acceder a promociones y más noticias.
          </span>
          <div className="w-full flex flex-col gap-y-10 mt-4">
            <form action="" onSubmit={handleRegister}>
              <div className="flex flex-col gap-2">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Juan"
                      label="Nombre"
                      value={name}
                      required={true}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setName(e.target.value)
                      }
                    />
                    {errors.name && (
                      <MessagesErrors message={errors.name} />
                    )}
                  </div>
                  <div className="">
                    <Input
                      type="text"
                      name="surname"
                      placeholder="Perez"
                      label="Apellido"
                      value={surname}
                      required={true}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setSurname(e.target.value)
                      }
                    />
                    {errors.surname && (
                      <MessagesErrors message={errors.surname} />
                    )}
                  </div>
                </div>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div>
                    <Input
                      type="password"
                      name="password"
                      placeholder="*********"
                      label="Contraseña"
                      value={password}
                      required={true}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setPassword(e.target.value)
                      }
                    />
                    {errors.password && (
                      <MessagesErrors message={errors.password} />
                    )}
                  </div>
                  <div>
                    <Input
                      type="text"
                      name="address"
                      placeholder="calle falsa 123"
                      label="Dirección"
                      value={address}
                      required={false}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setAddress(e.target.value)
                      }
                    />
                    {errors.address && (
                      <MessagesErrors message={errors.address} />
                    )}
                  </div>
                </div>

                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="">
                    <Input
                      type="text"
                      name="phone"
                      placeholder="987564123"
                      label="Celular"
                      value={phone}
                      required={true}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setPhone(e.target.value)
                      }
                    />
                    {errors.phone && (
                      <MessagesErrors message={errors.phone} />
                    )}
                  </div>
                  <div className="">
                    <Input
                      type="text"
                      name="dni"
                      placeholder="85632147"
                      label="DNI"
                      value={dni}
                      required={true}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setDni(e.target.value)
                      }
                    />
                    {errors.dni && (
                      <MessagesErrors message={errors.dni} />
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-y-2">
                    <label htmlFor="">Fecha de nacimiento</label>
                <DatePicker value={birthDate} onChange={setBirthDate} />
                </div>
                {errors.birthDate && (
                 <MessagesErrors message={errors.birthDate} />
                )}

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
            src="/assets/voley1.webp"
            alt=""
            className="h-[calc(100vh-2px)] w-full object-cover rounded-lg shadow-xl"
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
