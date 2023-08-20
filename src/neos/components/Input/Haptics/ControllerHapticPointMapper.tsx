import { member, Member, Component } from "../../../core";
    
    export interface ControllerHapticPointMapperInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Priority?: member<number>;
ShowDebugVisuals?: member<boolean>;
Side?: member<any>;
    }
    
    export function ControllerHapticPointMapper(props: ControllerHapticPointMapperInput){
      const { id, persistentId, updateOrder, Enabled,
Priority,
ShowDebugVisuals,
Side, } = props;
    
      return (
        <Component type="FrooxEngine.ControllerHapticPointMapper" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="Priority" id={typeof Priority === "object" && "id" in Priority ? Priority?.id : undefined} value={typeof Priority === "object" && "value" in Priority ? Priority?.value : Priority} /* default: 0 */  isRaw={typeof Priority === "object" && "isRaw" in Priority && Priority.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="ShowDebugVisuals" id={typeof ShowDebugVisuals === "object" && "id" in ShowDebugVisuals ? ShowDebugVisuals?.id : undefined} value={typeof ShowDebugVisuals === "object" && "value" in ShowDebugVisuals ? ShowDebugVisuals?.value : ShowDebugVisuals} /* default: false */  isRaw={typeof ShowDebugVisuals === "object" && "isRaw" in ShowDebugVisuals && ShowDebugVisuals.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.Chirality]`} name="Side" id={typeof Side === "object" && "id" in Side ? Side?.id : undefined} value={typeof Side === "object" && "value" in Side ? Side?.value : Side} /* default: Left */  isRaw={typeof Side === "object" && "isRaw" in Side && Side.isRaw ? true : undefined} />
        </Component>
      );
    };
    