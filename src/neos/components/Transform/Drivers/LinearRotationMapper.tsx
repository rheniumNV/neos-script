import { member, Member, Component } from "../../../core";
    
    export interface LinearRotationMapperInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Source?: member<any>;
Target?: member<any>;
SourceMin?: member<number>;
SourceMax?: member<number>;
TargetMin?: member<any>;
TargetMax?: member<any>;
AllowReverseMapping?: member<boolean>;
Clamp?: member<boolean>;
    }
    
    export function LinearRotationMapper(props: LinearRotationMapperInput){
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
        <Component type="FrooxEngine.LinearRotationMapper" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.IValue\`1[System.Single]]`} name="Source" id={typeof Source === "object" && "id" in Source ? Source?.id : undefined} value={typeof Source === "object" && "value" in Source ? Source?.value : Source} /* default: ID0 */  isRaw={typeof Source === "object" && "isRaw" in Source && Source.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.floatQ]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: ID0 */  isRaw={typeof Target === "object" && "isRaw" in Target && Target.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="SourceMin" id={typeof SourceMin === "object" && "id" in SourceMin ? SourceMin?.id : undefined} value={typeof SourceMin === "object" && "value" in SourceMin ? SourceMin?.value : SourceMin} /* default: 0 */  isRaw={typeof SourceMin === "object" && "isRaw" in SourceMin && SourceMin.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="SourceMax" id={typeof SourceMax === "object" && "id" in SourceMax ? SourceMax?.id : undefined} value={typeof SourceMax === "object" && "value" in SourceMax ? SourceMax?.value : SourceMax} /* default: 0 */  isRaw={typeof SourceMax === "object" && "isRaw" in SourceMax && SourceMax.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.floatQ]`} name="TargetMin" id={typeof TargetMin === "object" && "id" in TargetMin ? TargetMin?.id : undefined} value={typeof TargetMin === "object" && "value" in TargetMin ? TargetMin?.value : TargetMin} /* default: [0; 0; 0; 1] */  isRaw={typeof TargetMin === "object" && "isRaw" in TargetMin && TargetMin.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.floatQ]`} name="TargetMax" id={typeof TargetMax === "object" && "id" in TargetMax ? TargetMax?.id : undefined} value={typeof TargetMax === "object" && "value" in TargetMax ? TargetMax?.value : TargetMax} /* default: [0; 0; 0; 1] */  isRaw={typeof TargetMax === "object" && "isRaw" in TargetMax && TargetMax.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AllowReverseMapping" id={typeof AllowReverseMapping === "object" && "id" in AllowReverseMapping ? AllowReverseMapping?.id : undefined} value={typeof AllowReverseMapping === "object" && "value" in AllowReverseMapping ? AllowReverseMapping?.value : AllowReverseMapping} /* default: false */  isRaw={typeof AllowReverseMapping === "object" && "isRaw" in AllowReverseMapping && AllowReverseMapping.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Clamp" id={typeof Clamp === "object" && "id" in Clamp ? Clamp?.id : undefined} value={typeof Clamp === "object" && "value" in Clamp ? Clamp?.value : Clamp} /* default: false */  isRaw={typeof Clamp === "object" && "isRaw" in Clamp && Clamp.isRaw ? true : undefined} />
        </Component>
      );
    };
    