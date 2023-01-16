import { member, Member, Component } from "../../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface ConeEmitterInput {
        
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
BaseRadius?: member<number>;
Height?: member<number>;
EmitFromShell?: member<boolean>;
RandomDirection?: member<number>;
ForceDirection?: member<boolean>;
ForcedDirection?: member<[number, number, number]>;
DirectionReferencePoint?: member<[number, number, number]>;
    }
    
    export function ConeEmitter(props: ConeEmitterInput){
      const { id, persistentId, updateOrder, Enabled,
System,
Rate,
BurstOnActivatedMin,
BurstOnActivatedMax,
BurstTimePeriod,
Bursts,
BaseRadius,
Height,
EmitFromShell,
RandomDirection,
ForceDirection,
ForcedDirection,
DirectionReferencePoint, } = props;
    
      return (
        <Component type="FrooxEngine.ConeEmitter" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ParticleSystem]`} name="System" id={typeof System === "object" && "id" in System ? System?.id : undefined} value={typeof System === "object" && "value" in System ? System?.value : System} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Rate" id={typeof Rate === "object" && "id" in Rate ? Rate?.id : undefined} value={typeof Rate === "object" && "value" in Rate ? Rate?.value : Rate} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="BurstOnActivatedMin" id={typeof BurstOnActivatedMin === "object" && "id" in BurstOnActivatedMin ? BurstOnActivatedMin?.id : undefined} value={typeof BurstOnActivatedMin === "object" && "value" in BurstOnActivatedMin ? BurstOnActivatedMin?.value : BurstOnActivatedMin} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="BurstOnActivatedMax" id={typeof BurstOnActivatedMax === "object" && "id" in BurstOnActivatedMax ? BurstOnActivatedMax?.id : undefined} value={typeof BurstOnActivatedMax === "object" && "value" in BurstOnActivatedMax ? BurstOnActivatedMax?.value : BurstOnActivatedMax} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Double]`} name="BurstTimePeriod" id={typeof BurstTimePeriod === "object" && "id" in BurstTimePeriod ? BurstTimePeriod?.id : undefined} value={typeof BurstTimePeriod === "object" && "value" in BurstTimePeriod ? BurstTimePeriod?.value : BurstTimePeriod} /* default: 0 */  />
<Member type={`FrooxEngine.SyncLinear\`1[FrooxEngine.ParticleBurst]`} name="Bursts" id={typeof Bursts === "object" && "id" in Bursts ? Bursts?.id : undefined} value={typeof Bursts === "object" && "value" in Bursts ? Bursts?.value : Bursts} /* default: FrooxEngine.SyncLinear`1[FrooxEngine.ParticleBurst] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="BaseRadius" id={typeof BaseRadius === "object" && "id" in BaseRadius ? BaseRadius?.id : undefined} value={typeof BaseRadius === "object" && "value" in BaseRadius ? BaseRadius?.value : BaseRadius} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Height" id={typeof Height === "object" && "id" in Height ? Height?.id : undefined} value={typeof Height === "object" && "value" in Height ? Height?.value : Height} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="EmitFromShell" id={typeof EmitFromShell === "object" && "id" in EmitFromShell ? EmitFromShell?.id : undefined} value={typeof EmitFromShell === "object" && "value" in EmitFromShell ? EmitFromShell?.value : EmitFromShell} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="RandomDirection" id={typeof RandomDirection === "object" && "id" in RandomDirection ? RandomDirection?.id : undefined} value={typeof RandomDirection === "object" && "value" in RandomDirection ? RandomDirection?.value : RandomDirection} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ForceDirection" id={typeof ForceDirection === "object" && "id" in ForceDirection ? ForceDirection?.id : undefined} value={typeof ForceDirection === "object" && "value" in ForceDirection ? ForceDirection?.value : ForceDirection} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="ForcedDirection" id={typeof ForcedDirection === "object" && "id" in ForcedDirection ? ForcedDirection?.id : undefined} value={typeof ForcedDirection === "object" && "value" in ForcedDirection ? ForcedDirection?.value : ForcedDirection} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="DirectionReferencePoint" id={typeof DirectionReferencePoint === "object" && "id" in DirectionReferencePoint ? DirectionReferencePoint?.id : undefined} value={typeof DirectionReferencePoint === "object" && "value" in DirectionReferencePoint ? DirectionReferencePoint?.value : DirectionReferencePoint} /* default: [0; 0; 0] */  />
        </Component>
      );
    };
    