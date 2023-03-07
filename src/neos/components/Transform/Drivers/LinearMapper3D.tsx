import { member, Member, Component } from "../../../core";
    
    export interface LinearMapper3DInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Source?: member<any>;
Target?: member<any>;
SourceMin?: member<number>;
SourceMax?: member<number>;
TargetMin?: member<[number, number, number]>;
TargetMax?: member<[number, number, number]>;
AllowReverseMapping?: member<boolean>;
Clamp?: member<boolean>;
    }
    
    export function LinearMapper3D(props: LinearMapper3DInput){
      const { id, persistentId, updateOrder, Enabled,
Source,
Target,
SourceMin,
SourceMax,
TargetMin,
TargetMax,
AllowReverseMapping,
Clamp, } = props;
    
      return (
        <Component type="FrooxEngine.LinearMapper3D" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.IValue\`1[System.Single]]`} name="Source" id={typeof Source === "object" && "id" in Source ? Source?.id : undefined} value={typeof Source === "object" && "value" in Source ? Source?.value : Source} /* default: ID0 */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float3]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="SourceMin" id={typeof SourceMin === "object" && "id" in SourceMin ? SourceMin?.id : undefined} value={typeof SourceMin === "object" && "value" in SourceMin ? SourceMin?.value : SourceMin} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="SourceMax" id={typeof SourceMax === "object" && "id" in SourceMax ? SourceMax?.id : undefined} value={typeof SourceMax === "object" && "value" in SourceMax ? SourceMax?.value : SourceMax} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="TargetMin" id={typeof TargetMin === "object" && "id" in TargetMin ? TargetMin?.id : undefined} value={typeof TargetMin === "object" && "value" in TargetMin ? TargetMin?.value : TargetMin} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="TargetMax" id={typeof TargetMax === "object" && "id" in TargetMax ? TargetMax?.id : undefined} value={typeof TargetMax === "object" && "value" in TargetMax ? TargetMax?.value : TargetMax} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AllowReverseMapping" id={typeof AllowReverseMapping === "object" && "id" in AllowReverseMapping ? AllowReverseMapping?.id : undefined} value={typeof AllowReverseMapping === "object" && "value" in AllowReverseMapping ? AllowReverseMapping?.value : AllowReverseMapping} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Clamp" id={typeof Clamp === "object" && "id" in Clamp ? Clamp?.id : undefined} value={typeof Clamp === "object" && "value" in Clamp ? Clamp?.value : Clamp} /* default: false */  />
        </Component>
      );
    };
    