import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser, fetchUserData } from "@/services/auth.service";

export const useAuth = () => {
  const [dni, setDni] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ dni: "", password: "", general: "" });
  const router = useRouter();

  const validateInputs = (): boolean => {
    const newErrors = { dni: "", password: "", general: "" };

    if (!dni.trim()) {
      newErrors.dni = "El dni es obligatorio.";
    } else if (dni.length != 8) {
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

      router.push("/");
      console.log()
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrors((prev) => ({
          ...prev,
          general: error.message || "Error de red, intenta nuevamente.",
        }));
        console.log(error)
      } else {
        console.error("Error desconocido:", error);
        alert("Ocurrió un error inesperado.");
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
