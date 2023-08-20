import { member, Member, Component } from "../../../../core";
    
    export interface SphereEmitterInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
System?: member<any>;
Rate?: member<number>;
BurstOnActivatedMin?: member<number>;
BurstOnActivatedMax?: member<number>;
BurstTimePeriod?: member<number>;
Bursts?: member<any>;
Radius?: member<number>;
EmitFromShell?: member<boolean>;
RandomDirection?: member<number>;
ForceDirection?: member<boolean>;
ForcedDirection?: member<[number, number, number]>;
DirectionReferencePoint?: member<[number, number, number]>;
    }
    
    export function SphereEmitter(props: SphereEmitterInput){
      const { id, persistentId, updateOrder, Enabled,
System,
Rate,
BurstOnActivatedMin,
BurstOnActivatedMax,
BurstTimePeriod,
Bursts,
Radius,
EmitFromShell,
RandomDirection,
ForceDirection,
ForcedDirection,
DirectionReferencePoint, } = props;
    
      return (
        <Component type="FrooxEngine.SphereEmitter" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ParticleSystem]`} name="System" id={typeof System === "object" && "id" in System ? System?.id : undefined} value={typeof System === "object" && "value" in System ? System?.value : System} /* default: ID0 */  isRaw={typeof System === "object" && "isRaw" in System && System.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Rate" id={typeof Rate === "object" && "id" in Rate ? Rate?.id : undefined} value={typeof Rate === "object" && "value" in Rate ? Rate?.value : Rate} /* default: 0 */  isRaw={typeof Rate === "object" && "isRaw" in Rate && Rate.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="BurstOnActivatedMin" id={typeof BurstOnActivatedMin === "object" && "id" in BurstOnActivatedMin ? BurstOnActivatedMin?.id : undefined} value={typeof BurstOnActivatedMin === "object" && "value" in BurstOnActivatedMin ? BurstOnActivatedMin?.value : BurstOnActivatedMin} /* default: 0 */  isRaw={typeof BurstOnActivatedMin === "object" && "isRaw" in BurstOnActivatedMin && BurstOnActivatedMin.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="BurstOnActivatedMax" id={typeof BurstOnActivatedMax === "object" && "id" in BurstOnActivatedMax ? BurstOnActivatedMax?.id : undefined} value={typeof BurstOnActivatedMax === "object" && "value" in BurstOnActivatedMax ? BurstOnActivatedMax?.value : BurstOnActivatedMax} /* default: 0 */  isRaw={typeof BurstOnActivatedMax === "object" && "isRaw" in BurstOnActivatedMax && BurstOnActivatedMax.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Double]`} name="BurstTimePeriod" id={typeof BurstTimePeriod === "object" && "id" in BurstTimePeriod ? BurstTimePeriod?.id : undefined} value={typeof BurstTimePeriod === "object" && "value" in BurstTimePeriod ? BurstTimePeriod?.value : BurstTimePeriod} /* default: 0 */  isRaw={typeof BurstTimePeriod === "object" && "isRaw" in BurstTimePeriod && BurstTimePeriod.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncLinear\`1[FrooxEngine.ParticleBurst]`} name="Bursts" id={typeof Bursts === "object" && "id" in Bursts ? Bursts?.id : undefined} value={typeof Bursts === "object" && "value" in Bursts ? Bursts?.value : Bursts} /* default: FrooxEngine.SyncLinear`1[FrooxEngine.ParticleBurst] */  isRaw={typeof Bursts === "object" && "isRaw" in Bursts && Bursts.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Radius" id={typeof Radius === "object" && "id" in Radius ? Radius?.id : undefined} value={typeof Radius === "object" && "value" in Radius ? Radius?.value : Radius} /* default: 0 */  isRaw={typeof Radius === "object" && "isRaw" in Radius && Radius.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="EmitFromShell" id={typeof EmitFromShell === "object" && "id" in EmitFromShell ? EmitFromShell?.id : undefined} value={typeof EmitFromShell === "object" && "value" in EmitFromShell ? EmitFromShell?.value : EmitFromShell} /* default: false */  isRaw={typeof EmitFromShell === "object" && "isRaw" in EmitFromShell && EmitFromShell.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="RandomDirection" id={typeof RandomDirection === "object" && "id" in RandomDirection ? RandomDirection?.id : undefined} value={typeof RandomDirection === "object" && "value" in RandomDirection ? RandomDirection?.value : RandomDirection} /* default: 0 */  isRaw={typeof RandomDirection === "object" && "isRaw" in RandomDirection && RandomDirection.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ForceDirection" id={typeof ForceDirection === "object" && "id" in ForceDirection ? ForceDirection?.id : undefined} value={typeof ForceDirection === "object" && "value" in ForceDirection ? ForceDirection?.value : ForceDirection} /* default: false */  isRaw={typeof ForceDirection === "object" && "isRaw" in ForceDirection && ForceDirection.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="ForcedDirection" id={typeof ForcedDirection === "object" && "id" in ForcedDirection ? ForcedDirection?.id : undefined} value={typeof ForcedDirection === "object" && "value" in ForcedDirection ? ForcedDirection?.value : ForcedDirection} /* default: [0; 0; 0] */  isRaw={typeof ForcedDirection === "object" && "isRaw" in ForcedDirection && ForcedDirection.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="DirectionReferencePoint" id={typeof DirectionReferencePoint === "object" && "id" in DirectionReferencePoint ? DirectionReferencePoint?.id : undefined} value={typeof DirectionReferencePoint === "object" && "value" in DirectionReferencePoint ? DirectionReferencePoint?.value : DirectionReferencePoint} /* default: [0; 0; 0] */  isRaw={typeof DirectionReferencePoint === "object" && "isRaw" in DirectionReferencePoint && DirectionReferencePoint.isRaw ? true : undefined} />
        </Component>
      );
    };
    