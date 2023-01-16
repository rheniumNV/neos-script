import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface PackRows_Float3x3Input {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Row0?: member<any>;
Row1?: member<any>;
Row2?: member<any>;
    }
    
    export function PackRows_Float3x3(props: PackRows_Float3x3Input){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Row0,
Row1,
Row2, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Operators.PackRows_Float3x3" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.float3]`} name="Row0" id={typeof Row0 === "object" && "id" in Row0 ? Row0?.id : undefined} value={typeof Row0 === "object" && "value" in Row0 ? Row0?.value : Row0} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.float3]`} name="Row1" id={typeof Row1 === "object" && "id" in Row1 ? Row1?.id : undefined} value={typeof Row1 === "object" && "value" in Row1 ? Row1?.value : Row1} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[BaseX.float3]`} name="Row2" id={typeof Row2 === "object" && "id" in Row2 ? Row2?.id : undefined} value={typeof Row2 === "object" && "value" in Row2 ? Row2?.value : Row2} /* default: ID0 */  />
        </Component>
      );
    };
    