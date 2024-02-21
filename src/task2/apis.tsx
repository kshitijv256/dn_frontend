const API_URL = "https://dn-backend.onrender.com/api";

export type Payload = {
  data: string;
};

export type SampleData = {
  _id: string;
  data: string;
};

export async function getApiData(setDataCB: (data: SampleData[]) => void) {
  const url = `${API_URL}/`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  setDataCB(response.data);
}

export async function initCounter() {
  const url = `${API_URL}/count`;
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  }).then((res) => res.json());
}

export async function getCount() {
  const url = `${API_URL}/count`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  return response.data;
}

export async function createNewData(data: Payload) {
  const url = `${API_URL}/`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
  return response;
}

export async function updateData(id: string, data: Payload) {
  const url = `${API_URL}/${id}`;
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
  console.log(response);
  return response;
}
