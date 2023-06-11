import { member, Member, Component } from "../../../core";
    
    export interface CharacterParenterInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TriggersOnly?: member<boolean>;
NestIntoSpace?: member<boolean>;
MustBeOnGround?: member<boolean>;
Filters?: member<any>;
IgnoreParentUser?: member<boolean>;
ParentSpace?: member<any>;
    }
    
    export function CharacterParenter(props: CharacterParenterInput){
      const { id, persistentId, updateOrder, Enabled,
TriggersOnly,
NestIntoSpace,
MustBeOnGround,
Filters,
IgnoreParentUser,
ParentSpace, } = props;
    
      return (
        <Component type="FrooxEngine.CharacterParenter" id={id} persistentId={persistentId} updateOrder={updateOrder} version={1}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="TriggersOnly" id={typeof TriggersOnly === "object" && "id" in TriggersOnly ? TriggersOnly?.id : undefined} value={typeof TriggersOnly === "object" && "value" in TriggersOnly ? TriggersOnly?.value : TriggersOnly} /* default: false */  isRaw={typeof TriggersOnly === "object" && "isRaw" in TriggersOnly && TriggersOnly.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="NestIntoSpace" id={typeof NestIntoSpace === "object" && "id" in NestIntoSpace ? NestIntoSpace?.id : undefined} value={typeof NestIntoSpace === "object" && "value" in NestIntoSpace ? NestIntoSpace?.value : NestIntoSpace} /* default: false */  isRaw={typeof NestIntoSpace === "object" && "isRaw" in NestIntoSpace && NestIntoSpace.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="MustBeOnGround" id={typeof MustBeOnGround === "object" && "id" in MustBeOnGround ? MustBeOnGround?.id : undefined} value={typeof MustBeOnGround === "object" && "value" in MustBeOnGround ? MustBeOnGround?.value : MustBeOnGround} /* default: false */  isRaw={typeof MustBeOnGround === "object" && "isRaw" in MustBeOnGround && MustBeOnGround.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncList\`1[FrooxEngine.CharacterParenter+AlignmentFilter]`} name="Filters" id={typeof Filters === "object" && "id" in Filters ? Filters?.id : undefined} value={typeof Filters === "object" && "value" in Filters ? Filters?.value : Filters} /* default: FrooxEngine.SyncList`1[FrooxEngine.CharacterParenter+AlignmentFilter] */  isRaw={typeof Filters === "object" && "isRaw" in Filters && Filters.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IgnoreParentUser" id={typeof IgnoreParentUser === "object" && "id" in IgnoreParentUser ? IgnoreParentUser?.id : undefined} value={typeof IgnoreParentUser === "object" && "value" in IgnoreParentUser ? IgnoreParentUser?.value : IgnoreParentUser} /* default: false */  isRaw={typeof IgnoreParentUser === "object" && "isRaw" in IgnoreParentUser && IgnoreParentUser.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RootSpace`} name="ParentSpace" id={typeof ParentSpace === "object" && "id" in ParentSpace ? ParentSpace?.id : undefined} value={typeof ParentSpace === "object" && "value" in ParentSpace ? ParentSpace?.value : ParentSpace} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.RootSpace,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof ParentSpace === "object" && "isRaw" in ParentSpace && ParentSpace.isRaw ? true : undefined} />
        </Component>
      );
    };
    