import { member, Member, Component } from "../../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface OnPasteNodeInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
Pasted?: member<any>;
    }
    
    export function OnPasteNode(props: OnPasteNodeInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
Pasted, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.ProgramFlow.OnPasteNode" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="Pasted" id={typeof Pasted === "object" && "id" in Pasted ? Pasted?.id : undefined} value={typeof Pasted === "object" && "value" in Pasted ? Pasted?.value : Pasted} /* default: FrooxEngine.WorldDelegate */  />
        </Component>
      );
    };
    