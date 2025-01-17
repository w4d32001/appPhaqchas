import { useRouter } from "next/navigation";
import { useState } from "react";

export const useRegister = () => {

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

}