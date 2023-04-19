import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { PATH_HOST, User } from "../../types/users.types";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const { data } = await axios.get(`${PATH_HOST}/api/users`);
  return data;
});

export const postUsers = async (data: object) => {
  try {
    return await axios.post(`${PATH_HOST}/api/users`, {
      data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (data: User) => {
  try {
    return await axios.delete(`${PATH_HOST}/api/user?id=${data.id}`, {});
  } catch (error) {
    console.log(error);
  }
};

export const getUserById = createAsyncThunk(
  "user/getUserById",
  async (id: number) => {
    try {
      const { data } = await axios.get(`${PATH_HOST}/api/user?id=${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateUserById = async (data: object, id: number) => {
  try {
    return await axios.post(`${PATH_HOST}/api/user`, {
      data,
      id,
    });
  } catch (error) {
    console.log(error);
  }
};
