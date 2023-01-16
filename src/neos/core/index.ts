import { Member as NeosMember, member as neosMember } from "./Member";
import { Component as NeosComponent } from "./Component";
import { Slot as NeosSlot } from "./Slot";

export const Member = NeosMember;
export const Component = NeosComponent;
export const Slot = NeosSlot;

export type member<T> = neosMember<T>;
