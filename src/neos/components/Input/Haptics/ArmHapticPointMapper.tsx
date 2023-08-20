import { member, Member, Component } from "../../../core";
    
    export interface ArmHapticPointMapperInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Priority?: member<number>;
ShowDebugVisuals?: member<boolean>;
BoneChain?: member<any>;
NormalizedStart?: member<number>;
NormalizedEnd?: member<number>;
Side?: member<any>;
UpAxis?: member<[number, number, number]>;
ForwardAxis?: member<[number, number, number]>;
HandRadius?: member<number>;
    }
    
    export function ArmHapticPointMapper(props: ArmHapticPointMapperInput){
      const { id, persistentId, updateOrder, Enabled,
Priority,
ShowDebugVisuals,
BoneChain,
NormalizedStart,
NormalizedEnd,
Side,
UpAxis,
ForwardAxis,
HandRadius, } = props;
    
      return (
        <Component type="FrooxEngine.ArmHapticPointMapper" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="Priority" id={typeof Priority === "object" && "id" in Priority ? Priority?.id : undefined} value={typeof Priority === "object" && "value" in Priority ? Priority?.value : Priority} /* default: 0 */  isRaw={typeof Priority === "object" && "isRaw" in Priority && Priority.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ShowDebugVisuals" id={typeof ShowDebugVisuals === "object" && "id" in ShowDebugVisuals ? ShowDebugVisuals?.id : undefined} value={typeof ShowDebugVisuals === "object" && "value" in ShowDebugVisuals ? ShowDebugVisuals?.value : ShowDebugVisuals} /* default: false */  isRaw={typeof ShowDebugVisuals === "object" && "isRaw" in ShowDebugVisuals && ShowDebugVisuals.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRefList\`1[FrooxEngine.Slot]`} name="BoneChain" id={typeof BoneChain === "object" && "id" in BoneChain ? BoneChain?.id : undefined} value={typeof BoneChain === "object" && "value" in BoneChain ? BoneChain?.value : BoneChain} /* default: FrooxEngine.SyncRefList`1[FrooxEngine.Slot] */  isRaw={typeof BoneChain === "object" && "isRaw" in BoneChain && BoneChain.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="NormalizedStart" id={typeof NormalizedStart === "object" && "id" in NormalizedStart ? NormalizedStart?.id : undefined} value={typeof NormalizedStart === "object" && "value" in NormalizedStart ? NormalizedStart?.value : NormalizedStart} /* default: 0 */  isRaw={typeof NormalizedStart === "object" && "isRaw" in NormalizedStart && NormalizedStart.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="NormalizedEnd" id={typeof NormalizedEnd === "object" && "id" in NormalizedEnd ? NormalizedEnd?.id : undefined} value={typeof NormalizedEnd === "object" && "value" in NormalizedEnd ? NormalizedEnd?.value : NormalizedEnd} /* default: 0 */  isRaw={typeof NormalizedEnd === "object" && "isRaw" in NormalizedEnd && NormalizedEnd.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.Chirality]`} name="Side" id={typeof Side === "object" && "id" in Side ? Side?.id : undefined} value={typeof Side === "object" && "value" in Side ? Side?.value : Side} /* default: Left */  isRaw={typeof Side === "object" && "isRaw" in Side && Side.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="UpAxis" id={typeof UpAxis === "object" && "id" in UpAxis ? UpAxis?.id : undefined} value={typeof UpAxis === "object" && "value" in UpAxis ? UpAxis?.value : UpAxis} /* default: [0; 0; 0] */  isRaw={typeof UpAxis === "object" && "isRaw" in UpAxis && UpAxis.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="ForwardAxis" id={typeof ForwardAxis === "object" && "id" in ForwardAxis ? ForwardAxis?.id : undefined} value={typeof ForwardAxis === "object" && "value" in ForwardAxis ? ForwardAxis?.value : ForwardAxis} /* default: [0; 0; 0] */  isRaw={typeof ForwardAxis === "object" && "isRaw" in ForwardAxis && ForwardAxis.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="HandRadius" id={typeof HandRadius === "object" && "id" in HandRadius ? HandRadius?.id : undefined} value={typeof HandRadius === "object" && "value" in HandRadius ? HandRadius?.value : HandRadius} /* default: 0 */  isRaw={typeof HandRadius === "object" && "isRaw" in HandRadius && HandRadius.isRaw ? true : undefined} />
        </Component>
      );
    };
    