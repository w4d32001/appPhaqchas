import { apiUrl } from "@/lib/utils";

export const loginUser = async (dni: string, password: string) => {
  const response = await fetch(`${apiUrl}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ dni, password }),
  });

  if (!response.ok) {
    const errorData = await response.json(); 
    throw {
      message: errorData.message || "Error al iniciar sesión",
      errors: errorData.errors || {},
    };
  }


  return response.json();
};

export type User = {
  dni: string;
  password: string;
  phone: string;
  name: string;
  surname: string;
  address: string;
  birthDate: string;
}

export const registerUser = async (data: User) => {
  const response = await fetch(`${apiUrl}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      dni: data.dni,
      password: data.password,
      phone: data.phone,
      name: data.name,
      surname: data.surname,
      address: data.address,
      birth_date: data.birthDate,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.log(errorData)
    throw({
      errors: errorData.errors || {},
      message: errorData.message || "Error al registrar el usuario",
    });
  }


  return response.json();
}

export const fetchUserData = async (token: string) => {
  const response = await fetch(`${apiUrl}/auth/me`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Error al obtener los datos del usuario");
  }

  return response.json();
};


