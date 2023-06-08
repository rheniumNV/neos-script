export type id<T> = string;
export type member<T> = { value?: T; id?: id<T> } | T;

export function Member({
  name,
  id,
  value,
  readOnly,
  idOnly,
  isRaw,
}: {
  name: string;
  id?: string;
  type?: string;
  value?: any;
  idOnly?: true;
  readOnly?: true;
  isRaw?: true;
}) {
  return (
    <member
      name={name}
      id={id}
      value={value}
      readOnly={readOnly}
      idOnly={idOnly}
      isRaw={isRaw}
    />
  );
}
