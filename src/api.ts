const API_URL = import.meta.env.VITE_API_URL;

// 🔹 Register API
export const registerUser = async (data: {
  username: string;
  password: string;
  role: string;
  deviceId?: string;
}) => {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Registration failed');
  }
  return response.json();
};

// 🔹 Login API
export const loginUser = async (data: {
  username: string;
  password: string;
  deviceId?: string;
}) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }
  return response.json();
};
