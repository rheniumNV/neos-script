import { member, Member } from "./Member";

export function Component({
  type,
  id,
  persistentId,
  updateOrder,
  children,
  version,
}: {
  type: string;
  id?: string;
  updateOrder?: member<number>;
  persistentId?: string;
  children?: JSX.IntrinsicElements[];
  version?: number;
}) {
  return (
    <component type={type} version={version}>
      <Member name="ID" id={id} idOnly={true} />
      <Member name="Persistent-ID" id={persistentId} idOnly={true} />
      <Member
        name="UpdateOrder"
        id={
          typeof updateOrder === "object" && "id" in updateOrder
            ? updateOrder.id
            : undefined
        }
        value={
          typeof updateOrder === "object" && "value" in updateOrder
            ? updateOrder.value
            : updateOrder ?? 0
        }
      />
      {children}
    </component>
  );
}
