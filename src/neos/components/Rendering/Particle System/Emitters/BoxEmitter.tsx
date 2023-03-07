import { member, Member, Component } from "../../../../core";
    
    export interface BoxEmitterInput {
        
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
RandomDirection?: member<number>;
Size?: member<[number, number, number]>;
Direction?: member<[number, number, number]>;
    }
    
    export function BoxEmitter(props: BoxEmitterInput){
      const { id, persistentId, updateOrder, Enabled,
System,
Rate,
BurstOnActivatedMin,
BurstOnActivatedMax,
BurstTimePeriod,
Bursts,
RandomDirection,
Size,
Direction, } = props;
    
      return (
        <Component type="FrooxEngine.BoxEmitter" id={id} persistentId={persistentId} updateOrder={updateOrder} version={1}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ParticleSystem]`} name="System" id={typeof System === "object" && "id" in System ? System?.id : undefined} value={typeof System === "object" && "value" in System ? System?.value : System} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Rate" id={typeof Rate === "object" && "id" in Rate ? Rate?.id : undefined} value={typeof Rate === "object" && "value" in Rate ? Rate?.value : Rate} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="BurstOnActivatedMin" id={typeof BurstOnActivatedMin === "object" && "id" in BurstOnActivatedMin ? BurstOnActivatedMin?.id : undefined} value={typeof BurstOnActivatedMin === "object" && "value" in BurstOnActivatedMin ? BurstOnActivatedMin?.value : BurstOnActivatedMin} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="BurstOnActivatedMax" id={typeof BurstOnActivatedMax === "object" && "id" in BurstOnActivatedMax ? BurstOnActivatedMax?.id : undefined} value={typeof BurstOnActivatedMax === "object" && "value" in BurstOnActivatedMax ? BurstOnActivatedMax?.value : BurstOnActivatedMax} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Double]`} name="BurstTimePeriod" id={typeof BurstTimePeriod === "object" && "id" in BurstTimePeriod ? BurstTimePeriod?.id : undefined} value={typeof BurstTimePeriod === "object" && "value" in BurstTimePeriod ? BurstTimePeriod?.value : BurstTimePeriod} /* default: 0 */  />
<Member type={`FrooxEngine.SyncLinear\`1[FrooxEngine.ParticleBurst]`} name="Bursts" id={typeof Bursts === "object" && "id" in Bursts ? Bursts?.id : undefined} value={typeof Bursts === "object" && "value" in Bursts ? Bursts?.value : Bursts} /* default: FrooxEngine.SyncLinear`1[FrooxEngine.ParticleBurst] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="RandomDirection" id={typeof RandomDirection === "object" && "id" in RandomDirection ? RandomDirection?.id : undefined} value={typeof RandomDirection === "object" && "value" in RandomDirection ? RandomDirection?.value : RandomDirection} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Size" id={typeof Size === "object" && "id" in Size ? Size?.id : undefined} value={typeof Size === "object" && "value" in Size ? Size?.value : Size} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="Direction" id={typeof Direction === "object" && "id" in Direction ? Direction?.id : undefined} value={typeof Direction === "object" && "value" in Direction ? Direction?.value : Direction} /* default: [0; 0; 0] */  />
        </Component>
      );
    };
    