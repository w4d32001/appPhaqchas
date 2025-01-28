import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser, fetchUserData } from "@/services/auth.service";
import Swal from "sweetalert2";

export interface BackendError {
  message?: string;
  errors?: Record<string, string[]>;
}

export const useAuth = () => {
  const [dni, setDni] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ dni: "", password: "", general: "" });
  const router = useRouter();

  const validateInputs = (): boolean => {
    const newErrors = { dni: "", password: "", general: "" };

    if (!dni.trim()) {
      newErrors.dni = "El dni es obligatorio.";
    } else if (dni.length !== 8) {
      newErrors.dni = "Por favor, ingresa un dni válido.";
    }

    if (!password.trim()) {
      newErrors.password = "La contraseña es obligatoria.";
    } else if (password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres.";
    }

    setErrors(newErrors);
    return !newErrors.dni && !newErrors.password;
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateInputs()) return;

    try {
      const { access_token } = await loginUser(dni, password);
      localStorage.setItem("token", access_token);

      const userData = await fetchUserData(access_token);
      localStorage.setItem("user", JSON.stringify(userData));

      Swal.fire({
        title: '¡Bienvenido a Phaqchas!',
        icon: 'success',
        toast: true, 
        position: 'top-end', 
        showConfirmButton: false, 
        timer: 3000, 
        timerProgressBar: true,
      });

      router.push("/"); 
    } catch (error: unknown) {
      const backendError = error as BackendError;

      if (backendError.errors) {
        const errorMessages = Object.entries(backendError.errors)
          .map(([field, messages]) => `${field}: ${messages.join(", ")}`)
          .join("\n");

        Swal.fire({
          icon: "error",
          title: backendError.message || "Error al iniciar sesión",
          toast: true, 
          position: 'top-end', 
          showConfirmButton: false, 
          timer: 3000, 
          timerProgressBar: true,
          text: errorMessages,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error al iniciar sesión",
          text: backendError.message || "Ocurrió un error inesperado. Inténtalo nuevamente.",
        });
      }
    }
  };

  return {
    dni,
    setDni,
    password,
    setPassword,
    errors,
    handleLogin,
  };
};
