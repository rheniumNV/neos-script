import { Member } from "./Member";

export function Slot({
  name,
  children,
  components,
}: {
  name: string;
  children?: JSX.IntrinsicElements[];
  components?: JSX.IntrinsicElements[];
}) {
  return (
    <slot>
      <slotData>
        <Member name="ID" idOnly />
        <Member name="Name" value={name} />
        <Member name="Persistent-Id" idOnly />
        <Member name="Tag" value={null} />
        <Member name="Active" value={true} />
        <Member name="Position" value={[0, 0, 0]} />
        <Member name="Rotation" value={[0, 0, 0, 0]} />
        <Member name="Scale" value={[0, 0, 0]} />
        <Member name="OrderOffset" value={0} />
      </slotData>
      <components>{components}</components>
      <children>{children}</children>
    </slot>
  );
}
