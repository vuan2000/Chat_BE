import { array, lazy, object, string } from "yup";

export const createMessageSchema = object({
  body: object().shape({
    content: string()
      .strict()
      .typeError("content must be a string")
      .required("content is required"),
    receivers: lazy((val) =>
      Array.isArray(val)
        ? array().of(string())
        : array().required("MemberIds is required")
    ),
    senderUId: string().strict().required("Field type is required"),
    senderName: string().strict().required("Field type is required"),
    type: string()
      .strict()
      .required("Field type is required")
      .test(
        "content",
        "Must be TEXT or IMAGE",
        (val) => val === "TEXT" || val === "IMAGE"
      ),
    roomId: string().strict().required("Field roomId is required"),
  }),
});
