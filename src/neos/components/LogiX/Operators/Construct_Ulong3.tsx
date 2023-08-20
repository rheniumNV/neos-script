import { member, Member, Component } from "../../../core";
    
    export interface Construct_Ulong3Input {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
X?: member<any>;
Y?: member<any>;
Z?: member<any>;
    }
    
    export function Construct_Ulong3(props: Construct_Ulong3Input){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
X,
Y,
Z, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Operators.Construct_Ulong3" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  isRaw={typeof _activeVisual === "object" && "isRaw" in _activeVisual && _activeVisual.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.UInt64]`} name="X" id={typeof X === "object" && "id" in X ? X?.id : undefined} value={typeof X === "object" && "value" in X ? X?.value : X} /* default: ID0 */  isRaw={typeof X === "object" && "isRaw" in X && X.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.UInt64]`} name="Y" id={typeof Y === "object" && "id" in Y ? Y?.id : undefined} value={typeof Y === "object" && "value" in Y ? Y?.value : Y} /* default: ID0 */  isRaw={typeof Y === "object" && "isRaw" in Y && Y.isRaw ? true : undefined} />
<Member type={`FrooxEngine.LogiX.Input\`1[System.UInt64]`} name="Z" id={typeof Z === "object" && "id" in Z ? Z?.id : undefined} value={typeof Z === "object" && "value" in Z ? Z?.value : Z} /* default: ID0 */  isRaw={typeof Z === "object" && "isRaw" in Z && Z.isRaw ? true : undefined} />
        </Component>
      );
    };
    