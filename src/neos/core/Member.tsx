export type id<T> = string;
export type member<T> = { value?: T; id?: id<T> } | T;

export function Member({
  name,
  id,
  value,
  readOnly,
  idOnly,
}: {
  name: string;
  id?: string;
  type?: string;
  value?: any;
  idOnly?: true;
  readOnly?: true;
}) {
  return (
    <member
      name={name}
      id={id}
      value={value}
      readOnly={readOnly}
      idOnly={idOnly}
    />
  );
}
