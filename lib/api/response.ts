import { NextResponse } from "next/server";

export type ApiSuccess<T> = {
  ok: true;
  data: T;
  message?: string;
};

export type ApiFailure = {
  ok: false;
  error: {
    code: string;
    message: string;
    details?: unknown;
  };
};

export function ok<T>(data: T, message?: string, status = 200) {
  return NextResponse.json<ApiSuccess<T>>({ ok: true, data, message }, { status });
}

export function fail(code: string, message: string, status = 400, details?: unknown) {
  return NextResponse.json<ApiFailure>({ ok: false, error: { code, message, details } }, { status });
}
