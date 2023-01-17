import { member, Member, Component } from "../../core";
    
    export interface NeosEnderInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_text?: member<any>;
    }
    
    export function NeosEnder(props: NeosEnderInput){
      const { id, persistentId, updateOrder, Enabled,
_text, } = props;
    
      return (
        <Component type="FrooxEngine.NeosEnder" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.TextRenderer]`} name="_text" id={typeof _text === "object" && "id" in _text ? _text?.id : undefined} value={typeof _text === "object" && "value" in _text ? _text?.value : _text} /* default: ID0 */  />
        </Component>
      );
    };
    