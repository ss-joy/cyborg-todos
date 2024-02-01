import type { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosError } from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const body = {
      todos: req.body.todos,
      instructions: req.body.input,
    };
    console.log(JSON.stringify(body));
    const response = await axios.post(
      "https://retune.so/api/chat/11eec0e0-5ad0-1e20-975f-a5a3bc9c793f/response",
      JSON.stringify({
        threadId: req.body.threadId,
        input: JSON.stringify(body),
      }),
      {
        headers: {
          "Content-Type": "application/json",
          "X-Workspace-API-Key": req.body.workspaceKey,
        },
      }
    );
    return res
      .status(200)
      .json({ success: "true", data: response.data.response.value });
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message, error.code, error.message, error.response);
    }
    return res.status(500).json({ success: "false", error });
  }
}
