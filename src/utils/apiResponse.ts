import { NextResponse } from "next/server";

export const apiResponse = (response: any, message: string, payload?: any) => {
  if (!response) {
    return NextResponse.json({
      status: 200,
      message: "koneksi ke database gagal",
    });
  } else {
    return NextResponse.json({
      status: 200,
      message: message,
      payload: payload || "kosong",
    });
  }
};
