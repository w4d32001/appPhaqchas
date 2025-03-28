import {
  registerUser,
} from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";
import { BackendError } from "./useAuth";
import { format } from "date-fns";

export const useRegister = () => {
  const [phone, setPhone] = useState("");
  const [dni, setDni] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [address, setAddress] = useState("");
  const [birthDate, setBirthDate] = useState<Date | undefined>(undefined);
  const router = useRouter();
  const [errors, setErrors] = useState({
    phone: "",
    dni: "",
    name: "",
    surname: "",
    address: "",
    birthDate: "",
    general: "",
  });
  const validateInputs = (): boolean => {
    const newErrors = {
      phone: "",
      dni: "",
      name: "",
      surname: "",
      general: "",
      address: "",
      birthDate: "",
    };


    if (!phone.trim()) {
      newErrors.phone = "El celular es obligatorio.";
    } else if (phone.length < 9) {
      newErrors.phone = "El celular debe tener al menos 9 caracteres.";
    }

    if (!dni.trim()){
      newErrors.dni = "El dni es obligatorio.";
    }
    else if(dni.length < 8) {
      newErrors.dni =
        "El DNI debe tener al menos 8 caracteres si se proporciona.";
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
  
    const formattedBirthDate = birthDate ? format(birthDate, "yyyy-MM-dd") : "";
  
    const data = {
      phone,
      dni,
      name,
      surname,
      address,
      birthDate: formattedBirthDate,
    };
  
    try {
      await registerUser(data);
      Swal.fire({
        title: "¡Cuenta creada exitosamente!",
        icon: "success",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
  
      
  
      router.push("/");
    } catch (error: unknown) {
      const backendError = error as BackendError;
      if (backendError.errors) {
        Object.entries(backendError.errors).forEach(([field, messages]) => {
          const errorMessage = `${messages.join(", ")}`;
  
          Swal.fire({
            icon: "error",
            toast: true,
            title: errorMessage,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
          });
        });
      } else {
        console.error("Error desconocido:", error);
        alert("Ocurrió un error inesperado.");
      }
    }
  };

  return {
    phone,
    setPhone,
    dni,
    setDni,
    name,
    setName,
    surname,
    setSurname,
    address,
    setAddress,
    birthDate,
    setBirthDate,
    handleRegister,
    errors,
  };
};
