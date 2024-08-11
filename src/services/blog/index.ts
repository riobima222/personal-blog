import instance from "@/lib/axios/instance";

export const BlogServices = {
  getBlog() {
    return instance.get("/api/blog");
  },
};
