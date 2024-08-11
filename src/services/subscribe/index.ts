import instance from "@/lib/axios/instance";

export const SubscribeServices = {
  subscribe(email: string) {
    return instance.post("/api/subscribe", { email });
  },
};
