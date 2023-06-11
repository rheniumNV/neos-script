import { member, Member, Component } from "../../../core";
    
    export interface HeadHapticPointMapperInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Priority?: member<number>;
ShowDebugVisuals?: member<boolean>;
HeadSize?: member<[number, number, number]>;
HeadCenter?: member<[number, number, number]>;
_debugVisual?: member<any>;
    }
    
    export function HeadHapticPointMapper(props: HeadHapticPointMapperInput){
      const { id, persistentId, updateOrder, Enabled,
Priority,
ShowDebugVisuals,
HeadSize,
HeadCenter,
_debugVisual, } = props;
    
      return (
        <Component type="FrooxEngine.HeadHapticPointMapper" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="Priority" id={typeof Priority === "object" && "id" in Priority ? Priority?.id : undefined} value={typeof Priority === "object" && "value" in Priority ? Priority?.value : Priority} /* default: 0 */  isRaw={typeof Priority === "object" && "isRaw" in Priority && Priority.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ShowDebugVisuals" id={typeof ShowDebugVisuals === "object" && "id" in ShowDebugVisuals ? ShowDebugVisuals?.id : undefined} value={typeof ShowDebugVisuals === "object" && "value" in ShowDebugVisuals ? ShowDebugVisuals?.value : ShowDebugVisuals} /* default: false */  isRaw={typeof ShowDebugVisuals === "object" && "isRaw" in ShowDebugVisuals && ShowDebugVisuals.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="HeadSize" id={typeof HeadSize === "object" && "id" in HeadSize ? HeadSize?.id : undefined} value={typeof HeadSize === "object" && "value" in HeadSize ? HeadSize?.value : HeadSize} /* default: [0; 0; 0] */  isRaw={typeof HeadSize === "object" && "isRaw" in HeadSize && HeadSize.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="HeadCenter" id={typeof HeadCenter === "object" && "id" in HeadCenter ? HeadCenter?.id : undefined} value={typeof HeadCenter === "object" && "value" in HeadCenter ? HeadCenter?.value : HeadCenter} /* default: [0; 0; 0] */  isRaw={typeof HeadCenter === "object" && "isRaw" in HeadCenter && HeadCenter.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SlotCleanupRef\`1[FrooxEngine.Slot]`} name="_debugVisual" id={typeof _debugVisual === "object" && "id" in _debugVisual ? _debugVisual?.id : undefined} value={typeof _debugVisual === "object" && "value" in _debugVisual ? _debugVisual?.value : _debugVisual} /* default: ID0 */  isRaw={typeof _debugVisual === "object" && "isRaw" in _debugVisual && _debugVisual.isRaw ? true : undefined} />
        </Component>
      );
    };
    