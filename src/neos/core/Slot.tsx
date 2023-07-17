import { Member, member } from "./Member";

const MemberWrapper = <T,>({
  name,
  member,
}: {
  name: string;
  member?: member<T>;
}) => (
  <Member
    name={name}
    id={
      member && typeof member === "object" && "id" in member
        ? member.id
        : undefined
    }
    value={
      member && typeof member === "object" && "value" in member
        ? member.value
        : member
    }
  />
);

export function Slot({
  id,
  persistentId,
  name,
  tag,
  active,
  position,
  rotation,
  scale,
  orderOffset,
  children,
  components,
  assets,
}: {
  id?: string;
  persistentId?: string;
  name?: member<string>;
  tag?: member<string>;
  active?: member<boolean>;
  position?: member<[number, number, number]>;
  rotation?: member<[number, number, number, number]>;
  scale?: member<[number, number, number]>;
  orderOffset?: member<number>;
  children?: JSX.IntrinsicElements[];
  components?: JSX.IntrinsicElements[];
  assets?: JSX.IntrinsicElements[];
}) {
  return (
    <slot>
      <slotData>
        <Member name="ID" id={id} idOnly />
        <Member name="Persistent-Id" id={persistentId} idOnly />
        <MemberWrapper name="Name" member={name ?? "EmptyObject"} />
        <MemberWrapper name="Tag" member={tag ?? ""} />
        <MemberWrapper name="Active" member={active ?? true} />
        <MemberWrapper name="Position" member={position ?? [0, 0, 0]} />
        <MemberWrapper name="Rotation" member={rotation ?? [0, 0, 0, 0]} />
        <MemberWrapper name="Scale" member={scale ?? [1, 1, 1]} />
        <MemberWrapper name="OrderOffset" member={orderOffset ?? 0} />
      </slotData>
      <components>{components}</components>
      <children>{children}</children>
      <assets>{assets}</assets>
    </slot>
  );
}
