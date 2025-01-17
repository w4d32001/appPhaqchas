export const loginUser = async (dni: string, password: string) => {
  const response = await fetch("http://127.0.0.1:8000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ dni, password }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Error al iniciar sesión");
  }


  return response.json();
};

export const fetchUserData = async (token: string) => {
  const response = await fetch("http://127.0.0.1:8000/api/auth/me", {
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


