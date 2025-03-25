"use client";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "@/components/Input/Input";
import { useRegister } from "@/hooks/useRegister";
import MessagesErrors from "@/components/MessagesErrors/MessagesErrors";
import DatePicker from "@/components/DatePicker/DatePicker";

export default function Page() {
  const {
    dni,
    setDni,
    name,
    setName,
    surname,
    setSurname,
    address,
    setAddress,
    errors,
    handleRegister,
    birthDate,
    setBirthDate,
    phone,
    setPhone,
  } = useRegister();

  return (
    <div className="bg-brown-200/60 h-[calc(100svh)] overflow-y-hidden py-[70px]">
      <div className=" grid grid-cols-1 md:grid-cols-2 p-2">
        <div className="text-black min-h-screen w-full px-2 py-4 gap-2 flex flex-col items-center col-span-1 overflow-y-auto">
          <h2 className="uppercase text-3xl font-bold">Phaqchas</h2>
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
                    {errors.name && <MessagesErrors message={errors.name} />}
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
                    {errors.dni && <MessagesErrors message={errors.dni} />}
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
                    {errors.phone && <MessagesErrors message={errors.phone} />}
                  </div>

                  <div className="flex flex-col gap-y-5">
                    <label htmlFor="">Fecha de nacimiento</label>
                    <DatePicker value={birthDate} onChange={setBirthDate} />
                  </div>
                  {errors.birthDate && (
                    <MessagesErrors message={errors.birthDate} />
                  )}
                </div>

                <button className="bg-brown-600 text-white py-3 rounded-xl hover:bg-brown-600/60 transition-colors mt-4 font-bold text-xl">
                  Registrate
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="hidden h-auto lg:flex  items-start justify-center">
          <img
            src="/assets/voley1.webp"
            alt=""
            className="h-[calc(80vh-2px)] w-2/3 object-cover rounded-lg shadow-xl"
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
