import { Response } from "express";

export const sendSuccess200Response = (res: Response, data?: any) => {
  return res.status(200).json({
    success: true,
    message: "",
    data,
  });
};

export const sendFailure500Response = (res: Response, err: Error) => {
  const status = parseInt(err.message?.split?.(":")?.[0], 10) || 500;
  const message = err.message
    ? err.message?.split?.(":")?.[1] || err.message
    : "Something went wrong, please try again later!";
  return res.status(status).json({
    success: false,
    message,
    errors:
      err?.name === "ValidationError"
        ? err.message.split(". ").map((msg) => msg + ".")
        : [],
  });
};
