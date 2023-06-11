import { member, Member, Component } from "../../../core";
    
    export interface ParticleSystemInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
MaxParticles?: member<number>;
Style?: member<any>;
SimulationSpace?: member<any>;
    }
    
    export function ParticleSystem(props: ParticleSystemInput){
      const { id, persistentId, updateOrder, Enabled,
MaxParticles,
Style,
SimulationSpace, } = props;
    
      return (
        <Component type="FrooxEngine.ParticleSystem" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="MaxParticles" id={typeof MaxParticles === "object" && "id" in MaxParticles ? MaxParticles?.id : undefined} value={typeof MaxParticles === "object" && "value" in MaxParticles ? MaxParticles?.value : MaxParticles} /* default: 0 */  isRaw={typeof MaxParticles === "object" && "isRaw" in MaxParticles && MaxParticles.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ParticleStyle]`} name="Style" id={typeof Style === "object" && "id" in Style ? Style?.id : undefined} value={typeof Style === "object" && "value" in Style ? Style?.value : Style} /* default: ID0 */  isRaw={typeof Style === "object" && "isRaw" in Style && Style.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RootSpace`} name="SimulationSpace" id={typeof SimulationSpace === "object" && "id" in SimulationSpace ? SimulationSpace?.id : undefined} value={typeof SimulationSpace === "object" && "value" in SimulationSpace ? SimulationSpace?.value : SimulationSpace} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.RootSpace,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  isRaw={typeof SimulationSpace === "object" && "isRaw" in SimulationSpace && SimulationSpace.isRaw ? true : undefined} />
        </Component>
      );
    };
    