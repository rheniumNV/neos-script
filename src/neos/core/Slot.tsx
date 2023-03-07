import { Member } from "./Member";

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
  persistentId?: boolean;
  name?: string;
  tag?: string;
  active?: boolean;
  position?: [number, number, number];
  rotation?: [number, number, number, number];
  scale?: [number, number, number];
  orderOffset?: number;
  children?: JSX.IntrinsicElements[];
  components?: JSX.IntrinsicElements[];
  assets?: JSX.IntrinsicElements[];
}) {
  return (
    <slot>
      <slotData>
        <Member name="ID" value={id} idOnly />
        <Member name="Name" value={name ?? "EmptyObject"} />
        <Member name="Persistent-Id" value={persistentId} idOnly />
        <Member name="Tag" value={tag} />
        <Member name="Active" value={active} />
        <Member name="Position" value={position} />
        <Member name="Rotation" value={rotation} />
        <Member name="Scale" value={scale} />
        <Member name="OrderOffset" value={orderOffset} />
      </slotData>
      <components>{components}</components>
      <children>{children}</children>
      <assets>{assets}</assets>
    </slot>
  );
}
