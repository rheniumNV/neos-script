import { member, Member, Component } from "../../../core";
    
    export interface TorsoHapticPointMapperInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Priority?: member<number>;
ShowDebugVisuals?: member<boolean>;
BoneChain?: member<any>;
NormalizedStart?: member<number>;
NormalizedEnd?: member<number>;
LowerWidth?: member<number>;
UpperWidth?: member<number>;
FrontOffset?: member<number>;
BackOffset?: member<number>;
    }
    
    export function TorsoHapticPointMapper(props: TorsoHapticPointMapperInput){
      const { id, persistentId, updateOrder, Enabled,
Priority,
ShowDebugVisuals,
BoneChain,
NormalizedStart,
NormalizedEnd,
LowerWidth,
UpperWidth,
FrontOffset,
BackOffset, } = props;
    
      return (
        <Component type="FrooxEngine.TorsoHapticPointMapper" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="Priority" id={typeof Priority === "object" && "id" in Priority ? Priority?.id : undefined} value={typeof Priority === "object" && "value" in Priority ? Priority?.value : Priority} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ShowDebugVisuals" id={typeof ShowDebugVisuals === "object" && "id" in ShowDebugVisuals ? ShowDebugVisuals?.id : undefined} value={typeof ShowDebugVisuals === "object" && "value" in ShowDebugVisuals ? ShowDebugVisuals?.value : ShowDebugVisuals} /* default: false */  />
<Member type={`FrooxEngine.SyncRefList\`1[FrooxEngine.Slot]`} name="BoneChain" id={typeof BoneChain === "object" && "id" in BoneChain ? BoneChain?.id : undefined} value={typeof BoneChain === "object" && "value" in BoneChain ? BoneChain?.value : BoneChain} /* default: FrooxEngine.SyncRefList`1[FrooxEngine.Slot] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="NormalizedStart" id={typeof NormalizedStart === "object" && "id" in NormalizedStart ? NormalizedStart?.id : undefined} value={typeof NormalizedStart === "object" && "value" in NormalizedStart ? NormalizedStart?.value : NormalizedStart} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="NormalizedEnd" id={typeof NormalizedEnd === "object" && "id" in NormalizedEnd ? NormalizedEnd?.id : undefined} value={typeof NormalizedEnd === "object" && "value" in NormalizedEnd ? NormalizedEnd?.value : NormalizedEnd} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="LowerWidth" id={typeof LowerWidth === "object" && "id" in LowerWidth ? LowerWidth?.id : undefined} value={typeof LowerWidth === "object" && "value" in LowerWidth ? LowerWidth?.value : LowerWidth} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="UpperWidth" id={typeof UpperWidth === "object" && "id" in UpperWidth ? UpperWidth?.id : undefined} value={typeof UpperWidth === "object" && "value" in UpperWidth ? UpperWidth?.value : UpperWidth} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="FrontOffset" id={typeof FrontOffset === "object" && "id" in FrontOffset ? FrontOffset?.id : undefined} value={typeof FrontOffset === "object" && "value" in FrontOffset ? FrontOffset?.value : FrontOffset} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="BackOffset" id={typeof BackOffset === "object" && "id" in BackOffset ? BackOffset?.id : undefined} value={typeof BackOffset === "object" && "value" in BackOffset ? BackOffset?.value : BackOffset} /* default: 0 */  />
        </Component>
      );
    };
    