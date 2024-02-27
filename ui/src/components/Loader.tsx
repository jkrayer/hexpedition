import React from "react";

export default function Loader<T>({
  loading,
  error,
  data,
  Component,
}: {
  loading: boolean;
  error: null | Error;
  data: null | T;
  Component: React.FC<{ data: T }>;
}) {
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error.toString()}</h1>;
  if (data === null) return <h1>Cant Render</h1>;

  return <Component data={data} />;
}
