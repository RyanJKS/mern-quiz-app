import { axiosInstance } from "../config/apiConfig";

export const deleteAccount = async (accessToken, currentUserId) => {
  try {
    //AXIOS DELETE FORMAT DELETE.{URL, {HEADER, BODY}}
    const response = await axiosInstance.delete(
      `/user/delete/${currentUserId}`,
      {
        headers: { authorisation: `${accessToken}` },
        data: {
          userId: currentUserId,
        },
      }
    );
    if (response.status === 200) {
      return true;
    }
  } catch (error) {
    console.error(error);
  }
};
