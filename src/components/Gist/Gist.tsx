import React from "react";

export type GistProps = {
  id: string;
};

export default function Gist(props: GistProps) {
  const { id } = props;
  return <>{id}</>;
}
